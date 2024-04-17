import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogTeacherDto } from '../../../models/dto/log-teacher.dto';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogTeacherService {

  constructor(private http:HttpClient) { }

  createTeacher(teacher:LogTeacherDto){
    return this.http.post(`${environment.apiBaseUrl}/api/log-teacher`, teacher);
  }
}