import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LogUserModule } from './api/log_user/log_user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './data/schemas/user_schema.schema';
import { JwtAppModule } from './auth/jwt/jwt.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtService } from './auth/jwt/jwt.service';
import * as dotenv from 'dotenv';
import { MulterModule } from '@nestjs/platform-express';
import { LogTeacherModule } from './api/log_teacher/log_teacher.module';
import { JwtController } from './auth/jwt/jwt.controller';
dotenv.config();
const filePath = join(__dirname, '..', '..', 'client', 'dist', 'client', 'browser')

@Module({
  imports: [
    JwtAppModule,
    MulterModule.register({
      dest: './uploads', // Destination folder for uploaded files
    }),
    ServeStaticModule.forRoot({
      rootPath: filePath
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI,),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    LogUserModule,
    JwtModule.register({ // Configure JwtModule here
      secret: process.env.SECRET_KEY, // Provide your secret key
      signOptions: { expiresIn: '1h' }, // Optionally, provide sign options
    }),
  ],
  controllers: [AppController, JwtController],
  providers: [AppService, jwtService],
})
export class AppModule {}

