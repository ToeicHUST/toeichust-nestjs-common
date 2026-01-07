import { Module } from '@nestjs/common';
import { BaseAppService } from './base-app.service';
import { BaseAppController } from './base-app.controller';

@Module({
  controllers: [BaseAppController],
  providers: [BaseAppService],
})
export class BaseAppModule {}
