import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const whereParams = { mail: username };
    const [user] = await this.usersService.findAll({ where: whereParams });
    if (user?.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.mail, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
