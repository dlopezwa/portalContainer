import { TestBed } from '@angular/core/testing';

import { EventsEmittersService } from './events-emitters.service';

describe('EventsEmittersService', () => {
  let service: EventsEmittersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsEmittersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
