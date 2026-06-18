import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DiagramViewerData } from '../../../core/models/diagram-viewer.model';

@Component({
  selector: 'app-diagram-viewer-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './diagram-viewer-dialog.component.html',
  styleUrl: './diagram-viewer-dialog.component.scss',
})
export class DiagramViewerDialogComponent {
  readonly data = inject<DiagramViewerData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<DiagramViewerDialogComponent>);

  close(): void {
    this.dialogRef.close();
  }

  openInNewTab(): void {
    window.open(this.data.imageUrl, '_blank', 'noopener,noreferrer');
  }
}
