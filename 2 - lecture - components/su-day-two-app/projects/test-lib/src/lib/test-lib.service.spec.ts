import { TestBed } from '@angular/core/testing';

import { TestLibService } from './test-lib.service';

describe('TestLibService', () => {
  let service: TestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
