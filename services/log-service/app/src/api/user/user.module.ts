import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PaymentService } from './user-services/payment/payment.service';

@Module({
  controllers: [UserController],
  providers: [PaymentService]
})
export class UserModule {}
