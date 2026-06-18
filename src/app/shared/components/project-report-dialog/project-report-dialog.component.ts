import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ProjectReportDialogData, ProjectDiagram } from '../../../core/models/project.model';
import { DiagramViewerService } from '../../../core/services/diagram-viewer.service';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-project-report-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, BadgeComponent],
  templateUrl: './project-report-dialog.component.html',
  styleUrl: './project-report-dialog.component.scss',
})
export class ProjectReportDialogComponent {
  readonly data = inject<ProjectReportDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<ProjectReportDialogComponent>);
  private readonly diagramViewer = inject(DiagramViewerService);

  get project() {
    return this.data.project;
  }

  close(): void {
    this.dialogRef.close();
  }

  openDiagram(diagram: ProjectDiagram): void {
    if (!diagram.imageUrl) {
      return;
    }

    this.diagramViewer.open({
      title: diagram.name,
      subtitle: diagram.type,
      imageUrl: diagram.imageUrl,
      projectTitle: this.project.title,
    });
  }
}
