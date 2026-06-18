import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let title: Title;
  let meta: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeoService, Title, Meta],
    });
    service = TestBed.inject(SeoService);
    title = TestBed.inject(Title);
    meta = TestBed.inject(Meta);
  });

  it('sets page title and meta description', () => {
    service.setPage({ title: 'Projects', description: 'Open-source project portfolio.' });

    expect(title.getTitle()).toContain('Projects');
    expect(meta.getTag('name="description"')?.content).toBe('Open-source project portfolio.');
  });

  it('sets Open Graph and Twitter tags', () => {
    service.setPage({
      title: 'Home',
      description: 'Senior Full Stack Engineer portfolio.',
      path: '/',
    });

    expect(meta.getTag('property="og:title"')?.content).toContain('Home');
    expect(meta.getTag('property="og:description"')?.content).toBe(
      'Senior Full Stack Engineer portfolio.',
    );
    expect(meta.getTag('name="twitter:card"')?.content).toBe('summary_large_image');
  });

  it('injects Person JSON-LD schema', () => {
    const doc = TestBed.inject(DOCUMENT);

    service.setPersonSchema({
      name: 'Chandan Singh',
      title: 'Senior Full Stack Engineer',
      headline: 'Java · Angular',
      location: 'Irving, TX',
      email: 'test@example.com',
      phone: '555',
      linkedin: 'https://linkedin.com/in/test',
      github: 'https://github.com/test',
      profileImageUrl: '/assets/images/profile.jpg',
      profileImageAlt: 'Photo',
      summary: 'Summary',
      aboutParagraphs: [],
      education: [],
      certifications: [],
    });

    const script = doc.getElementById('person-schema');
    expect(script?.textContent).toContain('"@type":"Person"');
    expect(script?.textContent).toContain('Chandan Singh');
  });
});
