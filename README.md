# Reva & Associates (www.revaassociates.in)

Modern, responsive web application for **Reva & Associates** — Advocates & Corporate Advisors. Built with **Angular (v21)** featuring standalone components, SCSS styling, and full SPA client routing.

---

## 🏛️ Website Sections

- **Home (`/`)**: Hero banner, corporate statistics, firm legacy preview, key practice highlights, and testimonial teasers.
- **About Us (`/about`)**: Firm mission, vision, core values, legacy milestones, leadership profiles (senior partners), and differentiators.
- **Services (`/services`)**: Interactive practice area directory filtered by category (*Corporate & M&A, Tax & Compliance, Litigation & Arbitration, Intellectual Property, Real Estate*) with deliverables.
- **Testimonials (`/testimonials`)**: Verified feedback cards categorized by industry, rating metrics breakdown, and review callouts.
- **Contact (`/contact`)**: Office coordinates, operating hours, hotline details, interactive consultation booking form, and NDA disclaimers.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended, tested on v24)
- npm (v10+)

### Installation
```bash
git clone https://github.com/viralpatel16890/www.revaassociates.in.git
cd www.revaassociates.in
npm install
```

### Development Server
```bash
npm start
# or
npx ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Production Build
```bash
npm run build
```
Build artifacts will be stored in the `dist/reva-associates/browser` directory.

---

## 🌐 Deploying to Vercel

This repository includes a [`vercel.json`](./vercel.json) rewrite file to handle Angular SPA client-side routing.

### Quick Deploy via Vercel Dashboard:
1. Go to [Vercel](https://vercel.com/) and import this GitHub repository (`www.revaassociates.in`).
2. Vercel will automatically detect **Angular**:
   - **Framework Preset**: `Angular`
   - **Build Command**: `npm run build` or `ng build`
   - **Output Directory**: `dist/reva-associates/browser`
3. Click **Deploy**.

### Deploy via Vercel CLI:
```bash
npx vercel
# For production deploy:
npx vercel --prod
```

---

## 🛠️ Tech Stack

- **Framework**: Angular 21 (Standalone Components)
- **Styling**: SCSS (CSS variables, responsive flexbox & CSS grid)
- **Icons**: Font Awesome 6
- **Typography**: Playfair Display (Serif headings) & Plus Jakarta Sans (Modern sans-serif body)
- **Deployment Target**: Vercel
