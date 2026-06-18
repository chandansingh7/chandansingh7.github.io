import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { AnalyticsService, GA_MEASUREMENT_ID } from './analytics.service';

describe('AnalyticsService', () => {
  let gtag: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    gtag = vi.fn();
    window.gtag = gtag as (...args: unknown[]) => void;

    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: '', component: class EmptyComponent {} },
          { path: 'about', component: class AboutComponent {} },
        ]),
      ],
    });
  });

  afterEach(() => {
    delete window.gtag;
  });

  it('sends a GA page view for the initial route', async () => {
    TestBed.inject(AnalyticsService);
    await TestBed.inject(Router).navigateByUrl('/about');

    expect(gtag).toHaveBeenCalledWith('config', GA_MEASUREMENT_ID, {
      page_path: '/about',
      page_title: document.title,
      page_location: `${document.location.origin}/about`,
    });
  });

  it('trackPageView no-ops when gtag is unavailable', () => {
    delete window.gtag;
    const service = TestBed.inject(AnalyticsService);

    expect(() => service.trackPageView('/contact', 'Contact')).not.toThrow();
  });

  it('trackPageView sends config when gtag is available', () => {
    const service = TestBed.inject(AnalyticsService);
    const documentRef = TestBed.inject(DOCUMENT);
    Object.defineProperty(documentRef, 'title', { value: 'Contact | Portfolio', configurable: true });

    service.trackPageView('/contact', 'Contact | Portfolio');

    expect(gtag).toHaveBeenCalledWith('config', GA_MEASUREMENT_ID, {
      page_path: '/contact',
      page_title: 'Contact | Portfolio',
      page_location: `${documentRef.location.origin}/contact`,
    });
  });
});
