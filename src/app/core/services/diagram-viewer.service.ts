import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DiagramViewerData } from '../models/diagram-viewer.model';
import { DiagramViewerDialogComponent } from '../../shared/components/diagram-viewer-dialog/diagram-viewer-dialog.component';

@Injectable({ providedIn: 'root' })
export class DiagramViewerService {
  private readonly dialog = inject(MatDialog);

  open(data: DiagramViewerData): void {
    this.dialog.open(DiagramViewerDialogComponent, {
      data,
      maxWidth: '96vw',
      maxHeight: '96vh',
      width: '96vw',
      height: '96vh',
      panelClass: 'diagram-viewer-panel',
      autoFocus: true,
      restoreFocus: true,
    });
  }
}
