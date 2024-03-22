// tooltip.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="tooltip">
      <a *ngFor="let link of links" [href]="link.url" target="_blank">{{link.text}}</a>
    </div>
  `,
  styles: `
    .tooltip {
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* ... other styles */
      background-color: transparent; /* No background color */
      opacity: 0.7; /* Set a slight opacity for visibility */
      visibility: visible; /* Initially visible */
    }

    .tooltip a {
      color: inherit; /* Inherit color from tooltip */
      text-decoration: none; /* Remove underline */
      display: block; /* Each link takes up a full line */
      padding: 5px;
    }

    .tooltip a:hover {
      background-color: aliceblue;
      color: var(--brand-color-red); /* Highlight on link hover */
    }
  `,
  imports: [CommonModule],
  standalone: true
})
export class TooltipComponent {
  @Input() links!: { text: string, url: string }[];
}
