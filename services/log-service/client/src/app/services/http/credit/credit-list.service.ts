import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditListService {

  constructor(private http: HttpClient) { }

  getCreditList(){
    return this.http.get(`${environment.apiBaseUrl}/api/user/payment/credit-list`);
  }
}
