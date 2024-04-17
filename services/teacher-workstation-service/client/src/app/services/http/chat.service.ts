import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChatsList } from '../../models/chats.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }

  getChats(): Observable<Chat[]>{
    return this.http.get<Chat[]>(`${environment.apiBaseUrl}/user/chats`);
  }
}
