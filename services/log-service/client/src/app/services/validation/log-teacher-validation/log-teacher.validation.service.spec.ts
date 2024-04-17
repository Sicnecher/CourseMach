import { TestBed } from '@angular/core/testing';

import { LogTeacherValidationService } from './log-teacher.validation.service';

describe('LogTeacherValidationService', () => {
  let service: LogTeacherValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogTeacherValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
