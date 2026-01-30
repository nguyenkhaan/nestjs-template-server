//Bat cac loi lien quan den HttpException: 404, 500, 401, 403, 409. 
import { ArgumentsHost, Catch , HttpException } from "@nestjs/common";
import { ExceptionFilter } from "@nestjs/common";
import { Request , Response } from "express";

@Catch(HttpException) 
export class HttpExcetionFilter implements ExceptionFilter 
{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp() 
        const response = ctx.getResponse<Response>() 
        const request = ctx.getRequest<Request>() 
        const status = exception.getStatus() 
        
        response.status(status).json({
            statusCode : status, 
            timeStamp: new Date().toISOString(), 
            path: request.url, 
            message : exception.message 
        })
    }
}