import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
const filePath = join(__dirname, '..', '..', 'client', 'dist', 'client', 'browser')

@Controller('i')
export class AppController {
  constructor() {}
}