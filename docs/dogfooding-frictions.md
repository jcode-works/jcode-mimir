# Dogfooding Frictions

This ledger tracks product frictions found while using Mimir locally. Keep private client details and
raw evidence outside the repository.

| Priority | Friction | Current impact | Next action |
| --- | --- | --- | --- |
| P0 | Semantic mode still needs a manual three-step path: pull model, edit `.kb/config.json`, rebuild. | Users can stay on `local-hash` and think they have semantic retrieval. | Keep `mimir doctor` guidance sharp; consider a safe `mimir doctor --fix-semantic` only after real dogfooding proves the default. |
| P0 | Real-agent MCP proof is not yet recorded against a private client brief. | Repo tests can prove protocol compatibility, but not agent ergonomics in Claude Code/Cursor. | Run the generated `.mimir/claude-mcp-server.json` or equivalent local client config against a private corpus and record only sanitized findings here. |
| P0 | Mixed private corpus validation is still external to the repo. | OSS fixtures exercise text formats, but not the exact PDF/DOCX/XLSX meeting-note mix from real work. | Run a local evidence ledger outside git; summarize extraction/recall failures without committing source material. |
| P1 | Offline audio is safer for confidential dossiers but less turnkey than Edge TTS. | Users may choose higher-quality online rendering before understanding the privacy tradeoff. | Keep docs explicit and test a local `.mimir/audio/` render during dogfooding. |
| P1 | Direct-download app release depends on signing machines, certificates, and update metadata. | The app can be built locally, but public release remains blocked by operational setup. | Keep release preflight strict and avoid placeholder updater keys or store-led assumptions. |
