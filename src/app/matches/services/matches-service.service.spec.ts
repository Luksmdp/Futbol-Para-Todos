import { TestBed } from '@angular/core/testing';

import { MatchesServiceService } from './matches-service.service';

describe('MatchesServiceService', () => {
  let service: MatchesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
