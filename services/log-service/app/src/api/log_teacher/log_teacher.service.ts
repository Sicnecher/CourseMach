import { Injectable } from '@nestjs/common';
import { TEACHER } from 'src/data/schemas/teacher_schema.schema';
import { LogTeacherModelDto } from '../../models/dto/log.dto';
import { Types } from 'mongoose';

@Injectable()
export class LogTeacherService {

    constructor() {}

    async createTeacher(teacher: LogTeacherModelDto, id: Types.ObjectId){
        const { proInfo, financeInfo } = teacher

        console.log({proInfo, financeInfo})
        const newTeacher = await TEACHER.create({ proInfo, financeInfo, userId:id });
    }
}