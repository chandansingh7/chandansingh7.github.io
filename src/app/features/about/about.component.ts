import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe, SectionHeaderComponent, BadgeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  private readonly data = inject(DataService);
  private readonly seo = inject(SeoService);
  readonly profile$ = this.data.getProfile();

  ngOnInit(): void {
    this.seo.setPage('About', 'About Chandan Singh — Senior Full Stack Engineer.');
  }
}
