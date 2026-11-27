import { BUSINESS } from '../../core/business-info';
import { IconComponent } from '../../shared/icon/icon.component';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  icon: string;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  protected get biz() {
    return BUSINESS;
  }
  selectedCategory = signal<string>('ALL');

  categories = [
    'Accounting',
    'Tax Filing',
    'Loans',
    'Insurance',
    'Investments',
    'Portfolio Management',
  ];

  allServices: ServiceDetail[] = [
    {
      id: 'accounting-services',
      category: 'Accounting',
      title: 'Accounting Services',
      icon: 'book-bookmark',
      shortDesc: 'Complete bookkeeping and financial reporting as per Indian GAAP.',
      fullDesc:
        'Complete bookkeeping and financial reporting as per Indian GAAP. Monthly ledger maintenance, Bank reconciliation, Profit & Loss, Balance Sheet, MIS reports for business decisions.',
      deliverables: [
        'Complete bookkeeping as per Indian GAAP',
        'Monthly ledger maintenance & journal entries',
        'Bank reconciliation statements (BRS)',
        'Profit & Loss statement and Balance Sheet preparation',
        'Management Information System (MIS) reports for informed business decisions',
      ],
    },
    {
      id: 'tax-filing-services',
      category: 'Tax Filing',
      badge: 'Our Core',
      title: 'Tax Filing Services - Our Core',
      icon: 'file-invoice-dollar',
      shortDesc: 'Comprehensive ITR, GST, TDS compliance and strategic tax planning.',
      fullDesc:
        'Full-spectrum Indian taxation advisory and filing services designed to keep individuals, businesses, and professionals 100% compliant and tax-efficient.',
      deliverables: [
        'Income Tax Return (ITR): For Salaried, Business, Professionals (ITR-1 to ITR-7), Belated & Revised Returns',
        'GST: Registration, Monthly/Quarterly GSTR-1, GSTR-3B filing, Annual Return GSTR-9, LUT, E-way Bill, GST Notice Handling',
        'TDS/TCS: Calculation, Return filing (24Q, 26Q, 27Q), Form 16/16A, Lower deduction certificate',
        'Tax Planning: Old vs New regime analysis, 80C, 80D, Capital Gains, Advance Tax planning',
      ],
    },
    {
      id: 'loan-services',
      category: 'Loans',
      title: 'Loan Services',
      icon: 'landmark',
      shortDesc: 'We help you get the best loan with minimal paperwork across 30+ banks and NBFCs.',
      fullDesc:
        'We help you get the best loan with minimal paperwork: Home Loan, Business Loan, MSME Loan, Mudra Loan, Personal Loan, Loan Against Property, Overdraft & CC Facility. We compare across 30+ banks and NBFCs.',
      deliverables: [
        'Home Loan & Loan Against Property (LAP)',
        'Business Loan & MSME Loan facilitation',
        'Mudra Loan & Personal Loan advisory',
        'Overdraft (OD) & Cash Credit (CC) facilities',
        'Interest rate and tenure comparison across 30+ leading banks & NBFCs',
      ],
    },
    {
      id: 'insurance-services',
      category: 'Insurance',
      title: 'Insurance Services',
      icon: 'shield-halved',
      shortDesc: 'Life, Health, Term, Motor & Business Insurance with claim assistance.',
      fullDesc:
        'Life, Health, Term, Motor & Business Insurance. IRDA-compliant advisory to protect what matters. Claim assistance included.',
      deliverables: [
        'Life & Term Insurance for complete family financial protection',
        'Health & Medical Insurance (Individual & Family Floater)',
        'Motor Insurance (Two-wheeler, Car & Commercial Vehicle)',
        'Business & Commercial Asset Insurance',
        'IRDA-compliant advisory with dedicated claim assistance support',
      ],
    },
    {
      id: 'investment-services',
      category: 'Investments',
      title: 'Investment Services',
      icon: 'chart-pie',
      shortDesc: 'Goal-based investment planning: Mutual Funds, SIP, FD, PPF, NPS & ELSS.',
      fullDesc:
        'Goal-based investment planning: Mutual Funds, SIP, Fixed Deposits, PPF, NPS, ELSS for tax saving, Retirement & Child education planning.',
      deliverables: [
        'Mutual Funds & Systematic Investment Plans (SIP)',
        'Tax saving ELSS schemes under Section 80C',
        'Fixed Deposits (FD), Public Provident Fund (PPF) & National Pension Scheme (NPS)',
        'Retirement planning & wealth accumulation strategies',
        'Child higher education & milestone planning',
      ],
    },
    {
      id: 'portfolio-management',
      category: 'Portfolio Management',
      title: 'Portfolio Management',
      icon: 'arrow-trend-up',
      shortDesc: 'For HNI clients: Equity portfolio tracking, Asset allocation & rebalancing.',
      fullDesc:
        'For HNI clients: Equity portfolio tracking, Asset allocation, Risk profiling, Quarterly rebalancing to maximize post-tax returns.',
      deliverables: [
        'Equity portfolio tracking & performance monitoring',
        'Comprehensive asset allocation aligned with financial goals',
        'In-depth risk profiling and volatility hedging',
        'Quarterly portfolio rebalancing to maximize post-tax returns',
      ],
    },
  ];

  filteredServices() {
    const cat = this.selectedCategory();
    if (cat === 'ALL') {
      return this.allServices;
    }
    return this.allServices.filter((s) => s.category === cat);
  }

  setCategory(category: string) {
    this.selectedCategory.set(category);
  }
}
