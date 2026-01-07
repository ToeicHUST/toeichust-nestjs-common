import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('zZZ')
@Controller()
export class BaseAppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('env')
  getEnv(): string {
    return process.env.ENVIRONMENT || 'ENVIRONMENT not set';
  }
}
