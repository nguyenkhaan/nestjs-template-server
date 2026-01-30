import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { TokenType } from 'src/commons/enums/tokenType';

@Injectable()
export class TokenService {
  private readonly ACCESS_SECRET = 'access-secret';  //Mot lat sau thay bang bien moi truong sau 
  private readonly REFRESH_SECRET = 'refresh-secret';

  constructor(private readonly jwtService: JwtService) {}

  createToken(
    payload: Record<string, any>,
    tokenType: TokenType = TokenType.ACCESS,
    expiresIn?: JwtSignOptions['expiresIn'],
  ): string {
    const isAccess = tokenType === TokenType.ACCESS;

    return this.jwtService.sign(payload, {
      secret: isAccess ? this.ACCESS_SECRET : this.REFRESH_SECRET,
      expiresIn: expiresIn ?? (isAccess ? '15m' : '7d'),
    });
  }
}
