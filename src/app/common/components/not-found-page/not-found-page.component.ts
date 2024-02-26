import { Component } from '@angular/core';
import { MessageTextComponent } from '../message-text/message-text.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [
    MessageTextComponent
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {
  public message: string = "Nada por aqui";

  constructor(
    private activeRoute: ActivatedRoute,
  ) {
    const msg= this.activeRoute.snapshot.paramMap.get('message');

    if (msg)
      this.message = msg;
  }
}
