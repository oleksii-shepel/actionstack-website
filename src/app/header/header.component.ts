import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  hover: boolean = true;

  constructor(private elRef: ElementRef<HTMLElement>) {

  }

  mouseEnter() {
    this.hover = false;
    asyncScheduler.schedule(() => {
      this.hover = true;
    })
  }

  mouseLeave() {
    this.hover = false;
  }
}
