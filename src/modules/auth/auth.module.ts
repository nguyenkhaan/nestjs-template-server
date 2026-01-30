import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecretKey } from "src/commons/constant.ts/secret_ket";
import { AuthGuard } from "src/commons/guards/auth.guard";
import { RoleGuard } from "src/commons/guards/role.guard";
import { JwtGuard } from "src/commons/guards/jwt.guard";
import { TokenModule } from "src/modules/token/token.module";
import { AuthService } from "src/modules/auth/auth.service";
import { AuthController } from "src/modules/auth/auth.controller";
@Module({
    imports: [
        JwtModule.register({
            secret: jwtSecretKey.secret
        }), 
        TokenModule
    ], 
    controllers: [AuthController], 
    providers: [AuthGuard , RoleGuard , JwtGuard , AuthService], 
    exports : [AuthGuard , RoleGuard , JwtGuard , AuthService]
})
export class AuthModule {} 