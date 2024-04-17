import { Test, TestingModule } from '@nestjs/testing';
import { LogUserController } from './log_user.controller';

describe('LogUserController', () => {
  let controller: LogUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogUserController],
    }).compile();

    controller = module.get<LogUserController>(LogUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
