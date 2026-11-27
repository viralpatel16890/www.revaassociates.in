# Reva Associates (www.revaassociates.in)
### Your Trusted Financial Partner in Mumbai

**Tagline:** Accounting | Tax Filing | Loans | Insurance | Investments | Portfolio Management

---

## 1. HOME PAGE

### Hero Section
**Reva Associates - Your Trusted Financial Partner in Mumbai**

Simplifying Accounting, Taxation, Loans & Investments for Individuals and Businesses across India.

**[Book Free Consultation] [Call Now]**

#### Intro Paragraph
At Reva Associates, we help individuals, startups, and SMEs stay compliant, save taxes, and grow wealth. Based in Borivali East, Mumbai, we combine deep knowledge of Indian taxation laws with practical financial advice. From GST and Income Tax filing to loan advisory and investment planning — we handle the numbers, so you can focus on growth.

#### Why Choose Us
- **Local Expertise with 50+ Happy Clients:** In-depth knowledge of Indian accounting standards, Income Tax Act, and GST laws, trusted by 50+ clients across Mumbai.
- **One-Stop Solution:** From bookkeeping to portfolio management — all financial services under one roof.
- **Transparent & Timely:** No hidden charges. We ensure 100% compliance and on-time filings.
- **Personalized for You:** Custom plans for salaried individuals, traders, professionals, and SMEs.

---

## 2. ABOUT US

Reva Associates was founded and is operated by **Pooja Patel** with a mission to make finance simple for every Indian. Located in Rajendra Nagar, Borivali East, we proudly serve 50+ happy clients across Mumbai.

We believe good accounting is not just about compliance — it's about clarity for better decisions. Whether you are a small shop owner filing your first GST return or an investor building a long-term portfolio, we speak your language.

**Our Promise:** Compliance, Clarity, Growth.

---

## 3. OUR SERVICES

### A) Accounting Services
Complete bookkeeping and financial reporting as per Indian GAAP. Monthly ledger maintenance, Bank reconciliation, Profit & Loss, Balance Sheet, MIS reports for business decisions.

### B) Tax Filing Services - Our Core
- **Income Tax Return (ITR):** For Salaried, Business, Professionals (ITR-1 to ITR-7), Belated & Revised Returns
- **GST:** Registration, Monthly/Quarterly GSTR-1, GSTR-3B filing, Annual Return GSTR-9, LUT, E-way Bill, GST Notice Handling
- **TDS/TCS:** Calculation, Return filing (24Q, 26Q, 27Q), Form 16/16A, Lower deduction certificate
- **Tax Planning:** Old vs New regime analysis, 80C, 80D, Capital Gains, Advance Tax planning

### C) Loan Services
We help you get the best loan with minimal paperwork: Home Loan, Business Loan, MSME Loan, Mudra Loan, Personal Loan, Loan Against Property, Overdraft & CC Facility. We compare across 30+ banks and NBFCs.

### D) Insurance Services
Life, Health, Term, Motor & Business Insurance. IRDA-compliant advisory to protect what matters. Claim assistance included.

### E) Investment Services
Goal-based investment planning: Mutual Funds, SIP, Fixed Deposits, PPF, NPS, ELSS for tax saving, Retirement & Child education planning.

### F) Portfolio Management
For HNI clients: Equity portfolio tracking, Asset allocation, Risk profiling, Quarterly rebalancing to maximize post-tax returns.

---

## 4. WHO WE SERVE
- Salaried Professionals & NRI Clients
- Traders, Shopkeepers & Retailers in Mumbai
- Startups, MSMEs, Partnership Firms, Pvt Ltd Companies
- Doctors, CAs, Lawyers & Freelancers

---

## 5. COMPLIANCE CALENDAR
| Deadline | Compliance |
|---|---|
| July 31 | ITR Filing for Individuals |
| Oct 31 | Tax Audit Cases |
| Monthly | GSTR-1 & 3B |
| Quarterly | TDS Returns |

---

## 6. FAQ - Indian Context

**Q: What is the difference between old and new tax regime?**
We explain and calculate which regime saves you more tax.

**Q: Do I need GST registration if turnover is below 40 lakhs?**
Depends on service vs goods and interstate supply. We advise for free.

**Q: Can you handle GST notices?**
Yes, complete representation and reply drafting.

---

## 7. CONTACT US

**Reva Associates**
15/Patrakar Sadan, Near Rationing Office, Rajendra Nagar, Borivali East, Mumbai - 400066

**Pooja Patel:** 8879 146 502
**Email:** revaassociates22@gmail.com
**Timing:** Mon-Sat, 10 AM - 7 PM

**[WhatsApp Us] [Get Directions on Google Maps]**

---

### Footer
© 2026 Reva Associates, Mumbai. Operated by Pooja Patel. All Rights Reserved. | Disclaimer: We are financial consultants, not a bank or NBFC. Investments are subject to market risks.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Angular (v21)](https://angular.dev/) standalone components, zoneless change detection, lazy-loaded routes
- **Rendering:** every page is **prerendered to static HTML** at build time (`outputMode: "static"`) and hydrated in the browser, so search engines and link previews see full content
- **Language:** TypeScript 5.9
- **Styling:** SCSS, responsive Flex/Grid layouts, inline SVG icons (Font Awesome Free 6, tree-shaken; see `src/app/shared/icon`)
- **SEO:** per-page title/description/Open Graph/canonical tags (`src/app/core/seo.service.ts`), `LocalBusiness` JSON-LD, `robots.txt`, `sitemap.xml`
- **Analytics:** Google Analytics 4 (`src/app/core/analytics.service.ts`), see below
- **Testing:** [Vitest](https://vitest.dev/) with V8 coverage provider & JSDOM environment
- **Hosting / Deploy:** [Vercel](https://vercel.com/) static hosting; `vercel.json` sets security + cache headers, unknown URLs get the prerendered `404.html`

### Where to change things

| What | File |
|---|---|
| Phone, email, address, hours, maps link | `src/app/core/business-info.ts` |
| Page titles & meta descriptions | `src/app/app.routes.ts` |
| Google Analytics measurement ID | `src/app/core/analytics.config.ts` |
| Sitemap (add new pages here too) | `public/sitemap.xml` |

### Google Analytics 4

Set `GA_MEASUREMENT_ID` in `src/app/core/analytics.config.ts` (GA → Admin → Data streams → Measurement ID, e.g. `G-XXXXXXXXXX`). When empty, nothing is loaded. It is also never loaded in `ng serve` (dev mode) or during prerendering. Tracked events:

| Event | When |
|---|---|
| `page_view` | every route change |
| `click_to_call`, `click_whatsapp`, `click_email`, `click_directions` | clicks on phone / WhatsApp / email / Google Maps links |
| `generate_lead` | contact form submitted (only `service` and `client_type` are sent, never name, phone or email) |

Mark `generate_lead`, `click_whatsapp` and `click_to_call` as **key events** in GA to see conversions.

---

## 🧪 Testing & Code Coverage

```bash
npm run test:coverage
```

47 tests across components, routes, SEO and analytics; coverage is ~99.8% of statements and 100% of functions.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
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
Navigate to `http://localhost:4200/`.

### Run Unit Tests
```bash
npm test
```

### Run Unit Tests with Coverage
```bash
npm run test:coverage
```

### Production Build
```bash
npm run build
```
Production build artifacts (prerendered HTML per page plus `404.html`) are stored in `dist/reva-associates/browser`. To preview the production build locally: `npx serve dist/reva-associates/browser`.
