import { TestBed } from '@angular/core/testing';

import { CndvService } from './cndv.service';

describe('CndvService', () => {
  let service: CndvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CndvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
