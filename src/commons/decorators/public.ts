import { SetMetadata } from "@nestjs/common";
export const PUBLIC_KEY = 'public' 
export const isPublic = (k : boolean) => SetMetadata(PUBLIC_KEY , k) 