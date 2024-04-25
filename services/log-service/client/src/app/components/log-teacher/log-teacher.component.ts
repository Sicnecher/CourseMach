import { Component, OnInit, ViewChild } from '@angular/core';
import { ProffesionalInfoComponent } from './child-components/proffesional-info/proffesional-info.component';
import { FinanceInfoComponent } from './child-components/finance-info/finance-info.component';
import { LogTeacherDto, LogTeacherFinanceDto } from '../../models/dto/log-teacher.dto';
import { CommonModule } from '@angular/common';
import { LogTeacherService } from '../../services/http/log-service/log-teacher.service';
import { LogTeacherValidationService } from '../../services/validation/log-teacher-validation/log-teacher.validation.service';

@Component({
  selector: 'app-log-teacher',
  standalone: true,
  imports: [CommonModule, ProffesionalInfoComponent, FinanceInfoComponent],
  templateUrl: './log-teacher.component.html',
  styleUrls: ['./log-teacher.component.css']
})
export class LogTeacherComponent implements OnInit {
  resumeUrl?:string;
  steps: boolean[] = [false, false];
  newTeach?: LogTeacherDto;
  financaInfoDto?: LogTeacherFinanceDto;
  @ViewChild(ProffesionalInfoComponent) proInfoComponent?: ProffesionalInfoComponent;
  @ViewChild(FinanceInfoComponent) financeIInfo?: FinanceInfoComponent;
  constructor(private logTeacherService:LogTeacherService, private logTeacherValidation: LogTeacherValidationService) { }

  ngOnInit(): void {
    try{
      const { steps, newTeach } = this.logTeacherValidation.isCompleted(this.steps)
      this.steps = steps
      this.newTeach = newTeach
    }catch(err){
      throw new Error('Method not implemented.');
    }
  }

  goBack(step: number){
      this.steps[step] = false
  }

  handleCompleted(form: FormData ) {
      if (form.get('bank')) {
        const financeInfoDto = {
          field: form.get('field') as string,
          skills: form.getAll('skills') as string[],
          resume: form.get('resume') as string,
          payment_method: form.get('payment_method') as string,
          minimumPay: form.get('minimumPay') as string,
          maximumPay: form.get('maximumPay') as string
        }
        sessionStorage.setItem('financeInfo', JSON.stringify(financeInfoDto))
      } else if (form.get('field')){
        const proInfoDto = {
          field: form.get('field') as string,
          skills: form.getAll('skills') as string[],
          resume: form.get('resume') as string,
          payment_method: form.get('payment_method') as string,
          minimumPay: form.get('minimumPay') as string,
          maximumPay: form.get('maximumPay') as string
        };
        sessionStorage.setItem('proInfo', JSON.stringify(proInfoDto))
    }
    const { steps, newTeach } = this.logTeacherValidation.isCompleted(this.steps)
    this.steps = steps
    this.newTeach = newTeach
    sessionStorage.setItem('financeInfo', JSON.stringify(this.newTeach))
  }

  onSubmit(){
    if(this.newTeach){
      this.logTeacherService.createTeacher(this.newTeach).subscribe({
        next: (response) => {
          console.log(response)
        }
      })
    }
  }
}
