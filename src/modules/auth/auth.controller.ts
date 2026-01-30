import { Body, Controller, Post , Request, UseInterceptors } from "@nestjs/common";
import { RegisterDTO } from "src/modules/auth/dto/register.dto";
import { AuthService } from "src/modules/auth/auth.service";
import { UseGuards } from "@nestjs/common";
//Cai AuthGuard se suy nghi sau, co the se co tac dung trong tuong lai 
import { LoginDTO } from "src/modules/auth/dto/login.dto";
import { TokenService } from "src/modules/token/token.service";
import { TokenKey } from "src/commons/enums/tokenKey";
import { TokenType } from "src/commons/enums/tokenType";
import { AuthGuard } from "src/commons/guards/auth.guard";
import { LoggingInterceptor } from "src/commons/interceptors/logging.interceptor";
@Controller('auth')
export class AuthController 
{
    constructor(
        private readonly authService : AuthService, 
        private readonly tokenService : TokenService
    ) {} 
    @Post('/register')
    async register(@Body() registerData : RegisterDTO)
    {
        const responseData = await this.authService.register(registerData) 
        return responseData
    }
    @UseGuards(AuthGuard) //Du lieu se di vao request.user 
    @Post('/login')
    async login(@Body() loginData : LoginDTO , @Request() req)
    {
        const user = req.user 
        const {email , password} = loginData
        if (user.password == password) {
            const token = this.tokenService.createToken({
                [TokenKey.EMAIL] : email, 
                [TokenKey.ID] : user.id, 
                [TokenKey.NAME] : user.name, 
                [TokenKey.PURPOSE] : TokenType.ACCESS 
            } , TokenType.ACCESS , '1d')

            return { token }
        }
        return "Dang nhap that bai" 
    }
}