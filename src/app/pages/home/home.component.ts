import { BUSINESS } from '../../core/business-info';
import { IconComponent } from '../../shared/icon/icon.component';
import { Component } from '@angular/core';
import { IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, IconComponent, NgOptimizedImage],
  providers: [
    { provide: IMAGE_CONFIG, useValue: { breakpoints: [384, 640, 828, 1080, 1200] } },
    {
      // Unsplash's CDN resizes/crops on the fly and serves WebP/AVIF via auto=format,
      // so NgOptimizedImage can request just the width each device needs.
      provide: IMAGE_LOADER,
      useValue: ({ src, width }: ImageLoaderConfig) => {
        const w = width ?? 800;
        return `https://images.unsplash.com/${src}?auto=format&fit=crop&q=75&w=${w}&h=${Math.round(w * 0.925)}`;
      },
    },
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected get biz() {
    return BUSINESS;
  }
  featuredServices = [
    {
      title: 'Accounting Services',
      icon: 'book-bookmark',
      description: 'Complete bookkeeping and financial reporting as per Indian GAAP.',
      bullets: [
        'Monthly ledger maintenance',
        'Bank reconciliation',
        'Profit & Loss & Balance Sheet',
        'MIS reports for business decisions',
      ],
    },
    {
      title: 'Tax Filing Services - Our Core',
      icon: 'file-invoice-dollar',
      description: 'Full-suite ITR, GST, and TDS compliance with end-to-end notice handling.',
      bullets: [
        'ITR for Salaried, Business, Professionals',
        'GST Registration, GSTR-1 & 3B, GSTR-9',
        'TDS/TCS returns (24Q, 26Q, 27Q)',
        'Tax Planning: Old vs New regime analysis',
      ],
    },
    {
      title: 'Loan Services',
      icon: 'landmark',
      description:
        'We help you get the best loan with minimal paperwork across 30+ banks and NBFCs.',
      bullets: [
        'Home Loan, Business & MSME Loan',
        'Mudra Loan & Personal Loan',
        'Loan Against Property (LAP)',
        'Overdraft & CC Facility',
      ],
    },
    {
      title: 'Insurance Services',
      icon: 'shield-halved',
      description:
        'IRDA-compliant advisory to protect what matters most with full claim assistance.',
      bullets: [
        'Life & Term Insurance',
        'Health Insurance',
        'Motor Insurance',
        'Business Insurance & Claim assistance',
      ],
    },
    {
      title: 'Investment Services',
      icon: 'chart-pie',
      description: 'Goal-based investment planning to grow long-term wealth securely.',
      bullets: [
        'Mutual Funds & SIP',
        'Fixed Deposits & PPF',
        'NPS & ELSS for tax saving',
        'Retirement & Child education planning',
      ],
    },
    {
      title: 'Portfolio Management',
      icon: 'arrow-trend-up',
      description:
        'For HNI clients seeking structured asset allocation and post-tax return maximization.',
      bullets: [
        'Equity portfolio tracking',
        'Asset allocation & risk profiling',
        'Quarterly rebalancing',
        'Post-tax return optimization',
      ],
    },
  ];
}
