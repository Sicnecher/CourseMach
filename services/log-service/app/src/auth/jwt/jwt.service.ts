import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserModel } from 'src/models/main-models';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import { USER } from 'src/data/schemas/user_schema.schema';
dotenv.config()

@Injectable()
export class jwtService {
    payload?:any;
    secret:string = process.env.SECRET_KEY
    constructor(private readonly jwtService:JwtService) { }

    generateJwt(user: UserModel){
        this.payload = {
                username: user.username,
                email: user.email,
                _id: user._id
        }
        return {
            access_token: this.jwtService.sign(this.payload, { secret: this.secret })
        }
    }

    async validateToken(token: string){
            const payload = this.jwtService.verify(token, { secret: this.secret })
            if(payload){
                const foundUser = await USER.findOne({_id: payload._id});
                if (!foundUser) throw new UnauthorizedException('Unauthorized access!')
                 return payload.email === foundUser.email ? payload : new UnauthorizedException('Unauthorized access!')
            }else{
                throw new UnauthorizedException('Unauthorized access!')
            }
    }
}
