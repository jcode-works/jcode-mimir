# Mimir Landing

Private Astro static landing package for the Mimir product surface.

The visible product title stays `Mimir`. The technical core remains `Mimir Core` in developer-facing
metadata only.

```bash
pnpm --filter @jcode.labs/mimir-landing dev
pnpm --filter @jcode.labs/mimir-landing build
```

The waitlist form posts to `PUBLIC_MIMIR_WAITLIST_ENDPOINT` or `/api/waitlist` by default. The
example Cloudflare Worker handler lives in `worker/waitlist.ts` and expects a `WAITLIST_KV` binding
when real capture is enabled.

No PostHog or hosted document telemetry belongs here. If analytics are needed later, prefer
Cloudflare Web Analytics.
