import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface healthCheck {
  status: string,
  time: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): healthCheck {
    return this.appService.getHello();
  }
}
