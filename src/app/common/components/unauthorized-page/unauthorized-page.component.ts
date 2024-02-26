import { Component } from '@angular/core';
import { MessageTextComponent } from '../message-text/message-text.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unauthorized-page',
  standalone: true,
  imports: [
    MessageTextComponent
  ],
  templateUrl: './unauthorized-page.component.html',
  styleUrl: './unauthorized-page.component.css'
})
export class UnauthorizedPageComponent {
  public message: string = "Error de Autorización";

  constructor(
    private activeRoute: ActivatedRoute,
  ) {
    const msg= this.activeRoute.snapshot.paramMap.get('message');

    if (msg)
      this.message = msg;
  }
}
