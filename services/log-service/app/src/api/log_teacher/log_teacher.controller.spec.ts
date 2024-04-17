import { Test, TestingModule } from '@nestjs/testing';
import { LogTeacherController } from './log_teacher.controller';

describe('LogTeacherController', () => {
  let controller: LogTeacherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogTeacherController],
    }).compile();

    controller = module.get<LogTeacherController>(LogTeacherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
