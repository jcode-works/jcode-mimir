import { existsSync } from "node:fs"
import path from "node:path"
import { findProjectRoot, loadConfig } from "./config.js"
import { CONFIG_PATH } from "./defaults.js"
import { audit } from "./ingest.js"
import { securityAudit } from "./security.js"
import { countRows } from "./store.js"
import type { DoctorReport } from "./types.js"

export async function doctor(cwd = process.cwd()): Promise<DoctorReport> {
  const projectRoot = findProjectRoot(cwd)
  const initialized = existsSync(path.join(projectRoot, CONFIG_PATH))
  const config = await loadConfig(cwd)
  const [auditReport, securityReport, chunksIndexed] = await Promise.all([
    audit(projectRoot),
    securityAudit(projectRoot),
    countRows(config),
  ])

  const nextSteps = nextActions({
    initialized,
    supportedFiles: auditReport.supportedFiles.length,
    chunksIndexed,
    missingFromIndex: auditReport.missingFromIndex.length,
    staleInIndex: auditReport.staleInIndex.length,
    warnings: securityReport.warnings.length,
  })

  return {
    projectRoot: config.projectRoot,
    initialized,
    rawDir: config.rawDir,
    storageDir: config.storageDir,
    embeddingProvider: config.embeddingProvider,
    transformersAllowRemoteModels: config.transformersAllowRemoteModels,
    redactionEnabled: config.redaction.enabled,
    accessLog: config.accessLog,
    supportedFiles: auditReport.supportedFiles.length,
    indexedFiles: auditReport.indexedFiles.length,
    chunksIndexed,
    missingFromIndex: auditReport.missingFromIndex.length,
    staleInIndex: auditReport.staleInIndex.length,
    securityWarnings: securityReport.warnings,
    ready:
      initialized &&
      chunksIndexed > 0 &&
      auditReport.missingFromIndex.length === 0 &&
      auditReport.staleInIndex.length === 0 &&
      securityReport.warnings.length === 0,
    nextSteps,
  }
}

interface NextActionInput {
  initialized: boolean
  supportedFiles: number
  chunksIndexed: number
  missingFromIndex: number
  staleInIndex: number
  warnings: number
}

function nextActions(input: NextActionInput): string[] {
  const steps: string[] = []

  if (!input.initialized) {
    steps.push("Run `pnpm exec kb init` to create .kb/config.json and private/.")
    return steps
  }

  if (input.supportedFiles === 0) {
    steps.push("Add supported files under private/ or list extra source paths in .kb/sources.txt.")
    return steps
  }

  if (input.chunksIndexed === 0 || input.missingFromIndex > 0 || input.staleInIndex > 0) {
    steps.push("Run `pnpm exec kb ingest` to rebuild the local index.")
    steps.push("Run `pnpm exec kb audit` to verify missingFromIndex=0 and staleInIndex=0.")
  }

  if (input.warnings > 0) {
    steps.push("Run `pnpm exec kb security-audit --strict` and fix the reported warnings.")
  }

  if (steps.length === 0) {
    steps.push('Run `pnpm exec kb search "your question"` to retrieve source passages.')
    steps.push('Run `pnpm exec kb ask "your question"` to produce cited retrieval context.')
    steps.push(
      "Run `pnpm exec kb install-skill` if an AI agent should use the local knowledge base.",
    )
  }

  return steps
}
