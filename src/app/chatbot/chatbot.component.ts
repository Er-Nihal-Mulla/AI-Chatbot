import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userInput: string = '';
  messages: { sender: string, text: string }[] = [];
  data: string = '';

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.http.get('https://gist.githubusercontent.com/thewheat/bb67f632950c7feaf4b8a2f3febbd98a/raw/02feb16f6fac5edf8e6df7e287dbb08b53cc38c1/Test.txt', { responseType: 'text' }).subscribe(
      (data) => {
        console.log('File content:', data); // Debugging
        this.data = data;
      },
      (error) => {
        console.error('Error reading the file:', error);
      }
    );
  }

  sendMessage() {
    if (this.userInput.trim() === '') return;

    // Add user message to chat
    this.messages.push({ sender: 'user', text: this.userInput });

    // Get bot response
    const botResponse = this.getBotResponse(this.userInput);
    this.messages.push({ sender: 'bot', text: botResponse });

    // Clear input
    this.userInput = '';
  }

  getBotResponse(userInput: string): string {
    const lowerInput = userInput.toLowerCase().trim(); // Trim user input
    const lines = this.data.split('\n');

    console.log('User input:', lowerInput); // Debugging
    console.log('File content (lines):', lines); // Debugging

    for (const line of lines) {
      const trimmedLine = line.trim(); // Trim each line
      if (trimmedLine.toLowerCase().includes(lowerInput)) {
        console.log('Match found:', trimmedLine); // Debugging
        return trimmedLine;
      }
    }

    console.log('No match found'); // Debugging
    return "I'm sorry, I don't understand that.";
  }
}
