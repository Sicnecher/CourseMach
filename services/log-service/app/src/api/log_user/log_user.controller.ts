import { Body, Controller, Post } from '@nestjs/common';
import { LogUserModelDto } from '../../models/dto/log.dto';
import { LogUserService } from './log_user.service';


@Controller('api/log-user')
export class LogUserController {
    constructor(private readonly logUserService:LogUserService) { }
    @Post('up')
    SignUp(@Body() model: LogUserModelDto){
        return this.logUserService.signUp(model);
    }
    @Post('in')
    LogIn(@Body() model: LogUserModelDto){
        try{
            const token = this.logUserService.logIn(model);
            return token
        }catch(error){
            throw new Error(error)
        }
    }
    @Post('email-confirm')
    checkEmail(@Body() email:string) : boolean {
        return true
    }
}
