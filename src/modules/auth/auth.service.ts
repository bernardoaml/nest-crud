import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private readonly mockUser = {
    id: 1,
    email: 'admin@email.com',
    password: '$2b$10$UipbFglHXvK5nlklmFvIs.9P7ndxNh13BeC3rmE3rSyE37Yf3pH.O',
  };

  async validateUser(email: string, password: string) {
    if (email === this.mockUser.email && await bcrypt.compare(password, this.mockUser.password)) {
      const { password, ...result } = this.mockUser;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
