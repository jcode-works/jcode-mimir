# FR/EU Sovereign Positioning

This document keeps Mimir's sovereignty, privacy, and legal-vertical positioning precise. It is a
product and sales enablement note, not legal advice or a compliance certificate.

Sources checked on 2026-06-29:

- European Commission, [Legal framework of EU data protection](https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en)
- CNIL, [Les six grands principes du RGPD](https://www.cnil.fr/fr/comprendre-le-rgpd/les-six-grands-principes-du-rgpd)
- CNIL, [IA : comment etre en conformite avec le RGPD ?](https://www.cnil.fr/fr/intelligence-artificielle/ia-comment-etre-en-conformite-avec-le-rgpd)
- European Commission, [AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)

## Core Position

Mimir is positioned as sovereign local retrieval for confidential dossiers:

- Documents stay in user-selected local folders.
- Indexes, reports, audio files, agent configs, and access logs stay under ignored local Mimir state.
- There is no hosted Mimir document store, no hosted vector database, and no product telemetry by
  default.
- Redaction runs before indexing.
- Remote model downloads are explicit; confidential workflows should keep remote model loading
  disabled and use preloaded local models.
- Retrieval returns cited passages and source paths; final professional conclusions remain outside
  Mimir Core.
- Mimir Desktop is distributed through direct downloads and sideloadable installers, not App Store or
  Play Store listings.

This is stronger and more defensible than claiming generic "GDPR compliant AI". Mimir can help a
customer reduce data exposure, but each organization still owns its own processing purpose, legal
basis, retention, security controls, and professional obligations.

## Claims To Use

Use these claims in landing pages, sales calls, and documentation:

- "Local-first retrieval for confidential documents."
- "No document upload to a hosted Mimir service."
- "No product telemetry by default."
- "Metadata-only access logs; raw queries are not stored by default."
- "Redaction before indexing."
- "Explicit model downloads; remote loading is disabled for confidential indexing by default."
- "Designed to support GDPR-conscious workflows through minimization, transparency, and local
  control."
- "Legal-dossier workflows prepare cited work products for professional review; they do not replace
  legal advice."
- "French-language support and FR/EU-oriented onboarding can be part of the paid offer."

## Claims To Avoid

Do not use these claims unless a separate legal/security review proves them for a specific release:

- "GDPR compliant" as a blanket product guarantee.
- "AI Act compliant" as a blanket product guarantee.
- "Certified sovereign", "SecNumCloud", "HDS", "eIDAS", or equivalent regulated certification.
- "Attorney-client privilege guaranteed" or "secret professionnel guaranteed".
- "No risk", "fully private", or "zero compliance work".
- "Automated legal advice" or "lawyer replacement".
- Any promise that Android or iOS distribution goes through official stores.

## GDPR-Oriented Product Evidence

Mimir should keep these evidence points easy to show during buyer review:

| GDPR-oriented theme | Mimir evidence |
| --- | --- |
| Purpose and minimization | Users choose explicit folders; unsupported files are reported; remote models require an explicit action. |
| Local control | Raw documents, `.kb/`, `.mimir/`, reports, audio, and agent configs remain local and ignored by Git. |
| Security and confidentiality | No hosted document store, no default telemetry, redaction before indexing, metadata-only access logs. |
| Transparency | CLI and app expose `mimir doctor`, `mimir audit`, `mimir audit --unsupported`, and `mimir security-audit`. |
| Retention | Users can delete generated `.kb/` and `.mimir/` state locally; Mimir should not retain hosted copies. |
| Accountability | Public README, security hardening notes, open-core boundary, and reproducible local validation commands. |

For paid support, if JCode ever receives customer documents, excerpts, logs, or screenshots that may
contain personal data, that support flow becomes a separate operational process. Keep it outside this
repository and define access, retention, deletion, and customer approval before accepting the data.

## AI Act-Oriented Position

Mimir Core is a retrieval layer. It indexes local documents, searches them, and returns cited context.
It does not train a general-purpose model, provide a hosted AI system, or automate legal decisions by
default.

Reassess the AI Act posture before shipping any of the following:

- embedded local generation that writes final answers without an external agent;
- vertical workflows that could be used for employment, education, credit, migration, law
  enforcement, healthcare, or other high-risk decision contexts;
- hosted inference, hosted evaluation, or model training on customer data;
- public claims that generated legal outputs are authoritative.

If embedded generation ships later, keep human review explicit, label generated content clearly, and
document whether Mimir is acting as a provider of an AI system, a deployer tool, or only a local
interface over user-controlled models.

## Legal Vertical Packaging

The legal vertical can be sold as workflow packaging, not legal judgment:

- cited dossier summaries;
- chronologies with evidence confidence;
- clause review tables;
- evidence gap lists;
- redaction and professional-review checklists;
- French-language onboarding and support.

The `mimir-legal-dossier` skill must stay aligned with this boundary: it prepares structured,
cited work products and flags professional-review items. It must not present conclusions as legal
advice.

## Legal Vertical Validation Script

Run this only after the developer/consultant v1 has enough signal. Keep names, matters, case
references, emails, invoices, and customer notes in a private ledger outside the repository.

1. What confidential legal or quasi-legal dossiers do you analyze repeatedly?
2. Which documents are hardest to search across: contracts, email exports, pleadings, invoices,
   evidence exhibits, tax notes, or meeting notes?
3. What prevents you from using hosted AI tools for those dossiers?
4. Which local proof would you need before trusting a retrieval tool: no upload, source citations,
   redaction, access logs, offline mode, signed installer, or support contract?
5. Show the Mimir Core CLI/MCP workflow and the legal-dossier output formats.
6. Ask for a sanitized sample workflow they would be willing to test.
7. Ask directly whether they would pay for a signed local desktop client, French-language onboarding,
   and legal-dossier templates.
8. Ask what professional responsibility, audit, retention, or confidentiality blocker would stop a
   purchase.
9. Record only aggregated outcome data in public docs.

Legal vertical GO requires at least three paid professional customers or paid pilots, not just
interest in the idea.
