import { ApplicationInitStatus } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { appConfig } from './app.config';
import { AnalyticsService } from './core/analytics.service';
import { SeoService } from './core/seo.service';

describe('AppConfig', () => {
  it('should provide application config with routing', () => {
    expect(appConfig).toBeDefined();
    expect(appConfig.providers.length).toBeGreaterThan(0);
  });

  it('should start SEO and analytics when the app initialises', async () => {
    const seoInit = vi.spyOn(SeoService.prototype, 'init').mockImplementation(() => {});
    const gaInit = vi.spyOn(AnalyticsService.prototype, 'init').mockImplementation(() => {});
    TestBed.configureTestingModule({ providers: appConfig.providers });
    await TestBed.inject(ApplicationInitStatus).donePromise;
    expect(seoInit).toHaveBeenCalledOnce();
    expect(gaInit).toHaveBeenCalledOnce();
  });
});
