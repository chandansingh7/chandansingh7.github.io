import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('loads profile data', () => {
    service.getProfile().subscribe((profile) => {
      expect(profile.name).toBe('Chandan Singh');
    });
    httpMock.expectOne('/assets/data/profile.json').flush({ name: 'Chandan Singh' });
  });

  it('loads experience data', () => {
    service.getExperiences().subscribe((data) => {
      expect(data.experiences.length).toBe(1);
    });
    httpMock
      .expectOne('/assets/data/experience.json')
      .flush({ experiences: [{ title: 'Engineer' }] });
  });
});
