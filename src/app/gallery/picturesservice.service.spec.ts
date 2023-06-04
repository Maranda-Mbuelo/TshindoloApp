import { TestBed } from '@angular/core/testing';

import { PicturesserviceService } from './picturesservice.service';

describe('PicturesserviceService', () => {
  let service: PicturesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicturesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
