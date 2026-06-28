# Troubleshooting

Use `kb doctor` first. It is the shortest path to the next useful action:

```bash
pnpm exec kb doctor
```

## `kb doctor` Says The Project Is Not Initialized

Run:

```bash
pnpm exec kb init
pnpm exec kb doctor
```

Commit only safe scaffolding if this is a real repository. Do not commit private documents,
`.kb/storage`, `.mimir/`, env files, or credentials.

## No Files Are Indexed

Check that supported files exist under `private/`:

```bash
find private -maxdepth 2 -type f
pnpm exec kb ingest
pnpm exec kb doctor
```

If documents live elsewhere, add one path per line to `.kb/sources.txt`. Relative paths resolve from
the project root.

## Search Returns Weak Results

The default `local-hash` provider is dependency-light and offline, but it is lexical/hash retrieval,
not semantic retrieval.

For better semantic retrieval, configure Transformers.js embeddings and preload the model when
working offline:

```json
{
  "embeddingProvider": "transformers",
  "embeddingModel": "mixedbread-ai/mxbai-embed-xsmall-v1",
  "embeddingModelPath": ".mimir/models",
  "transformersAllowRemoteModels": false
}
```

Switching providers requires a full re-ingest:

```bash
pnpm exec kb ingest
pnpm exec kb doctor
```

## `kb audit` Reports Missing Or Stale Files

Run:

```bash
pnpm exec kb ingest
pnpm exec kb audit
```

Mimir rebuilds the index on each ingest. The `--rebuild` flag is accepted for compatibility, but
ingest already rebuilds.

## `security-audit --strict` Fails

Read the warning lines. Common causes:

- `.kb/`, `.mimir/`, or `private/**` are not ignored by Git.
- Redaction was disabled.
- Transformers.js remote model loading was enabled.

Run `kb init` again if Git ignore entries are missing:

```bash
pnpm exec kb init
pnpm exec kb security-audit --strict
```

## MP3 Audio Fails Without `--engine edge`

This is intentional. MP3 output uses online Edge TTS and requires explicit consent:

```bash
pnpm exec kb audio /tmp/summary.txt \
  --engine edge \
  --out .mimir/audio/summary.mp3
```

For confidential or offline work, use WAV:

```bash
pnpm exec kb audio /tmp/summary.txt \
  --engine transformers \
  --offline \
  --out .mimir/audio/summary.wav
```

## Edge TTS Is Not Installed

Install the external CLI:

```bash
pipx install edge-tts
pnpm exec kb audio --doctor
```

Only use Edge TTS when sending narration text to the online service is acceptable.

## `mimir-tts --offline` Cannot Render

Offline rendering requires model files to already exist under `.mimir/models/tts` or the path passed
with `--model-path`.

For a first online setup on non-sensitive text:

```bash
pnpm exec mimir-tts render /tmp/test.txt --out .mimir/audio/test.wav
```

Then reuse the cached files with:

```bash
pnpm exec mimir-tts render /tmp/test.txt --offline --out .mimir/audio/test.wav
```

## Development Build Fails In CI

`packages/mimir/dist/` and `packages/mimir-tts/dist/` are committed. After changing TypeScript
sources, run:

```bash
pnpm build
pnpm validate
```

CI checks that generated `dist/` files match the source.
