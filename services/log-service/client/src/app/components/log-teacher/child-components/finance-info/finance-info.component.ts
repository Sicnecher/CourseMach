import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LogTeacherFinanceDto } from '../../../../models/dto/log-teacher.dto';
import { FinValidationService } from '../../../../services/validation/log-teacher-validation/finance-info-validation/finance-validation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-finance-info',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './finance-info.component.html',
  styleUrl: './finance-info.component.css'
})
export class FinanceInfoComponent implements OnInit {
  @Output() complete = new EventEmitter<FormData>()
  @Output() goBack = new EventEmitter<number>()
  form:FormGroup;
  disabled:Boolean = true
  subscription?:Subscription

  constructor(private validationService:FinValidationService) {
    this.form = this.validationService.getForm();

    this.form.valueChanges.subscribe(() => {
      if(this.form.valid) this.disabled = false
    })
  }
  ngOnInit(): void {
    // this.validationService.savedValues()
  }

  onSubmit(){
    const formData = this.validationService.getFormData(this.form)
    this.complete.emit(formData);
  }
}
