# Clearstone Property — Public Website

One-page site for Clearstone Property, a Shropshire-based direct property buyer.
Built with React 19 + Vite 8 + Tailwind CSS v4 + GSAP 3.

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS v4 (`@theme` tokens, no config file)
- GSAP 3 + ScrollTrigger
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

The repo is imported into Vercel; pushing to `main` deploys to
`clearstoneproperty.co.uk` automatically.

## Project Structure

```
src/
├── App.jsx                    ← Root layout
├── index.css                  ← Tailwind v4, @theme tokens
├── main.jsx                   ← Entry point
└── components/
    ├── Navbar.jsx             ← Fixed nav
    ├── Hero.jsx               ← Headline + what-to-expect card
    ├── TrustBar.jsx           ← Plain-fact strip
    ├── Problems.jsx           ← Situations we work with
    ├── Solutions.jsx          ← Four ways a sale can work
    ├── HowItWorks.jsx         ← 3-step process
    ├── ClaraSection.jsx       ← Point of contact
    ├── Testimonials.jsx       ← Worked examples (illustrative)
    ├── Contact.jsx            ← Enquiry form → clearstoneproperty.co.uk/enquiry
    └── Footer.jsx             ← Links + contact
```

## Form Endpoint

The contact form POSTs to `https://clearstoneproperty.co.uk/enquiry` (Clara's backend).
This works cross-origin from Vercel because Clara accepts JSON POST on that route.
