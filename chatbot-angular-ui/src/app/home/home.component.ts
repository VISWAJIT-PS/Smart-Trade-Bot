import { Component, ElementRef, ViewChild } from '@angular/core';
import { BotMessageComponent } from '../message/bot-message/bot-message.component';
import { UserMessageComponent } from '../message/user-message/user-message.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('mainContentArea') mainContentArea!: ElementRef;

  sendMessage(): void {
    const userMessage = this.messageInput.nativeElement.value.trim();
    if (userMessage !== '') {
      this.addUserMessage(userMessage);
      // Simulate bot response (Replace this with your actual bot logic)
      setTimeout(() => {
        this.addBotMessage("Bot: Thank you for your message. I am a simple bot.");
      }, 1000);
    }
    // Clear the input field
    this.messageInput.nativeElement.value = '';
  }
  addUserMessage(message: string): void {
    const messageElement = document.createElement('div');
    messageElement.classList.add( 'rounded-lg', 'px-4', 'py-2', 'self-end', 'mt-2');
    messageElement.textContent = message;
    this.mainContentArea.nativeElement.appendChild(messageElement);
  }

  addBotMessage(message: string): void {
    const messageElement = document.createElement('div');
    messageElement.classList.add('bg-secondary','rounded-lg', 'px-4', 'py-2', 'self-start', 'mt-2');
    messageElement.textContent = message;
    this.mainContentArea.nativeElement.appendChild(messageElement);
  }
}
