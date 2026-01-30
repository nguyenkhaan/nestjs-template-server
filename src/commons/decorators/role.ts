import { SetMetadata } from "@nestjs/common";
import { SystemRole } from "src/generated/prisma";
export const ROLE_KEY = 'roles'
export const AssignRoles = (...roles : SystemRole[]) =>
    SetMetadata(ROLE_KEY , roles) 