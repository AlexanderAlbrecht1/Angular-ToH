import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
