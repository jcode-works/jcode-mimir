# GTM Validation

This document defines the minimum evidence required before investing more in the paid Mimir app.
Do not store prospect names, emails, contracts, invoices, or private customer notes in this
repository. Keep the live validation ledger in a private CRM, spreadsheet, or Notion database.

## Decision Gate

The paid desktop/mobile app remains a hypothesis until both gates pass:

| Gate | GO threshold | NO-GO signal |
| --- | --- | --- |
| Willingness to pay | At least 5 paid pre-sales or purchases | Users like the idea but refuse to pay before delivery |
| Problem intensity | At least 8 interviews with 5 strong pain signals | Users already solve the problem cheaply with existing tools |

Do not count a waitlist signup, friendly verbal interest, or GitHub star as payment validation.
Count only a paid pre-sale, purchase, signed order, or explicit procurement commitment with a named
buyer and target price.

## Target Segment

Primary v1 buyer:

- Developers, freelance consultants, agencies, and small technical teams.
- Regularly receive confidential client dossiers, RFPs, specifications, audit material, or internal
  process documents.
- Already use coding agents or LLM assistants and need local, cited retrieval without uploading raw
  documents to a hosted SaaS.

Do not spend v1 sales effort on legal professionals until the developer/consultant segment has been
validated. The legal vertical stays a later packaging decision.

## Interview Script

Run interviews as problem discovery first, pricing second:

1. What confidential documents do you regularly need to analyze?
2. What is painful today when you search, summarize, or cross-check those documents?
3. Which AI tools do you already use for this workflow, if any?
4. What prevents you from uploading these documents to a hosted SaaS?
5. What would a local tool need to prove before you trust it with this workflow?
6. Show the Mimir Core workflow and the desktop client preview.
7. Ask for the next real dossier they would try it on.
8. Ask directly: would you pay EUR 390 once, or EUR 29/month, for a signed local desktop client?
9. If yes, ask whether they would pay a pre-sale now for early access.
10. If no, ask what price or missing capability would change the answer.

## Evidence Ledger Fields

Track these fields outside the repository:

| Field | Purpose |
| --- | --- |
| Interview date | Confirms recency |
| Segment | Developer, consultant, agency, internal team |
| Confidential workflow | Concrete document use case |
| Pain score | 1-5, where 5 means active budget or urgent project |
| Current workaround | Existing tool/process |
| Trust blocker | What prevents adoption |
| WTP response | EUR 390, EUR 29/month, other, no |
| Payment evidence | Pre-sale, order, invoice, signed commitment, none |
| Follow-up action | Trial, demo, invoice, no action |

Store evidence links in the private ledger only. If a public summary is needed later, aggregate the
counts without exposing names, files, companies, or confidential document details.

## GO / NO-GO Rules

GO when all are true:

- At least 5 paid pre-sales or purchases exist.
- At least 8 interviews are complete.
- At least 5 interviews mention confidential local document work as an active problem.
- At least 3 buyers can name a real dossier they would test in the next 30 days.
- The accepted price is close enough to the pricing hypothesis to fund signing, packaging, support,
  and maintenance.

NO-GO or pause when any are true:

- The product receives praise but no paid commitment.
- Buyers mainly want hosted collaboration instead of local-first software.
- Buyers need non-technical generation workflows before they value retrieval.
- The required trust/compliance proof is too expensive for a solo v1.

## Landing And Checkout Rule

Until the app is signed and a paid path is ready, the landing should present Mimir Core and tease the
desktop client. Do not add a waitlist. When pre-sales are acceptable, use a hosted Lemon Squeezy link
or manual invoice flow outside the repository, then convert the paid order or subscription event into
a local license with `pnpm --filter @jcode.labs/mimir-app license:from-lemonsqueezy`.
