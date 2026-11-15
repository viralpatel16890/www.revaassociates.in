import { TestBed } from '@angular/core/testing';
import { appConfig } from './app.config';

describe('AppConfig', () => {
  it('should provide application config with routing', () => {
    expect(appConfig).toBeDefined();
    expect(appConfig.providers).toBeDefined();
    expect(appConfig.providers.length).toBeGreaterThan(0);
  });
});
