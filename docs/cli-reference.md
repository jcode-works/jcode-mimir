# CLI Reference

Mimir ships two CLIs:

- `kb`: the main local RAG, MCP, skills, security, and audio command.
- `mimir-tts`: the standalone text-to-speech renderer used by `kb audio`.

## Main Workflow

| Command | Use It When |
| --- | --- |
| `kb init` | Create `.kb/config.json`, `.kb/sources.txt`, `private/`, and Git ignore rules. |
| `kb doctor` | Diagnose setup, index freshness, security warnings, and the next command to run. |
| `kb ingest` | Parse source files, redact, chunk, embed, and rebuild the local LanceDB index. |
| `kb audit` | Check whether supported source files are missing from or stale in the index. |
| `kb search "<query>"` | Retrieve ranked passages without asking an LLM to write an answer. |
| `kb ask "<question>"` | Return cited retrieval context for an agent or trusted model runtime. |
| `kb security-audit` | Inspect privacy posture: telemetry, providers, redaction, Git ignore, MCP. |
| `kb status` | Print raw config paths, provider settings, and indexed chunk count. |

## Agent Integration

| Command | Use It When |
| --- | --- |
| `kb install-skill` | Copy portable agent skills and an MCP config snippet into `.mimir/`. |
| `kb skill-path` | Print the package-bundled skill path for agents that load installed package skills. |
| `kb serve-mcp` | Start the MCP stdio server for compatible agents. |

MCP tools exposed by `kb serve-mcp`:

- `mimir_status`
- `mimir_search`
- `mimir_ask`
- `mimir_audit`
- `mimir_security_audit`

## Maintenance And Safety

| Command | Use It When |
| --- | --- |
| `kb destroy-index --yes` | Delete generated `.kb/storage` index files. |
| `kb security-audit --strict` | Fail the command when privacy warnings are present. |

`destroy-index` does not securely erase SSD or copy-on-write storage. For strong deletion
guarantees, use encrypted storage and destroy the encryption key.

## Audio

| Command | Use It When |
| --- | --- |
| `kb audio --doctor` | Check TTS runtime readiness. |
| `kb audio <file> --engine transformers --offline --out .mimir/audio/name.wav` | Render a confidential/offline WAV. |
| `kb audio <file> --engine edge --out .mimir/audio/name.mp3` | Render a higher-quality online Edge MP3. |
| `mimir-tts doctor --json` | Inspect the standalone TTS package. |
| `mimir-tts render <file> --offline --out .mimir/audio/name.wav` | Render directly through the TTS package. |

`kb audio` defaults to the offline/confidential Transformers.js path. MP3 output requires explicit
`--engine edge` because Edge TTS is an online service.

## Important Options

| Option | Applies To | Meaning |
| --- | --- | --- |
| `--top-k <number>` | `search`, `ask` | Number of passages to return. |
| `--json` | `doctor`, `security-audit`, `audio --doctor`, `mimir-tts doctor` | Print machine-readable JSON. |
| `--strict` | `security-audit` | Exit non-zero when warnings exist. |
| `--offline` | `audio`, `mimir-tts render` | Disable remote model downloads and force the local Transformers.js path. |
| `--allow-remote-models` | `audio`, `mimir-tts render` | Explicitly allow model downloads for Transformers.js. |
| `--engine edge` | `audio`, `mimir-tts render` | Use online Edge TTS for MP3 output. |

## Environment Overrides

Config values can be overridden through environment variables:

- `KB_RAW_DIR`
- `KB_STORAGE_DIR`
- `KB_SOURCES_FILE`
- `KB_ACCESS_LOG_PATH`
- `KB_EMBEDDING_PROVIDER`
- `KB_EMBEDDING_MODEL`
- `KB_EMBEDDING_MODEL_PATH`
- `KB_TRANSFORMERS_ALLOW_REMOTE_MODELS`
- `KB_REDACTION_ENABLED`
- `KB_REDACTION_BUILT_IN`
- `KB_ACCESS_LOG`
- `KB_MCP_MAX_TOP_K`
- `KB_TOP_K`
- `KB_CHUNK_SIZE`
- `KB_CHUNK_OVERLAP`
- `KB_INCLUDE_EXTENSIONS`
