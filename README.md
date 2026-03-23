# Nancy LEM - Landing Page Variations

Each subfolder contains a standalone landing page variation for A/B testing. All variations share the same design system, tracking pixels, and conversion flow — only the persuasion psychology changes.

## Variations

| Folder | Variation | Angle | Psychological Trigger |
|--------|-----------|-------|----------------------|
| `nancy-powerful-variations1-andrei/` | V1: "The Broken Promise" | Pain-First | Loss aversion, identity validation |
| `nancy-powerful-variations2-andrei/` | V2: "The Clinical Case" | Authority/Science | Authority bias, rational validation |
| `nancy-powerful-variations3-andrei/` | V3: "The Accidental Discovery" | Story-Driven | Narrative transportation, curiosity |
| `nancy-powerful-variations4-andrei/` | V4: "Become Her" | Empowerment | Identity shift, future-self visualization |
| `nancy-powerful-variations5-andrei/` | V5: "The Big Lie" | Myth-Busting | Cognitive disruption, revelation |

## Routes (when running any variation)

Each subfolder defaults `/` to its own variation. All variations are also accessible via:

- `/` — Default variation for that subfolder
- `/control` — Original benefit-first control page
- `/v1` through `/v5` — Direct access to any variation

## Setup (per variation)

```bash
cd nancy-powerful-variations1-andrei
npm install
npx vite --host
```

## Tracking

All variations fire the same tracking events on CTA clicks:

- **Google Ads:** AW-11033179838 (conversion event on click)
- **Meta Pixel:** 832767357702650 (InitiateCheckout on click)
- **Page load:** Google Ads page view + Meta Pixel PageView
