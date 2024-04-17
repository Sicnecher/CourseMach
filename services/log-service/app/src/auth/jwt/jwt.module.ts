import { Module } from '@nestjs/common';
import { jwtService } from './jwt.service';
import { JwtController } from './jwt.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [jwtService, JwtService],
  controllers: [JwtController]
})
export class JwtAppModule {}
