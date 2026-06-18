import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export const GA_MEASUREMENT_ID = 'G-V2TPEMPE3S';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.trackPageView(event.urlAfterRedirects);
      });
  }

  trackPageView(path: string, pageTitle?: string): void {
    if (!isPlatformBrowser(this.platformId) || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: pageTitle ?? this.document.title,
      page_location: `${this.document.location.origin}${path}`,
    });
  }
}
