# Kedarnath Tour & Travels

Marketing site for **Kedarnath Tour & Travels**, Haridwar — Char Dham Yatra, Himalayan
holidays and India tours.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and Motion.

## Running it

```bash
npm run dev     # http://localhost:3000  (this repo's preview runs on :3100)
npm run build   # production build — all pages prerender as static
npm start       # serve the production build
npm run lint
```

## Where to change things

Almost all copy, pricing and contact details live in **one file**:

### `src/lib/site.ts`

| Export | What it controls |
| --- | --- |
| `site` | Business name, owner, both phone numbers, email, address, WhatsApp number, founding year |
| `img` | The photographs used across the site (currently Unsplash CDN URLs) |
| `navItems` | Header and footer navigation |
| `packages` | **The tour packages — title, category, days/nights, price, route, highlights, badge** |
| `categories` | The filter chips on `/packages` |
| `services` | The "Our Services" grid |
| `inclusions` | The five "What's included" cards |
| `stats` | The animated counters |
| `terms` | Terms & Conditions list |
| `testimonials` | Review cards |
| `faqs` | Accordion questions |

> **Prices and routes are placeholders.** Every `price`, `oldPrice` and `route` in
> `packages` is indicative and marked with a note in the file — replace them with the
> official rate card. Set `featured: true` on the three packages that should appear on the
> home page, and `badge` for the orange ribbon ("Most Booked", "Best Value", "Premium").

Adding a package is just a new object in the `packages` array — it automatically appears on
`/packages`, in the category filter counts, in the footer list and in the booking form's
dropdown.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero, inclusions, featured packages, why us, services, gallery, reviews, FAQ, booking form |
| `/packages` | All packages with category filtering |
| `/gallery` | Photo gallery with a keyboard-navigable lightbox |
| `/about` | Story timeline, founder note, services, reviews |
| `/contact` | Contact cards, booking form, Google Map, FAQ |

## Enquiry form

The booking form has **no backend**. On submit it composes a formatted message and opens
WhatsApp (`wa.me/<site.whatsapp>`) so the enquiry lands directly in the business's chat.
To switch to email or a CRM later, replace the submit handler in
`src/components/BookingForm.tsx`.

## Animation

- `src/components/AnimatedCar.tsx` — the SUV and tempo-traveller SVGs, with wheels that spin
  via Motion. Colour variants: `navy`, `saffron`, `white`, `red`.
- `src/components/RoadDivider.tsx` — the full-width mountain-and-road strip with traffic
  driving across it, used between sections (`tone="light" | "dark"`).
- `src/components/Reveal.tsx` — scroll-reveal wrapper plus `Stagger` / `StaggerItem`.
- Keyframes (`drive`, `kenburns`, `marquee`, `float`, `shimmer`, `bob`, `pulse-ring`, `dash`)
  are defined in `src/app/globals.css` and exposed as Tailwind `--animate-*` theme tokens.
- Everything is disabled under `prefers-reduced-motion`.

## Brand assets

- `public/images/logo.webp` — the supplied logo, used in the header, hero and footer.
- `src/app/icon.svg` — the car favicon (also copied to `public/car-icon.svg` for the
  apple-touch icon).
- Brand colours are the `navy-*` and `saffron-*` scales defined in `src/app/globals.css`.

## Images

Photographs are loaded from the Unsplash CDN, allow-listed in `next.config.ts` under
`images.remotePatterns`. To use the business's own photographs instead, drop them in
`public/images/` and point the `img` object in `src/lib/site.ts` at the local paths — no
other change is needed, and you can then remove the `remotePatterns` entry.
