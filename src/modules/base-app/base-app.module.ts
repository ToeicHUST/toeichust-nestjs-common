import { Module } from '@nestjs/common';
import { BaseAppController } from './base-app.controller';

@Module({
  controllers: [BaseAppController],
})
export class BaseAppModule {}
