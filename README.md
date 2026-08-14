# Calculator

A small, keyboard-friendly calculator built with [Next.js](https://nextjs.org).

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying

Pushes to `main` deploy automatically to Vercel. Pull requests get their own
preview URL.

## Where things live

| Path                       | What it is                                  |
| -------------------------- | ------------------------------------------- |
| `app/page.tsx`             | The home page                               |
| `app/Calculator.tsx`       | Calculator UI and arithmetic logic          |
| `app/Calculator.module.css`| Styles scoped to the calculator             |
| `app/globals.css`          | Colors and page-level styles (light + dark) |

## Keyboard shortcuts

| Key                | Action           |
| ------------------ | ---------------- |
| `0`–`9`            | Enter a digit    |
| `.`                | Decimal point    |
| `+` `-` `*` `/`    | Operators        |
| `Enter` or `=`     | Equals           |
| `Backspace`        | Delete last digit|
| `Esc`              | Clear everything |
| `%`                | Percent          |
