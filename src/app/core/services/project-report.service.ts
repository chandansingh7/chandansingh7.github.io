import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProjectReportDialogData } from '../models/project.model';
import { ProjectReportDialogComponent } from '../../shared/components/project-report-dialog/project-report-dialog.component';

@Injectable({ providedIn: 'root' })
export class ProjectReportService {
  private readonly dialog = inject(MatDialog);

  open(data: ProjectReportDialogData): void {
    this.dialog.open(ProjectReportDialogComponent, {
      data,
      maxWidth: '960px',
      width: '96vw',
      maxHeight: '92vh',
      panelClass: 'project-report-panel',
      autoFocus: true,
      restoreFocus: true,
    });
  }
}
