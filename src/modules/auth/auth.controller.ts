import { Body, Controller, Post } from "@nestjs/common";
import { RegisterDTO } from "src/modules/auth/dto/register.dto";
import { AuthService } from "src/modules/auth/auth.service";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/commons/guards/auth.guard";
import { LoginDTO } from "src/modules/auth/dto/login.dto";
@Controller('auth')
export class AuthController 
{
    constructor(
        private readonly authService : AuthService
    ) {} 
    @Post('/register')
    async register(@Body() registerData : RegisterDTO)
    {
        const responseData = await this.authService.register(registerData) 
        return responseData
    }
    @UseGuards(AuthGuard) 
    @Post('/login')
    async login(@Body() loginData : LoginDTO)
    {
        console.log(loginData) 
        return 'Dang nhap nhanh thong'
    }
}