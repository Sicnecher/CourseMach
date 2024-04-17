import { Module } from '@nestjs/common';
import { LogTeacherService } from './log_teacher.service';
import { LogTeacherController } from './log_teacher.controller';

@Module({
  providers: [LogTeacherService],
  controllers: [LogTeacherController]
})
export class LogTeacherModule {}
