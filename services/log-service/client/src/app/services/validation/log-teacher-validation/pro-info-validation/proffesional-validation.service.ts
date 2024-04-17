import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LogTeacherProffesionalDto } from '../../../../models/dto/log-teacher.dto';

@Injectable({
  providedIn: 'root'
})
export class ProValidationService {
  data?:LogTeacherProffesionalDto
  constructor() {
    this.data = {
      field: '',
      skills: [''],
      resume: '',
      payment_method: '',
      minimumPay: '5',
      maximumPay: '5'
    }
  }

  getForm(): FormGroup {
    const sessionData = sessionStorage.getItem('proInfo');
    console.log(sessionData)
    if (sessionData) this.data = JSON.parse(sessionData)
    return new FormGroup({
      field: new FormControl(this.data?.field, Validators.required),
      skills: new FormControl(this.data?.skills, Validators.required),
      resume: new FormControl(this.data?.resume, [Validators.required]),
      payment_method: new FormControl(this.data?.payment_method, Validators.required),
      minimumPay: new FormControl(this.data?.minimumPay),
      maximumPay: new FormControl(this.data?.maximumPay),
    });
  }

    getFormData( form : FormGroup ) : FormData {
      const formData = new FormData();
      formData.append('field', form.get('field')!.value);
      formData.append('skills', form.get('skills')!.value);
      formData.append('resume', form.get('resume')!.value);
      formData.append('payment_method', form.get('payment_method')!.value);
      formData.append('minimumPay', form.get('minimumPay')!.value);
      formData.append('maximumPay', form.get('maximumPay')!.value);
      return formData
  }
}
