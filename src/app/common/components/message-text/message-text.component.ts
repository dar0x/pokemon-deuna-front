import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-message-text',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './message-text.component.html',
  styleUrl: './message-text.component.css'
})
export class MessageTextComponent {
  @Input() message: string;
  @Input() title: string;
}
