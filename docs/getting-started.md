# Getting Started

This tutorial gets a repository from zero to a working local Mimir knowledge base.

## Who This Is For

Use this when you want an AI agent, CLI, or local workflow to retrieve grounded context from private
project documents without sending the dataset to a hosted RAG service.

## Prerequisites

- Node.js 20 or newer.
- pnpm, npm, yarn, or bun. The examples below use pnpm.
- A repository where local generated folders can be ignored by Git.

## 1. Install Mimir

```bash
pnpm add -D @jcode.labs/mimir
```

## 2. Initialize The Repository

```bash
pnpm exec kb init
pnpm exec kb doctor
```

`kb init` creates:

```plain text
private/          # raw documents to ingest
.kb/config.json   # local config
.kb/sources.txt   # optional extra source paths
.gitignore        # ignores private/**, .kb/, and .mimir/
```

`kb doctor` explains what is missing and the next command to run.

## 3. Add Documents

Put supported files under `private/`:

```plain text
private/
  policy.md
  meeting-notes.pdf
  requirements.docx
```

Do not put secrets, env files, or public repo content under `private/` unless you intend Mimir to
index them.

## 4. Build The Local Index

```bash
pnpm exec kb ingest
pnpm exec kb doctor
```

When the index is ready, `kb doctor` prints `ready=true`.

## 5. Retrieve Evidence

Use `search` for exact passages:

```bash
pnpm exec kb search "approval for offline operation"
```

Use `ask` when you want cited retrieval context to hand to an AI agent or model:

```bash
pnpm exec kb ask "What evidence supports offline operation?"
```

Mimir does not synthesize an LLM answer. It returns cited local passages; your chosen agent or model
does the writing around those passages.

## 6. Connect An Agent

```bash
pnpm exec kb install-skill
```

This creates:

```plain text
.mimir/skills/mimir/SKILL.md
.mimir/skills/mimir-audio-summary/SKILL.md
.mimir/mcp.json
.mimir/README.md
```

Use `.mimir/mcp.json` with MCP-compatible agents. Load `.mimir/skills/mimir/` in agents that support
portable skill folders.

## 7. Optional Audio Summary

Confidential/offline audio:

```bash
pnpm exec kb audio /tmp/summary.txt \
  --engine transformers \
  --offline \
  --out .mimir/audio/summary.wav
```

Higher-quality online MP3:

```bash
pipx install edge-tts
pnpm exec kb audio /tmp/summary.txt \
  --engine edge \
  --out .mimir/audio/summary.mp3
```

The Edge path sends narration text to the online Edge TTS service. Use it only when that is
acceptable for the content.
