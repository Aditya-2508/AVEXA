# AVEXA — React + TypeScript + Tailwind

Premium responsive corporate website based on the supplied AVEXA brief.

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Brand asset

Copy the supplied **unmodified** AVEXA logo to:

`public/avexa-logo.svg`

The logo component intentionally treats that asset as the brand source of truth.

## Production wiring still required

The contact form is structurally functional in the UI and includes validation, but its submit handler must be connected to your chosen email/API service before deployment.

Replace `[ADD EMAIL]`, `[ADD PHONE]`, `[ADD LINKEDIN]`, and `[ADD GITHUB]` with real company details when available.

No client names, testimonials, revenue figures, awards, certifications, or achievements have been invented.
