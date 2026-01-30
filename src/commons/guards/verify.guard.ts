//Kiem tra day co phai nguoi dung hop le khong, nguoi dung nay da verify chua, co ton tai trong he thong chua ? 
import { ExecutionContext, Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { CanActivate } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common";
@Injectable()
export class VerifiedUserGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<any>();
    const user = req.user;

    if (!user) throw new UnauthorizedException('No user found');

    const dbUser = await this.prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!dbUser) {
      throw new UnauthorizedException('User not verified or inactive');
    }
    req.user = dbUser;

    return true;
  }
}
