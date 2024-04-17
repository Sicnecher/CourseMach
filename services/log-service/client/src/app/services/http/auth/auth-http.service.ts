import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(private http: HttpClient) { }

  verifyToken(): Observable<boolean>{
    return this.http.get<boolean>(`${environment.apiBaseUrl}/api/jwt/validation`)
  }
}
