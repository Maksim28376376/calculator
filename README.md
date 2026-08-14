# UFC Map

An interactive world map showing how many UFC fighters come from each country,
with a short note on every nation's scene. Built with
[Next.js](https://nextjs.org) and [d3-geo](https://github.com/d3/d3-geo).

**Live:** https://ufc-map.vercel.app

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## How it works

- The map is an SVG choropleth: each country is shaded by how many UFC fighters
  come from it, using a single-hue red scale (darker red = fewer, brighter =
  more). Countries with no fighters on record stay gray.
- Hover a country for a quick count; click it (or a row in the ranked list) to
  read a short description.
- Country shapes come from [world-atlas](https://github.com/topojson/world-atlas)
  and are matched to the data by ISO 3166-1 numeric code, so the fill is never
  mismatched to the wrong shape.

## Where things live

| Path                     | What it is                                        |
| ------------------------ | ------------------------------------------------- |
| `app/data.ts`            | Fighter counts, descriptions, and the color scale |
| `app/WorldMap.tsx`       | The map, tooltip, detail panel, and ranked list   |
| `app/WorldMap.module.css`| Styles scoped to the map                          |
| `app/page.tsx`           | Page header and layout                            |
| `app/globals.css`        | Theme tokens and page-level styles                |

## A note on the data

The counts are approximate, representative figures compiled from general
knowledge of the roster's makeup — they show relative scale, not an exact
official headcount. Fighters are grouped by nation of origin, though many
compete out of gyms elsewhere.

## Deploying

Pushes to `main` deploy automatically to Vercel.
