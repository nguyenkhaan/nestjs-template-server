import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/prisma.service";
@Injectable() 
export class UserService 
{
    constructor(
        private readonly prismaService : PrismaService 
    ) {} 
    async findUserByID(id : number) 
    {
        try 
        {
            const user = await this.prismaService.user.findUnique({
                where: {id}
            }) 
            return user 
        }

        catch (err) 
        {
            throw new InternalServerErrorException("Internal Server Error") 
        }
    }
    async findUserByEmail(email : string) 
    {
        try 
        {
            const user = await this.prismaService.user.findUnique({
                where: {email}
            }) 
            return user 
        }
        catch (err) 
        {
            throw new InternalServerErrorException("Internal Server Error") 
        }
    }
    async validateUser() //True / false ? 
    {

    }
}
