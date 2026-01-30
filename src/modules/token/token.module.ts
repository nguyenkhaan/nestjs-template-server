import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecretKey } from "src/commons/constant.ts/secret_ket";
import { TokenService } from "src/modules/token/token.service";
@Global() //Bat cu ham nao cung su dung duoc Module nay 
@Module({
    imports: [
        JwtModule.register({
            secret: jwtSecretKey.secret  
        }) 
    ], 
    providers: [TokenService], 
    exports: [TokenService]
})
export class TokenModule {} 