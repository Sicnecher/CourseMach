import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router:Router) { }
  onClick(param: string){
    const queryParams:any = {
      status: param
    }
    const navigationExtras:NavigationExtras = {
      queryParams
    }
    this.router.navigateByUrl('/sign', navigationExtras)
  }
}
