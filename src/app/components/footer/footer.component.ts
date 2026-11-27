import { BUSINESS } from '../../core/business-info';
import { IconComponent } from '../../shared/icon/icon.component';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected get biz() {
    return BUSINESS;
  }
  currentYear = new Date().getFullYear();
}
