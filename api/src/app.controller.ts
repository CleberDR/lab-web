import { AppService } from './app.service'
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { ApiQuery, ApiOkResponse } from '@nestjs/swagger';


interface healthCheck {
  status: string,
  time: string
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @ApiOkResponse({
    type: Object({auth_token: "token"}),
  })
  @ApiQuery({
    description: 'Email do usuário',
    name: 'username',
    example: 'uneb@uneb.gov.ba',
    required: true,
    type: String,
  })
  @ApiQuery({
    description: 'Senha do usuário',
    name: 'password',
    example: '020304050',
    required: true,
    type: String,
  })
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  getHello(): healthCheck {
    return this.appService.getHello();
  }
}