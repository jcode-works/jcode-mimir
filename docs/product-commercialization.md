# Product Commercialization

## Pricing Hypothesis

Initial paid product: **Mimir Desktop** for developers, consultants, and small teams handling
confidential dossiers.

| Plan | Price to test | Notes |
| --- | --- | --- |
| Solo perpetual | EUR 390 one-time | Includes updates for the current major line plus 2 years of updates. |
| Solo subscription | EUR 29/month | Optional alternative for users who prefer OpEx. |
| Launch offer | 40% off | Early-adopter validation only; do not bake into permanent pricing. |

The go/no-go threshold remains at least 5 paid pre-sales or purchases before heavy native packaging,
signing, and licensing work.

## Payment Provider Decision

Default provider: **Lemon Squeezy**.

Rationale:

- It is already used in the broader JCode/WorkoutGen operating context.
- It supports hosted checkout URLs, so the static landing can stay simple.
- It can generate license keys for software variants.
- It acts as merchant of record for taxes and payment operations.

Keep Paddle as the fallback if Lemon Squeezy cannot support the final EU VAT, licensing, or payout
requirements. Avoid Stripe as the first choice unless JCode wants to own more tax/compliance work.

## License Model

Use a perpetual per-major license:

- A purchased major version keeps working indefinitely.
- Updates are included for a time-boxed window, initially 2 years.
- New major versions can require a paid upgrade.
- Subscriptions, if offered, map to license validity through the provider lifecycle.

The app should validate licenses locally where possible and degrade gracefully when offline. Online
activation/checks must be explicit, scoped, and limited to license metadata.

## Deferred Implementation

- Create Lemon Squeezy product and variants.
- Wire hosted checkout links into the landing.
- Define webhook handling for purchases, renewals, refunds, and license events.
- Add the app-side license activation UI.
- Add signed license validation in the app boundary.
