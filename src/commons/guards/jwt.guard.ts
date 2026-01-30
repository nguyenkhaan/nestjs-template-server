import { CanActivate , ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Request } from "express";
//Ham dung de verify token cua nguoi dung 
@Injectable() 
export class JwtGuard implements CanActivate
{
    constructor(
        private readonly jwtService : JwtService
    ) {} 
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest() 
        const token = this.extractTokenFromHeader(req) 
        if (!token) 
            throw new UnauthorizedException("Fucking") 
        try 
        {
            const payload = await this.jwtService.verifyAsync(token) 
            req['user'] = payload 
            
        }  
        catch 
        {
            throw new UnauthorizedException("Fucking")
        }
        return true 
    }
    private extractTokenFromHeader(request: Request): string | undefined 
    {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
