import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TooltipComponent } from '../components/tooltip.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TooltipComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  hover: boolean = false;
  word = "ACTIONSTACK";
  letters: string[] = [];
  icons: ({
    showTooltip: boolean;
    imgsrc: string,
    links: {text: string; url: string; }[],
  })[] = [];

  ngOnInit() {
    this.icons = [
      {
        showTooltip: false,
        imgsrc: '../../assets/npm_logo.png',
        links: [
          { text: 'Example Link 1', url: 'https://www.example.com' },
          { text: 'Example Link 2', url: 'https://www.angular.io' },
        ]
      },
      {
        showTooltip: false,
        imgsrc: '../../assets/github_logo.png',
        links: [
          { text: 'Example Link 3', url: 'https://www.google.com' },
          { text: 'Example Link 4', url: 'https://www.github.com' },
        ]
      },
      {
        showTooltip: false,
        imgsrc: '../../assets/angular_logo.png',
        links: [
          { text: 'Example Link 3', url: 'https://www.google.com' },
          { text: 'Example Link 4', url: 'https://www.github.com' },
        ]
      },
      {
        showTooltip: false,
        imgsrc: '../../assets/linkedin_logo.png',
        links: [
          { text: 'Example Link 3', url: 'https://www.google.com' },
          { text: 'Example Link 4', url: 'https://www.github.com' },
        ]
      },
      {
        showTooltip: false,
        imgsrc: '../../assets/medium_logo.png',
        links: [
          { text: 'Example Link 3', url: 'https://www.google.com' },
          { text: 'Example Link 4', url: 'https://www.github.com' },
        ]
      },
    ];
    this.letters = this.word.split('');
  }
}
