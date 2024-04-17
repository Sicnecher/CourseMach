import { TestBed } from '@angular/core/testing';

import { FinValidationService } from './finance-validation.service';

describe('FinValidationService', () => {
  let service: FinValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
