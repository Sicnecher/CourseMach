import { Test, TestingModule } from '@nestjs/testing';
import { LogUserService } from './log_user.service';

describe('LogUserService', () => {
  let service: LogUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogUserService],
    }).compile();

    service = module.get<LogUserService>(LogUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
