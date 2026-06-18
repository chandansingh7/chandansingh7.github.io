import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { ProjectReportService } from './project-report.service';
import { ProjectReportDialogComponent } from '../../shared/components/project-report-dialog/project-report-dialog.component';
import { Project } from '../models/project.model';

describe('ProjectReportService', () => {
  let service: ProjectReportService;
  let dialogOpen: ReturnType<typeof vi.fn>;

  const project: Project = {
    id: 'brightrail',
    title: 'Brightrail',
    problem: 'Problem',
    solution: 'Solution',
    techStack: ['Angular'],
    keyFeatures: [],
    architectureHighlights: [],
    githubUrl: 'https://github.com/chandansingh7/brightrail',
    liveDemoUrl: '',
    relatedRepos: [],
    diagrams: [],
    useCases: [],
    sequences: [],
    entities: [],
  };

  beforeEach(() => {
    dialogOpen = vi.fn();
    TestBed.configureTestingModule({
      providers: [
        ProjectReportService,
        { provide: MatDialog, useValue: { open: dialogOpen } },
      ],
    });
    service = TestBed.inject(ProjectReportService);
  });

  it('opens the project report dialog', () => {
    const payload = { project, figjamBoardUrl: 'https://figma.com/board/test' };

    service.open(payload);

    expect(dialogOpen).toHaveBeenCalledOnce();
    expect(dialogOpen).toHaveBeenCalledWith(ProjectReportDialogComponent, {
      data: payload,
      maxWidth: '960px',
      width: '96vw',
      maxHeight: '92vh',
      panelClass: 'project-report-panel',
      autoFocus: true,
      restoreFocus: true,
    });
  });
});
