import { TestBed } from '@angular/core/testing';

import { StandingsServiceService } from './standings-service.service';

describe('StandingsServiceService', () => {
  let service: StandingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
