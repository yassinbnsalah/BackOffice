import { TestBed } from '@angular/core/testing';

import { BlocService } from './bloc.service';

describe('BlocService', () => {
  let service: BlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
