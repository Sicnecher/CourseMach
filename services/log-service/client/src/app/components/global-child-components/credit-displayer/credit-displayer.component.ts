import { Component, OnInit } from '@angular/core';
import { CreditListService } from '../../../services/http/credit/credit-list.service';
import { CretditCardDto } from '../../../models/dto/credit-card.dto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-credit-displayer',
  standalone: true,
  imports: [],
  templateUrl: './credit-displayer.component.html',
  styleUrl: './credit-displayer.component.css'
})
export class CreditDisplayerComponent implements OnInit{
  cardList?:CretditCardDto[];
  subscription?:Subscription;
  constructor(private creditService:CreditListService) { }

  ngOnInit(): void {
    this.subscription = this.creditService.getCreditList().subscribe({
      next: (response: any) => {
        this.cardList = response.list
      },
      error: (error) => {
        console.error(error)
        throw new Error('Method not implemented.');
      }
    })
  }

  cardImgUrl(company: string){
    return `${company}.img.jpg`
  }

  onClick(){

  }
}
