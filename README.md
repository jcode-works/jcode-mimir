# Mimir Monorepo

Open-source packages for Mimir, a sovereign local RAG toolkit for confidential datasets and AI
agents.

## Packages

- [`@jcode.labs/mimir`](./packages/mimir): core CLI, library, MCP server, bundled agent skills, and
  synthetic examples.
- [`@jcode.labs/mimir-tts`](./packages/mimir-tts): plug-and-play Edge-quality MP3 and offline
  Transformers.js WAV renderer used by `kb audio`.

## Documentation

- [Getting started](./docs/getting-started.md): install Mimir and get the first useful search.
- [CLI reference](./docs/cli-reference.md): every `kb` and `mimir-tts` command with when to use it.
- [Troubleshooting](./docs/troubleshooting.md): common setup, indexing, audio, and release issues.
- [Security hardening](./SECURITY-HARDENING.md): threat model, offline operation, and release
  verification.
- [UX/DX audit](./docs/ux-dx-audit.md): current findings, fixes, and remaining product risks.

## Development

```bash
pnpm install
pnpm validate
```

Useful filtered commands:

```bash
pnpm --filter @jcode.labs/mimir test
pnpm --filter @jcode.labs/mimir-tts test
pnpm --filter @jcode.labs/mimir build
pnpm --filter @jcode.labs/mimir-tts build
```

The root package is private and only orchestrates workspace tasks. npm publishing is handled by the
protected `Publish npm` GitHub Actions workflow, which publishes `@jcode.labs/mimir-tts` before
`@jcode.labs/mimir`.
