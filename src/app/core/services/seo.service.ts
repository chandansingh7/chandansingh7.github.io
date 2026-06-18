import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

import { Profile } from '../models/profile.model';

export interface PageSeoOptions {
  title: string;
  description?: string;
  imageUrl?: string;
  path?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly baseTitle = 'Chandan Singh | Senior Full Stack Engineer';
  private readonly siteUrl = 'https://chandansingh7.github.io';
  private readonly defaultImage = `${this.siteUrl}/assets/images/profile.jpg`;
  private readonly defaultDescription =
    'Senior Full Stack Engineer — Java, Spring Boot, Angular, Azure, Kubernetes. 9+ years enterprise delivery with documented open-source projects.';

  setPage(options: PageSeoOptions | string, legacyDescription?: string): void {
    const config: PageSeoOptions =
      typeof options === 'string'
        ? { title: options, description: legacyDescription }
        : options;

    const pageTitle = `${config.title} | ${this.baseTitle}`;
    const description = config.description ?? this.defaultDescription;
    const image = this.toAbsoluteUrl(config.imageUrl ?? this.defaultImage);
    const url = config.path ? `${this.siteUrl}${config.path}` : this.siteUrl;

    this.title.setTitle(pageTitle);
    this.updateTag('name', 'description', description);
    this.updateTag('property', 'og:title', pageTitle);
    this.updateTag('property', 'og:description', description);
    this.updateTag('property', 'og:image', image);
    this.updateTag('property', 'og:url', url);
    this.updateTag('property', 'og:type', 'website');
    this.updateTag('name', 'twitter:card', 'summary_large_image');
    this.updateTag('name', 'twitter:title', pageTitle);
    this.updateTag('name', 'twitter:description', description);
    this.updateTag('name', 'twitter:image', image);
  }

  setPersonSchema(profile: Profile): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.title,
      url: this.siteUrl,
      image: this.toAbsoluteUrl(profile.profileImageUrl),
      email: profile.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: profile.location,
      },
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: profile.headline.split(' · '),
    };

    this.setJsonLd('person-schema', schema);
  }

  private updateTag(attr: 'name' | 'property', selector: string, content: string): void {
    if (this.meta.getTag(`${attr}="${selector}"`)) {
      this.meta.updateTag({ [attr]: selector, content });
      return;
    }
    this.meta.addTag({ [attr]: selector, content });
  }

  private toAbsoluteUrl(path: string): string {
    if (path.startsWith('http')) {
      return path;
    }
    return `${this.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  private setJsonLd(id: string, data: object): void {
    const existing = this.document.getElementById(id);
    existing?.remove();

    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
