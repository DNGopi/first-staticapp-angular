import { TestBed } from '@angular/core/testing';

import { EmsapiserService } from './emsapiser.service';

describe('EmsapiserService', () => {
  let service: EmsapiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmsapiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
