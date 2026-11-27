import { IconComponent } from '../../shared/icon/icon.component';
import { Component, signal } from '@angular/core';

import { RouterLink } from '@angular/router';

interface FeedbackItem {
  id: number;
  author: string;
  category: string;
  rating: number;
  highlight: string;
  content: string;
  location: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: FeedbackItem[] = [
    {
      id: 1,
      author: 'Salaried IT Professional',
      category: 'Salaried Professionals',
      rating: 5,
      highlight: 'Clear Old vs New Tax Regime Calculation',
      content:
        'Pooja Patel analyzed both tax regimes and identified deductions that saved me over ₹45,000 in income tax. Filing was completed accurately and quickly without any stress.',
      location: 'Borivali, Mumbai',
    },
    {
      id: 2,
      author: 'Retail Store Owner',
      category: 'Traders & Retailers',
      rating: 5,
      highlight: 'Zero GST Notice Worries',
      content:
        'Managing monthly GSTR-1 and GSTR-3B filings has been completely smooth with Reva Associates. When we received a clarification notice, they handled the drafting and resolved it seamlessly.',
      location: 'Kandivali, Mumbai',
    },
    {
      id: 3,
      author: 'MSME Business Founder',
      category: 'Startups & MSMEs',
      rating: 5,
      highlight: 'End-to-End Bookkeeping & Loan Support',
      content:
        'From monthly ledger reconciliation to preparing our Balance Sheet and securing an MSME business loan across 30+ lenders, Reva Associates has been a truly dependable one-stop solution.',
      location: 'Malad, Mumbai',
    },
  ];
}
