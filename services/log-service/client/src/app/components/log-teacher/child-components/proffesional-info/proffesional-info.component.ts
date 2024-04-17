import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProValidationService } from '../../../../services/validation/log-teacher-validation/pro-info-validation/proffesional-validation.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-proffesional-info',
  standalone: true,
  templateUrl: './proffesional-info.component.html',
  styleUrls: ['./proffesional-info.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ProffesionalInfoComponent {
  disabled:boolean = true
  disablePrice:boolean = false
  @Output() complete = new EventEmitter<FormData>()
  form: FormGroup;

  constructor(private validationService:ProValidationService, private sanitizer: DomSanitizer) {
    this.form = this.validationService.getForm();

    this.form.valueChanges.subscribe(() => {
      if(this.form.valid) this.disabled = false
    })

    this.form.get('minimumPay')?.valueChanges.subscribe(value => {
      const maximumPayControl = this.form.get('maximumPay');
      if (maximumPayControl) if (maximumPayControl.value < value) {
        maximumPayControl.setValue(value);
      }
    });

    this.form.get('maximumPay')?.valueChanges.subscribe(value => {
      const minimumPayControl = this.form.get('minimumPay');
      if (minimumPayControl) if (minimumPayControl.value > value) {
        minimumPayControl.setValue(value);
      }
    });
  }

  isDisabled(checked:Boolean){
    if(checked){
      this.form.get('maximumPay')?.disable();
      this.form.get('minimumPay')?.disable();
      this.form.get('minimumPay')?.setValue(null);  
      this.form.get('maximumPay')?.setValue(null);
    }else{
      this.form.get('maximumPay')?.enable();
      this.form.get('minimumPay')?.enable();
      this.form.get('minimumPay')?.setValue(5);  
      this.form.get('maximumPay')?.setValue(5);
    }
  }

  onSubmit() {
    const formData = this.validationService.getFormData(this.form)
      this.complete.emit(formData);
  }
}
