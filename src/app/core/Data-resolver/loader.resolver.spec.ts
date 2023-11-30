import { TestBed } from '@angular/core/testing';

import { LoaderResolver } from './loader.resolver';

describe('LoaderResolver', () => {
  let resolver: LoaderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoaderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
