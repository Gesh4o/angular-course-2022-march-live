import { TestBed } from '@angular/core/testing';

import { MessageBusService } from './message-bus.service';

describe('MessageBusService', () => {
  let service: MessageBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
