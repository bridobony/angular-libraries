import { TestBed } from '@angular/core/testing';

import { AngularControlsService } from './angular-controls.service';

describe('AngularControlsService', () => {
  let service: AngularControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
