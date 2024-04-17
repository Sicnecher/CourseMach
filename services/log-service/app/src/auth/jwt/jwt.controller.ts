import { Headers, Controller, Post, Req, Get } from '@nestjs/common';
import { jwtService } from './jwt.service';
import { Request } from 'express'

@Controller('jwt')
export class JwtController {

    constructor(private jwtService:jwtService) { }

    @Get('validation')
    validateToken(@Headers('authorization') token: string, @Req() request: Request
    ){
        try{
            const res = this.jwtService.validateToken(token);
            return res
        }catch(error){
            return false
        }
    }
}
