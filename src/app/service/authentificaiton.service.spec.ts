import { TestBed } from '@angular/core/testing';

import { AuthentificaitonService } from './authentificaiton.service';

describe('AuthentificaitonService', () => {
  let service: AuthentificaitonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificaitonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
