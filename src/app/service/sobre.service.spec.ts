import { TestBed } from '@angular/core/testing';

import { SobreService } from './sobre.service';

describe('SobreService', () => {
  let service: SobreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
