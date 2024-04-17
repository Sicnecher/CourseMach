import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LogUserModelDto } from '../../models/dto/log.dto';
import { USER } from 'src/data/schemas/user_schema.schema';
import * as bcrypt from 'bcrypt';
import { jwtService } from 'src/auth/jwt/jwt.service';

@Injectable()
export class LogUserService {

    constructor(private jwt:jwtService) { }

    async signUp(user:LogUserModelDto){
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = new USER({
            username: user.username,
            email: user.email,
            password: hashedPassword,
        });
        await newUser.save()
        const foundUser = await USER.findOne({ username: newUser.username });
        return this.jwt.generateJwt(foundUser);
    }

    async logIn(user:LogUserModelDto){
        const foundUser = await USER.findOne({email: user.email});
        if (!foundUser) throw new UnauthorizedException('Unauthorized access!')
        const validation = bcrypt.compare(user.password, foundUser.password);
    if(validation) return this.jwt.generateJwt(foundUser)
    throw new Error('Validation Failed')
    }
}
