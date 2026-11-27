import { Routes } from '@angular/router';

/**
 * Pages are lazy-loaded so the first visit only downloads the page being viewed.
 * `data.description` feeds the per-page meta description / Open Graph tags (see SeoService).
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Reva Associates | Accounting, Tax Filing & Loans in Borivali East, Mumbai',
    data: {
      description:
        'Reva Associates, Borivali East, Mumbai: accounting, ITR & GST filing, TDS, loan advisory across 30+ banks & NBFCs, insurance and investment planning for individuals and SMEs.',
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Reva Associates',
    data: {
      description:
        'Founded and run by Pooja Patel, Reva Associates makes accounting, taxation and personal finance simple for 50+ clients across Mumbai. Our promise: Compliance, Clarity, Growth.',
    },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services: Accounting, Tax, Loans, Insurance & Investments | Reva Associates',
    data: {
      description:
        'Bookkeeping, ITR, GST & TDS returns, tax notice handling, home/business/MSME loans, life & health insurance, mutual funds, SIP and portfolio advisory in Mumbai.',
    },
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./pages/testimonials/testimonials.component').then((m) => m.TestimonialsComponent),
    title: 'Client Feedback | Reva Associates',
    data: {
      description:
        'What salaried professionals, shop owners and MSME founders across Mumbai say about working with Reva Associates.',
    },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us | Reva Associates, Borivali East',
    data: {
      description:
        'Book a free consultation with Reva Associates. Call or WhatsApp 8879 146 502, or visit us at Patrakar Sadan, Rajendra Nagar, Borivali East, Mumbai 400066. Mon-Sat, 10 AM - 7 PM.',
    },
  },
  // Prerendered once as /404.html (served by Vercel for unknown URLs); `**` covers
  // in-app navigation to unknown paths.
  ...['404', '**'].map((path) => ({
    path,
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found | Reva Associates',
    data: { description: 'The page you were looking for could not be found.', robots: 'noindex' },
  })),
];
