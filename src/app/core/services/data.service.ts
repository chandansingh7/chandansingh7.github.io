import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

import { ExperienceData } from '../models/experience.model';
import { Profile } from '../models/profile.model';
import { ProjectData } from '../models/project.model';
import { SkillsData } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly http = inject(HttpClient);

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('/assets/data/profile.json').pipe(shareReplay(1));
  }

  getExperiences(): Observable<ExperienceData> {
    return this.http.get<ExperienceData>('/assets/data/experience.json').pipe(shareReplay(1));
  }

  getProjects(): Observable<ProjectData> {
    return this.http.get<ProjectData>('/assets/data/projects.json').pipe(shareReplay(1));
  }

  getSkills(): Observable<SkillsData> {
    return this.http.get<SkillsData>('/assets/data/skills.json').pipe(shareReplay(1));
  }
}
