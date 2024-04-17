import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogUserService {
  checkEmail(email: EventTarget) : Observable<Object> {
    return this.http.post(`${environment.apiBaseUrl}/api/log-user/email-confirm`, email)
  }
  subscription?:Subscription

  constructor(private http:HttpClient) { }

  signIn(form:NgForm): any{
    return this.http.post(`${environment.apiBaseUrl}/api/log-user/in`, form.value)
  }

  signUp(form:NgForm): any{
    return this.http.post(`${environment.apiBaseUrl}/api/log-user/up`, form.value)
  }

  logSubscription(form:NgForm, length:number){
    try{
      if(length === 4){
        return this.signUp(form)
      }else if(length === 3){
        return this.signIn(form)
      }else{
        throw new Error('An error accured')
      }
    }catch(error: any){
      throw new Error(error)
    }
  }
}
