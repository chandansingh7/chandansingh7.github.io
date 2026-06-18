import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
      }),
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('starts with light theme by default when no preference', () => {
    expect(service.theme()).toBe('light');
  });

  it('toggles between light and dark', () => {
    service.applyTheme('dark');
    expect(service.theme()).toBe('dark');
    service.toggle();
    expect(service.theme()).toBe('light');
  });

  it('persists theme to localStorage', () => {
    service.applyTheme('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });
});
