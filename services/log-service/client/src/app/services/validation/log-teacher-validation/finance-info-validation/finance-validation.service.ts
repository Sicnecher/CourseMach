import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LogTeacherFinanceDto } from '../../../../models/dto/log-teacher.dto';

@Injectable({
  providedIn: 'root'
})
export class FinValidationService {
  data?:LogTeacherFinanceDto
  constructor() {
    this.data = {
      country: '',
      bank: '',
      branch: '',
      account: '',
      bankAuth: '',
      nationalId: ''
    }
  }

  getForm(): FormGroup {
    const sessionData = sessionStorage.getItem('financeInfo');
    if(sessionData) this.data = JSON.parse(sessionData)
    return new FormGroup({
      country: new FormControl(this.data?.country, Validators.required),
      bank: new FormControl(this.data?.bank, Validators.required),
      branch: new FormControl(this.data?.branch, Validators.required),
      account: new FormControl(this.data?.account, Validators.required),
      bankAuth: new FormControl(this.data?.bankAuth, [Validators.required]),
      nationalId: new FormControl(this.data?.nationalId, Validators.required)
    });
  }

  getFormData( form : FormGroup ) : FormData {
    const formData = new FormData();
    formData.append('country', form.get('country')!.value);
    formData.append('bank', form.get('bank')!.value);
    formData.append('branch', form.get('branch')!.value);
    formData.append('account', form.get('account')!.value);
    formData.append('bankAuth', form.get('bankAuth')!.value);
    formData.append('nationalId', form.get('nationalId')!.value);
    return formData
}
}
