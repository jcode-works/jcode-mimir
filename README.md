# JCode Mimir

Local-first memory and retrieval for private project knowledge.

JCode Mimir provides a TypeScript CLI and library that can be installed in any Node.js
repository. It indexes files from the target repository, stores vectors locally with LanceDB,
and uses Ollama for local embeddings and answers.

Created by Jean-Baptiste Thery as part of the JCode Labs toolchain.

## Status

Early public package. Licensed under the MIT License.

## Requirements

- Node.js 20+
- pnpm, npm, yarn or bun
- Ollama running locally
- Embedding model installed once:

```bash
ollama pull nomic-embed-text
```

Optional answer model:

```bash
ollama pull gemma4
```

## Install From npm

The package is public. Users do not need a JCode account or npm token to install it.

With pnpm:

```bash
pnpm add -D @jcode.labs/mimir
```

With npm:

```bash
npm install --save-dev @jcode.labs/mimir
```

Maintainer tokens are only needed to publish new versions.

## Install From Git

```bash
pnpm add -D git+ssh://git@github.com/jcode-works/jcode-mimir.git
```

For local development:

```bash
pnpm add -D file:../jcode-mimir
```

Before creating an npm tarball later, run:

```bash
pnpm build
pnpm pack
```

## Use In Any Repository

Initialize the local project config:

```bash
pnpm exec kb init
```

Add private documents under `private/`, then run:

```bash
pnpm exec kb ingest
pnpm exec kb search "vendor invoice status"
pnpm exec kb ask "What do the documents prove?"
pnpm exec kb audit
pnpm exec kb status
```

With npm, use `npx` after installing the package:

```bash
npx kb init
npx kb ingest
npx kb search "vendor invoice status"
npx kb ask "What do the documents prove?"
npx kb audit
npx kb status
```

## Data Boundary

The package code lives in `node_modules` or in this repository. Project data stays in the
repository where you run the CLI:

```plain text
your-project/
  private/          # raw documents to ingest
  .kb/config.json   # local config
  .kb/sources.txt   # optional extra source paths
  .kb/storage/      # generated LanceDB index
```

The package never ships project documents. `kb init` adds gitignore entries for `.kb/storage/`
and `private/**`.

## Supported Files

- Markdown: `.md`, `.mdx`
- Text: `.txt`, `.text`
- JSON: `.json`
- YAML: `.yaml`, `.yml`
- CSV/TSV: `.csv`, `.tsv`
- HTML: `.html`, `.htm`
- PDF: `.pdf`

## Config

`.kb/config.json`:

```json
{
  "rawDir": "private",
  "storageDir": ".kb/storage",
  "sourcesFile": ".kb/sources.txt",
  "tableName": "chunks",
  "ollamaHost": "http://localhost:11434",
  "embedModel": "nomic-embed-text",
  "llmModel": "gemma4:latest",
  "topK": 5,
  "chunkSize": 1200,
  "chunkOverlap": 150
}
```

Environment overrides:

- `KB_RAW_DIR`
- `KB_STORAGE_DIR`
- `KB_SOURCES_FILE`
- `KB_OLLAMA_HOST`
- `KB_EMBED_MODEL`
- `KB_LLM_MODEL`
- `KB_TOP_K`
- `KB_CHUNK_SIZE`
- `KB_CHUNK_OVERLAP`

## Library API

```ts
import { ingest, search, ask } from "@jcode.labs/mimir"

await ingest({ rebuild: true })
const results = await search("vendor invoice status")
const answer = await ask("What documents support the project timeline?")
```

## Privacy

- Embeddings and answers use local Ollama by default.
- The vector index is stored locally.
- Raw private documents should stay in the target repository's ignored `private/` folder.
- Do not put secrets or scans inside this package repository.

## License

MIT © Jean-Baptiste Thery.
