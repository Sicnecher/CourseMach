import { Injectable } from '@angular/core';
import { AuthHttpService } from '../http/auth/auth-http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  response?: boolean;

  constructor(private authHttpService:AuthHttpService, private router: Router, private location:Location) { }

  async loggedOrNot(){
    const token = sessionStorage.getItem('access_token');
    if (token) {
      this.authHttpService.verifyToken().subscribe({
        next: (response: boolean) => {
          this.response = response
        },
        error: (err) => {
          if(err instanceof HttpErrorResponse && err.status === 401){
            sessionStorage.setItem('errorAccess', 'true')
            this.router.navigateByUrl('/error/401')
            setTimeout(() => {
              sessionStorage.removeItem('errorAccess')
              this.location.back()
            }, 5000)
          }
        }
      })
      return this.response ? true : false
    }else{
      return true;
    }
  }
} 