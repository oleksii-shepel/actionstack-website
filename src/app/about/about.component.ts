import { Component, Inject } from '@angular/core';
import { WINDOW } from '../window.injectiontoken';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(@Inject(WINDOW) private window: Window) {

  }

  donate(e: Event) {
    this.window.open('https://www.paypal.com/donate/?hosted_button_id=A989PL5DBXDSU', 'blank');
  }
}
