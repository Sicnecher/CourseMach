import { Module } from '@nestjs/common';
import { LogUserController } from './log_user.controller';
import { LogUserService } from './log_user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtService } from 'src/auth/jwt/jwt.service';

@Module({
    controllers:[LogUserController],
    providers: [LogUserService, jwtService, JwtService]
})
export class LogUserModule {}
