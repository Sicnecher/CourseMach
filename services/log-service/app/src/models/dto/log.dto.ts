export interface LogUserModelDto {
    id?:string,
    username:string,
    email:string,
    password:string
}

export interface LogTeacherModelDto {
    proInfo: LogTeacherProffesionalDto,
    financeInfo: LogTeacherFinanceDto,
    userId: String
}

interface LogTeacherProffesionalDto {
    field:string,
    skills:string[],
    resume:File,
    payment_method:string,
    maximumPay?:string,
    minimumPay?:string
}

interface LogTeacherFinanceDto {
    country:string,
    bank:number | string,
    branch: number,
    account: number,
    nationalId: number
}