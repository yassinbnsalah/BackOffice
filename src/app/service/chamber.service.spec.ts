import { TestBed } from '@angular/core/testing';

import { ChamberService } from './chamber.service';

describe('ChamberService', () => {
  let service: ChamberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
