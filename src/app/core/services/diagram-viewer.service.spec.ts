import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { DiagramViewerService } from './diagram-viewer.service';
import { DiagramViewerDialogComponent } from '../../shared/components/diagram-viewer-dialog/diagram-viewer-dialog.component';

describe('DiagramViewerService', () => {
  let service: DiagramViewerService;
  let dialogOpen: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    dialogOpen = vi.fn();
    TestBed.configureTestingModule({
      providers: [
        DiagramViewerService,
        {
          provide: MatDialog,
          useValue: { open: dialogOpen },
        },
      ],
    });
    service = TestBed.inject(DiagramViewerService);
  });

  it('opens the diagram viewer dialog with fullscreen config', () => {
    const payload = {
      title: 'System Architecture',
      subtitle: 'Architecture',
      imageUrl: '/assets/diagrams/test.svg',
      projectTitle: 'POS Mono',
    };

    service.open(payload);

    expect(dialogOpen).toHaveBeenCalledOnce();
    expect(dialogOpen).toHaveBeenCalledWith(DiagramViewerDialogComponent, {
      data: payload,
      maxWidth: '96vw',
      maxHeight: '96vh',
      width: '96vw',
      height: '96vh',
      panelClass: 'diagram-viewer-panel',
      autoFocus: true,
      restoreFocus: true,
    });
  });
});
