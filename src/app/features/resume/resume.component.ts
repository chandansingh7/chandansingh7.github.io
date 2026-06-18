import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DataService } from '../../core/services/data.service';
import { ResumePrintService } from '../../core/services/resume-print.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AsyncPipe, RouterLink, MatButtonModule, MatIconModule, SectionHeaderComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent implements OnInit {
  private readonly data = inject(DataService);
  private readonly resumePrint = inject(ResumePrintService);
  private readonly seo = inject(SeoService);
  readonly profile$ = this.data.getProfile();

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Resume',
      description:
        'Download Chandan Singh resume — Senior Full Stack Engineer, Java, Spring Boot, Angular, Azure, Kubernetes.',
      path: '/resume',
    });
  }

  downloadPdf(): void {
    this.resumePrint.openPrintView(true);
  }

  previewResume(): void {
    this.resumePrint.openPrintView(false);
  }
}
