import { BUSINESS } from '../../core/business-info';
import { IconComponent } from '../../shared/icon/icon.component';
import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected get biz() {
    return BUSINESS;
  }
  edges = [
    {
      icon: 'users',
      title: 'Local Expertise with 50+ Happy Clients',
      desc: 'In-depth knowledge of Indian accounting standards, Income Tax Act, and GST laws, trusted by 50+ clients across Mumbai.',
    },
    {
      icon: 'layer-group',
      title: 'One-Stop Solution',
      desc: 'From bookkeeping to portfolio management — all financial, tax, loan, and insurance services under one roof.',
    },
    {
      icon: 'clock-rotate-left',
      title: 'Transparent & Timely',
      desc: 'No hidden charges. We ensure 100% compliance and on-time filings so you avoid penalties and notices.',
    },
    {
      icon: 'user-check',
      title: 'Personalized for You',
      desc: 'Customized plans for salaried individuals, traders, professionals, and SMEs tailored to your financial goals.',
    },
  ];
}
