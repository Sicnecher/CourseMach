import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LogUserService } from '../../services/http/log-service/log-user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-log-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './log-user.component.html',
  styleUrl: './log-user.component.css'
})
export class LogUserComponent implements OnInit{
  formState: string = 'container';
  subscription?:Subscription

  constructor (
    private logUserService:LogUserService,
    private router:Router,
    private elementRef: ElementRef,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      const p = param['param']
      p === 'in' ? this.formState = 'container' : this.formState = 'container active'
    })
  }

  onEmailChange(event: KeyboardEvent) {
    if(event.target){
      this.logUserService.checkEmail(event.target).subscribe({
        next: (response) => {
          const element = this.elementRef.nativeElement.querySelector('.email_unavalibile');
          element.style.display = response ? 'none' : 'block'
        },
        error: (error) => {
          throw new Error(error)
        }
      })
    }
  }
  onpasswordConfirmChange(form:NgForm) { }

  submit(form:NgForm){
  if(form.valid){
    this.logUserService.logSubscription(form, Object.values(form.value).length).subscribe({
      next: (response: any) => {
      sessionStorage.setItem('access_token', response.access_token)
      this.router.navigateByUrl('/')
    },
    error: (error: HttpErrorResponse) => {
      if(error instanceof HttpErrorResponse && error.status === 401){
        const element = this.elementRef.nativeElement.querySelector('.in_error');
        if(element) element.style.display = 'block'
      }
    }
  })
}
}

  setState(ev:MouseEvent){
    ev.target instanceof HTMLElement &&
    ev.target.id === 'login' ? this.formState = 'container' : this.formState = 'container active'
  }
}
