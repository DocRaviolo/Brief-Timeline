import { TestBed } from '@angular/core/testing';

import { TimelinesListService } from './timelines-list.service';

describe('TimelineListService', () => {
  let service: TimelinesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelinesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
