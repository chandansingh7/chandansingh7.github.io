import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [AsyncPipe, SectionHeaderComponent, CardComponent, BadgeComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  private readonly data = inject(DataService);
  private readonly seo = inject(SeoService);
  readonly skills$ = this.data.getSkills();

  ngOnInit(): void {
    this.seo.setPage('Skills', 'Technical skills — Java, Spring Boot, Angular, cloud, and DevOps.');
  }
}
