import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { DataService } from '../../core/services/data.service';
import { DiagramViewerService } from '../../core/services/diagram-viewer.service';
import { ProjectReportService } from '../../core/services/project-report.service';
import { SeoService } from '../../core/services/seo.service';
import { Project, ProjectDiagram } from '../../core/models/project.model';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatChipsModule,
    SectionHeaderComponent,
    BadgeComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private readonly data = inject(DataService);
  private readonly diagramViewer = inject(DiagramViewerService);
  private readonly projectReport = inject(ProjectReportService);
  private readonly seo = inject(SeoService);
  readonly projects$ = this.data.getProjects();

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Projects',
      description:
        'Open-source portfolio projects with architecture diagrams, requirements, and full project reports.',
      path: '/projects',
    });
  }

  openProjectReport(project: Project, figjamBoardUrl: string): void {
    this.projectReport.open({ project, figjamBoardUrl });
  }

  openDiagram(project: Project, diagram: ProjectDiagram): void {
    if (!diagram.imageUrl) {
      return;
    }

    this.diagramViewer.open({
      title: diagram.name,
      subtitle: diagram.type,
      imageUrl: diagram.imageUrl,
      projectTitle: project.title,
    });
  }
}
