import { TestBed } from '@angular/core/testing';

import { ProValidationService } from './proffesional-validation.service';

describe('ProValidationService', () => {
  let service: ProValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
