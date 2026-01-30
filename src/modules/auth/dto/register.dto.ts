import { IsString , IsEmail , IsNotEmpty } from "class-validator";
export class RegisterDTO {
    @IsString() 
    @IsNotEmpty() 
    @IsEmail() 
    email : string 
    @IsNotEmpty() 
    password : string 
    @IsNotEmpty() 
    @IsString() 
    name : string 
}
