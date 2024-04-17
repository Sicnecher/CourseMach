import { Body, Controller, Get, Headers, Post, Res } from '@nestjs/common';
import { jwtService } from 'src/auth/jwt/jwt.service';
import { PaymentService } from './user-services/payment/payment.service';
import { CreditCardModel } from 'src/models/main-models';

@Controller('api/user')
export class UserController {

    constructor(private jwtService:jwtService, private paymentService:PaymentService) { }

    @Get('payment/credit-list')
     getCreditList(@Headers('authorization') authorizationHeader: string){
        return authorizationHeader
        // if (!authorizationHeader) {
        //     throw new Error('Authorization header is missing');
        //   }
        //   const token = authorizationHeader.split(' ')[1];
        //   const payload = await this.jwtService.decryptToken(token);
        //   const creditList = await this.paymentService.getCreditList(payload._id)
        //   return { list: creditList };
    }

    @Post('payment/credit-list')
    async addCreditCard(@Body() card: CreditCardModel, @Headers('authorization') authorizationHeader: string){
        if (!authorizationHeader) {
            throw new Error('Authorization header is missing');
          }
          const token = authorizationHeader.split(' ')[1];
          const payload = await this.jwtService.validateToken(token);
          const response = await this.paymentService.addCard(card, payload._id)
          return { addedCard: response };
    }
}
