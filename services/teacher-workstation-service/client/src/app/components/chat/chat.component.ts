import { Component } from '@angular/core';
import { ChatService } from '../../services/http/chat.service';
import { Chat } from '../../models/chats.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  chats?: Chat[]
  contacts?:Contact
  constructor(private chatService: ChatService) { }

  getUserChats(){
    this.chatService.getChats().subscribe({
      next: (response) => {
        this.chats = response
      },
      error: (error) => {

      }
    })
  }
}
