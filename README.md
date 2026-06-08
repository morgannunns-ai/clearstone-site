# Clearstone Property — Public Website

One-page sales site for Clearstone Property, probate property specialists.
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

## Deploy to Vercel (Recommended)

### Option A — Import from GitHub (easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Clearstone Property website"
   gh repo create clearstone-site --public --source=. --push
   ```
   Or manually create the repo on github.com, then:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/clearstone-site.git
   git branch -M main
   git push -u origin main
   ```

2. **Import into Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click **Import Git Repository**
   - Select `clearstone-site`
   - Vercel auto-detects Vite — no config needed
   - Click **Deploy** — live in ~30 seconds

3. **Custom domain (optional):**
   - Vercel dashboard → project → Settings → Domains
   - Add `clearstoneproperty.co.uk` and follow the DNS instructions

## Color Palette

| Token      | Hex       | Usage                    |
|------------|-----------|--------------------------|
| `charcoal` | `#0C1C1B` | Page background          |
| `clay`     | `#3BBFB8` | Accent / CTA / headings  |
| `cream`    | `#EEF3F2` | Body text                |
| `moss`     | `#162E2C` | Card backgrounds         |

## Project Structure

```
src/
├── App.jsx                    ← Root layout
├── index.css                  ← Tailwind v4, @theme tokens, noise overlay
├── main.jsx                   ← Entry point
└── components/
    ├── Navbar.jsx             ← Floating glassmorphic nav
    ├── Hero.jsx               ← Full-viewport hero with GSAP text reveal
    ├── Features.jsx           ← 6 benefit cards (Why Clearstone)
    ├── Philosophy.jsx         ← Old way vs Clearstone way contrast
    ├── Protocol.jsx           ← 3-step How It Works
    ├── WhoWeWorkWith.jsx      ← Executors / Solicitors / Estate agents
    ├── Contact.jsx            ← Enquiry form → clearstoneproperty.co.uk/enquiry
    └── Footer.jsx             ← Links, contact, status indicator
```

## Form Endpoint

The contact form POSTs to `https://clearstoneproperty.co.uk/enquiry` (Clara's backend).
This works cross-origin from Vercel because Clara accepts JSON POST on that route.
