import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { connect } from './data/connect.mongoose';
dotenv.config();

async function bootstrap() {
  await connect();
  console.log('sdsdsd')
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3001);
}
bootstrap();
