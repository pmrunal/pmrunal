import { TestBed } from '@angular/core/testing';

import { GifAPIServiceService } from './gif-apiservice.service';

describe('GifAPIServiceService', () => {
  let service: GifAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
