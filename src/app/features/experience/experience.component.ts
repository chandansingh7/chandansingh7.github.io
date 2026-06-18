import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [AsyncPipe, SectionHeaderComponent, TimelineComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  private readonly data = inject(DataService);
  private readonly seo = inject(SeoService);
  readonly experience$ = this.data.getExperiences();

  ngOnInit(): void {
    this.seo.setPage('Experience', 'Professional experience across enterprise consulting and full-stack delivery.');
  }
}
