import { Injectable } from '@angular/core';
import { LogTeacherDto } from '../../../models/dto/log-teacher.dto';

@Injectable({
  providedIn: 'root'
})
export class LogTeacherValidationService {
  newTeach?:LogTeacherDto
  constructor() { }

  isCompleted(steps: boolean[]) {
    const proInfo = sessionStorage.getItem('proInfo')
    if(proInfo) {
      const financeInfo = sessionStorage.getItem('financeInfo')
      if (financeInfo) {
        this.newTeach = {
          financeInfo: JSON.parse(financeInfo),
          proInfo: JSON.parse(proInfo)
        }
        return { steps: [true, true], newTeach: this.newTeach };
      } else {
          return { steps: [true, false] };
      }
    }
    return { steps: [false, false] }
  }
}
