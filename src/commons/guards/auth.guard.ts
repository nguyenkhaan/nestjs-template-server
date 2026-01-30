//Ham dung de verify nguoi dung co trong he thong khong 
//Nang cap hon thi 2 ham nay su dung passport-jwt 
import { Injectable , CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { Request } from "express";
@Injectable() 
export class AuthGuard implements CanActivate //Su dung cho login 
{
    constructor(
        private readonly prismaService : PrismaService
    ) { } 
    async canActivate(context: ExecutionContext):  Promise<boolean>  {
        const req = context.switchToHttp().getRequest() 
        const ans = this.getRequestBody(req) 
        if (ans == null) 
            throw new UnauthorizedException("Information is invalid") 
        try 
        {
            const {email , password} = ans 
            //Tim kiem nguoi dung trong he thong 
            
            const user = await this.prismaService.user.findUnique({
                where: {email}
            })
            if (!user) 
                throw new UnauthorizedException("User not verified")
            req.user = {email , password}
        } 
        catch {
            throw new UnauthorizedException("User not verified")
        } 
        return true 
    } 
    getRequestBody(req : Request) 
    {
        const {email , password} = req.body    //Nang cao len kiem tra nguoi dung trong he thong va ho da verify hay chua 
        if (!email || !password) return null 
        return {
            email, password 
        }
    }
}