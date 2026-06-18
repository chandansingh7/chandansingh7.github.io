import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';

import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-resume-print',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './resume-print.component.html',
  styleUrl: './resume-print.component.scss',
})
export class ResumePrintComponent implements OnInit, AfterViewInit {
  private readonly data = inject(DataService);
  private readonly seo = inject(SeoService);
  private readonly route = inject(ActivatedRoute);

  readonly vm$ = combineLatest([
    this.data.getProfile(),
    this.data.getExperiences(),
    this.data.getSkills(),
  ]).pipe(
    map(([profile, experience, skills]) => ({
      profile,
      experiences: experience.experiences,
      skillCategories: skills.categories,
    })),
  );

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Resume',
      description: 'Chandan Singh — Senior Full Stack Engineer resume.',
      path: '/resume/print',
    });
  }

  ngAfterViewInit(): void {
    if (this.route.snapshot.queryParamMap.get('print') === '1') {
      setTimeout(() => window.print(), 400);
    }
  }
}
