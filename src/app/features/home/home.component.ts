import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { combineLatest, map, tap } from 'rxjs';

import { DataService } from '../../core/services/data.service';
import { ProjectReportService } from '../../core/services/project-report.service';
import { SeoService } from '../../core/services/seo.service';
import { Project } from '../../core/models/project.model';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, RouterLink, MatButtonModule, MatIconModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly data = inject(DataService);
  private readonly projectReport = inject(ProjectReportService);
  private readonly seo = inject(SeoService);

  readonly vm$ = combineLatest([this.data.getProfile(), this.data.getProjects()]).pipe(
    tap(([profile]) => this.seo.setPersonSchema(profile)),
    map(([profile, projectData]) => ({
      profile,
      projects: projectData,
      featuredProjects: projectData.projects.filter((p) => p.featured),
    })),
  );

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Home',
      description:
        'Chandan Singh — Senior Full Stack Engineer. Java, Spring Boot, Angular, Azure, Kubernetes. 9+ years enterprise delivery.',
      path: '/',
      imageUrl: '/assets/images/profile.jpg',
    });
  }

  openProjectReport(project: Project, figjamBoardUrl: string): void {
    this.projectReport.open({ project, figjamBoardUrl });
  }
}
