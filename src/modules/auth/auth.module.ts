import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecretKey } from "src/commons/constant.ts/secret_ket";
import { AuthGuard } from "src/commons/guards/auth.guard";
import { RoleGuard } from "src/commons/guards/role.guard";
import { JwtGuard } from "src/commons/guards/jwt.guard";
import { TokenModule } from "src/modules/token/token.module";
import { AuthService } from "src/modules/auth/auth.service";
import { AuthController } from "src/modules/auth/auth.controller";
import { UserModule } from "src/modules/user/user.module";
import { VerifiedUserGuard } from "src/commons/guards/verify.guard";
@Module({
    imports: [
        JwtModule.register({
            secret: jwtSecretKey.secret
        }), 
        TokenModule
        // UserModule: M import cai UserModule o day la se kich hoat eff, lam cho phan providers cua UserModule bi keo theo, ben trong do co thang jwtService, chua duoc dang ky Module nen no se bao loi. 

    ], 
    controllers: [AuthController], 
    providers: [AuthGuard , RoleGuard , JwtGuard , AuthService , VerifiedUserGuard ], 
    exports : [AuthGuard , RoleGuard , JwtGuard , AuthService , VerifiedUserGuard]
})
export class AuthModule {} 