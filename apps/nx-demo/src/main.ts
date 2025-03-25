/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { demoNestLib } from '@nx-demo/demo-nest-lib';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  const result = demoNestLib();
  Logger.log(`🚀 ${result}`);
  Logger.log(
    `🚀 Appplication is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
