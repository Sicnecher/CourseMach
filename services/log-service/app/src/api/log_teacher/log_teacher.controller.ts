import { Body, Controller, Post, UploadedFile, UseInterceptors, Headers, UnauthorizedException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TEACHER } from 'src/data/schemas/teacher_schema.schema';
import { LogTeacherModelDto } from '../../models/dto/log.dto';
import { LogTeacherService } from './log_teacher.service';
import { jwtService } from 'src/auth/jwt/jwt.service';

@Controller('api/log-teacher')
export class LogTeacherController {
    constructor(private logTeacherService:LogTeacherService, private jwtService:jwtService) {}
    @Post()
    async newTeacher(
        @Body() teacherDto: LogTeacherModelDto,
        @Headers('authorization') authorizationHeader: string
    ){
        try{
        const token = authorizationHeader.split(' ')[1];
        this.jwtService.validateToken(token)
        .then((response) => {
            this.logTeacherService.createTeacher(teacherDto, response._id)
            .then(() => {
                return true
            }).catch((err) => {
                return false
            })
        }).catch((err) => {
            return err
        })
        }catch(error){
            throw new Error('File update failed!');
        }
    }
    @Post('upload-resume')
    @UseInterceptors(FileInterceptor('file')) // 'file' is the name of the field in the form-data
  async uploadFile(
    @Body() id:string, 
    @UploadedFile() file: Express.Multer.File
    ) {
    const filter = {_id: id}
    const update = { resume: file }
    try{
        await TEACHER.updateOne(filter, update)
        return { message: 'File uploaded successfully' };
    }catch(error){
        throw new Error('File update failed!');
    }
  }
}
