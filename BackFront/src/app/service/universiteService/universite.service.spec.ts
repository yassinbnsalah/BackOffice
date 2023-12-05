import { TestBed } from '@angular/core/testing';

import { UniversiteService } from './universite.service';

describe('UniversiteService', () => {
  let service: UniversiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
