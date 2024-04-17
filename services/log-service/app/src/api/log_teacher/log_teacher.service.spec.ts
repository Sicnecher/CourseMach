import { Test, TestingModule } from '@nestjs/testing';
import { LogTeacherService } from './log_teacher.service';

describe('LogTeacherService', () => {
  let service: LogTeacherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogTeacherService],
    }).compile();

    service = module.get<LogTeacherService>(LogTeacherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
