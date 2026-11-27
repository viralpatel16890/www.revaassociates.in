import { BUSINESS } from '../../core/business-info';
import { IconComponent } from '../../shared/icon/icon.component';
import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnalyticsService } from '../../core/analytics.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected get biz() {
    return BUSINESS;
  }
  private readonly analytics = inject(AnalyticsService);
  /** Constant, trusted Google Maps embed URL for the office location. */
  protected readonly mapEmbedUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    BUSINESS.mapsEmbedUrl,
  );

  formData = {
    fullName: '',
    phone: '',
    email: '',
    clientType: '',
    serviceInterest: '',
    message: '',
  };

  submitted = signal(false);

  onSubmit() {
    this.submitted.set(true);
    // Only non-personal fields are sent to analytics.
    this.analytics.trackEvent('generate_lead', {
      service: this.formData.serviceInterest,
      client_type: this.formData.clientType,
    });
  }

  resetForm() {
    this.formData = {
      fullName: '',
      phone: '',
      email: '',
      clientType: '',
      serviceInterest: '',
      message: '',
    };
    this.submitted.set(false);
  }
}
