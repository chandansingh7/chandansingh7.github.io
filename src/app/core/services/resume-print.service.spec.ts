import { TestBed } from '@angular/core/testing';

import { ResumePrintService } from './resume-print.service';

describe('ResumePrintService', () => {
  let service: ResumePrintService;
  let openSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    TestBed.configureTestingModule({ providers: [ResumePrintService] });
    service = TestBed.inject(ResumePrintService);
  });

  afterEach(() => {
    openSpy.mockRestore();
  });

  it('opens print view with autoprint query param', () => {
    service.openPrintView(true);

    expect(openSpy).toHaveBeenCalledWith(
      '/resume/print?print=1',
      '_blank',
      'noopener,noreferrer',
    );
  });

  it('opens print view without autoprint when disabled', () => {
    service.openPrintView(false);

    expect(openSpy).toHaveBeenCalledWith('/resume/print', '_blank', 'noopener,noreferrer');
  });
});
