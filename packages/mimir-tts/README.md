# Mimir TTS

Plug-and-play text-to-speech for Mimir audio summaries.

`@jcode.labs/mimir-tts` has two explicit paths:

- Transformers.js WAV for confidential or air-gapped use. This is the default path and does not
  require Python, ffmpeg, Piper, XTTS, or a local server.
- Edge MP3 for the same quality path as the global Voice Forge skill. It uses the external
  `edge-tts` CLI, `fr-FR-DeniseNeural`, and `+0%` rate, and must be requested explicitly.

The Edge path sends the narration text to the online Edge TTS service. Use the Transformers.js path
for private content.

## Install

```bash
pnpm add -D @jcode.labs/mimir-tts
```

Install Edge TTS only when you want the highest-quality online MP3 renderer:

```bash
pipx install edge-tts
```

## Render

High-quality MP3:

```bash
pnpm exec mimir-tts render /tmp/MIMIR-SUMMARY-tax.txt \
  --engine edge \
  --out .mimir/audio/tax-summary.mp3
```

Offline/confidential WAV:

```bash
pnpm exec mimir-tts render summary.txt \
  --offline \
  --model-path .mimir/models/tts \
  --out .mimir/audio/summary.wav
```

## Doctor

```bash
pnpm exec mimir-tts doctor --json
```

The default engine is `transformers`. The default Transformers.js model is `Xenova/mms-tts-fra`.
Override it with `--model` or `MIMIR_TTS_MODEL`.
