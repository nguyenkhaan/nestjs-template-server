import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { RegisterDTO } from "src/modules/auth/dto/register.dto";
import { InternalServerErrorException } from "@nestjs/common";
@Injectable() 
export class AuthService 
{
    constructor(
        private readonly prismaService : PrismaService
    ) {} 
    async register(registerData : RegisterDTO) 
    {
        try 
        {
            //Tim kiem nguoi dung thong qua email truoc, neu da co roi thi khong cho dang ki 
            const data = await this.prismaService.user.create({
                data: {
                    name: registerData.name, 
                    email : registerData.email, 
                    password: registerData.password, 
                    verify: false //Nguoi dung moi dang ki thi chua cho verify lien 
                }
            })
            return 'Dang ky thanh cong' 
        } 
        catch {
            throw new InternalServerErrorException("Server is downing") 
        }
    }
}