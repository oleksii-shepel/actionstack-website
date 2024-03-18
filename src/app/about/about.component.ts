import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  donate(e: Event) {
    window.open('https://www.paypal.com/donate/?hosted_button_id=A989PL5DBXDSU', 'blank');
  }
}
