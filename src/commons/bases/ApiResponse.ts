import { Injectable, InjectableOptions } from "@nestjs/common";
import { ApiResponseKey } from "src/commons/enums/apiResponseKey";
import { HttpStatus } from "@nestjs/common";
@Injectable() 
export class ApiResponse 
{
    successPayload(data : any , message: string , httpStatus : HttpStatus = 200, ) : Record<string , any>  
    {
        return {
            [ApiResponseKey.CODE] : httpStatus, 
            [ApiResponseKey.MESSAGE] : message, 
            [ApiResponseKey.DATA] : data, 
            [ApiResponseKey.TIMESTAMP] : this.getTimeStamp(), 
            [ApiResponseKey.STATUS] : true 
        }
    }
    success(message : string , httpStatus : HttpStatus = 200) : Record<string, any> 
    {
        return {
            [ApiResponseKey.CODE] : httpStatus, 
            [ApiResponseKey.MESSAGE] : message,
            [ApiResponseKey.TIMESTAMP] : this.getTimeStamp(), 
            [ApiResponseKey.STATUS] : true 
        }
    }
    error(error : string , message : string , httpStatus : HttpStatus = 500) 
    {
        return {
            [ApiResponseKey.CODE] : httpStatus, 
            [ApiResponseKey.MESSAGE] : message, 
            [ApiResponseKey.ERROR] : error, 
            [ApiResponseKey.TIMESTAMP] : this.getTimeStamp(), 
            [ApiResponseKey.STATUS] : false 
        }
    }
    private getTimeStamp() 
    {
        return new Date().toISOString() 
    }
}