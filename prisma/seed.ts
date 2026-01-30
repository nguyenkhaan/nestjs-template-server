import { PrismaClient } from "src/generated/prisma";
import { SystemRole } from "src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
const prisma = new PrismaClient({
    adapter: new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
    }),
  })
async function main() 
{
    const roles = await prisma.role.createMany({
        data : [
            {
                id: 1810, 
                name: SystemRole.ADMIN 
            }, 
            {
                id : 1901, 
                name: SystemRole.USER
            }
        ]
    })
    const admin = await prisma.user.create({
        data : {
            name: 'admin', 
            email: 'admin@gmail.com', 
            password: 'admin' 
        }
    })
    //asign Role 
    await prisma.userRole.createMany({
        data : [
            {
                userID : admin.id, 
                roleID: 1810 //User 
            }, 
            {
                userID : admin.id, 
                roleID : 1901 //User 
            }
        ]
    })

}
main().then((data) => console.log(data)).catch((err) => console.log(err))