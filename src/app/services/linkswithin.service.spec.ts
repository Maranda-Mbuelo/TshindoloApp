import { TestBed } from '@angular/core/testing';

import { LinkswithinService } from './linkswithin.service';

describe('LinkswithinService', () => {
  let service: LinkswithinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkswithinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
