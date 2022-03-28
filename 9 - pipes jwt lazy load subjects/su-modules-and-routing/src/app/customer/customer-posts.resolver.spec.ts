import { TestBed } from '@angular/core/testing';

import { CustomerPostsResolver } from './customer-posts.resolver';

describe('CustomerPostsResolver', () => {
  let resolver: CustomerPostsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CustomerPostsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
