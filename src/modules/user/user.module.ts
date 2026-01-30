import { Module } from "@nestjs/common";
import { UserService } from "src/modules/user/user.service";
import { JwtGuard } from "src/commons/guards/jwt.guard";
import { AuthGuard } from "src/commons/guards/auth.guard";
@Module({
    imports: [], 
    providers: [AuthGuard , JwtGuard , UserService], 
    exports: [UserService], 
    controllers: [] 
}) 
export class UserModule {} 