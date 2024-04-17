
export interface LogTeacherDto{
    proInfo: LogTeacherProffesionalDto,
    financeInfo: LogTeacherFinanceDto
}

export interface LogTeacherProffesionalDto{
    field:string,
    skills:string[],
    resume:string | File,
    payment_method:string,
    maximumPay?:string,
    minimumPay?:string
}

export interface LogTeacherFinanceDto{
    country:string,
    bank:number | string,
    branch: string,
    account: string,
    bankAuth: string | File,
    nationalId: string
}