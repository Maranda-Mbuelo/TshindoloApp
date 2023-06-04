import { TestBed } from '@angular/core/testing';

import { InternalLinksService } from './internal-links.service';

describe('InternalLinksService', () => {
  let service: InternalLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
