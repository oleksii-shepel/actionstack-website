import { Component, ElementRef, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  hover: boolean = false;
  collapsible: boolean = false;

  constructor(private elRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    window.onload = () => {
      this.hover = true;
    };

    document.body.addEventListener('click', (event) => {
      let element = event.target as HTMLElement;
      if(element.parentElement?.classList.contains('link-one')) {
        this.collapsible = false;
      }
    });
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

  check(e: any) {
    this.collapsible = !this.collapsible;
  }
}
