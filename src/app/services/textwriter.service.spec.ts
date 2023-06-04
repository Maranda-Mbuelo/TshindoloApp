import { TestBed } from '@angular/core/testing';

import { TextwriterService } from './textwriter.service';

describe('TextwriterService', () => {
  let service: TextwriterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextwriterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
