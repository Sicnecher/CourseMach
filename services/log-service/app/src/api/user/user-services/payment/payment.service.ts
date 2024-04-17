import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { CREDIT } from 'src/data/schemas/credit_card.schema';
import { USER } from 'src/data/schemas/user_schema.schema';
import { CreditCardModel } from 'src/models/main-models';

@Injectable()
export class PaymentService {
    async getCreditList(userId: Types.ObjectId): Promise<CreditCardModel[]> {
        try{
            const list: CreditCardModel[] = await CREDIT.find({ userId: userId })
            return list
        }catch(error){
            throw new Error('new error')
        }
    }

    async addCard(card:CreditCardModel, userId:Types.ObjectId): Promise<Object> {
        try{
            const newCard: CreditCardModel = await CREDIT.create({
                card, 
                userId: userId,
            })
            return newCard
        }catch(error){
            throw new Error('new error')
        }
    }
}
