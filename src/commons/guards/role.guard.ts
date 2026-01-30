//Ham dung de xac dinh role cua nguoi dung dua vao token tra ve 
import { CanActivate, ExecutionContext } from "@nestjs/common";  
import { PUBLIC_KEY } from "src/commons/decorators/public";
import { ROLE_KEY } from "src/commons/decorators/role";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { SystemRole } from "src/generated/prisma";
export class RoleGuard implements CanActivate
{
    constructor(
        private readonly reflector : Reflector
    ) {} 
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.get<boolean>(PUBLIC_KEY , context.getHandler()) 
        if (isPublic) 
            return true 
        const requiredRoles = this.reflector.getAllAndOverride<SystemRole[]>(ROLE_KEY , 
            [
                context.getHandler(), 
                context.getClass() 
            ]
        )
        const req = context.switchToHttp().getRequest() 
        const userRoles = req.user.roles as SystemRole[] 
        if (!userRoles || userRoles.length === 0) return false;
        return requiredRoles.some(role => userRoles.includes(role));  //Nguoi dung co day du het tat ca cac role hay khong ? 
    }
}