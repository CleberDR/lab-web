import { Injectable } from '@nestjs/common';

interface healthCheck {
  status: string,
  time: string
}

@Injectable()
export class AppService {
  getHello(): healthCheck {
    return {status: 'OK', time: new Date().toISOString()};
  }
}
