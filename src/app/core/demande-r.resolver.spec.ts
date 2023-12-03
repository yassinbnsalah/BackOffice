import { TestBed } from '@angular/core/testing';

import { DemandeRResolver } from './demande-r.resolver';

describe('DemandeRResolver', () => {
  let resolver: DemandeRResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DemandeRResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
