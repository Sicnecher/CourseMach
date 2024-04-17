import { Types } from "mongoose"

export interface UserModel{
    _id?:Types.ObjectId,
    username: string,
    email:string,
    password:string,
    createdAt: Date
}

export interface TeacherModel {
    field:string,
    skills:string[],
    resume:File,
    payment_method:string,
    maximumPay?:string,
    minimumPay?:string
    country:string,
    bank:number | string,
    branch: number,
    account: number,
    nationalId: string
}

export interface CreditCardModel {
    card_number:string,
    expire_date:string,
    ccv:string,
    userId:string,
    nationalId: string
}
