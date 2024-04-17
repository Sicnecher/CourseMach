import { TestBed } from '@angular/core/testing';

import { LogTeacherService } from './log-teacher.service'

describe('LogTeacherService', () => {
  let service: LogTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
