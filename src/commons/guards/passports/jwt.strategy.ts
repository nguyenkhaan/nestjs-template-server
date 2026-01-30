//Ham dung de verify token gui den -> Chuyen du lieu token vao trong req.user 

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtSecretKey } from 'src/commons/constant.ts/secret_ket';
@Injectable() 
export class JwtStrategyPassport extends PassportStrategy(Strategy , 'jwt') 
{
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecretKey.secret
        })
    }
    async validate(payload: any) {
        console.log(payload) 
        return payload
      }
}
