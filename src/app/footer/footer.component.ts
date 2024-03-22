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
          { text: 'npm package', url: 'https://www.npmjs.com/package/@actioncrew/actionstack' },
        ]
      },
      {
        showTooltip: false,
        imgsrc: '../../assets/github_logo.png',
        links: [
          { text: 'repository', url: 'https://github.com/actioncrew/actionstack' },
          { text: 'sample app', url: 'https://github.com/actioncrew/actionstack/tree/master/projects/app' },
          { text: 'gists', url: 'https://gist.github.com/oleksii-shepel' },
        ]
      },
      {
        showTooltip: false,
        imgsrc: '../../assets/angular_logo.png',
        links: [
          { text: 'angular blog', url: 'https://blog.angular.io/' },
          { text: 'angular articles', url: 'https://angularindepth.com/' },
        ]
      },
      {
        showTooltip: false,
        imgsrc: '../../assets/linkedin_logo.png',
        links: [
        ]
      },
      {
        showTooltip: false,
        imgsrc: '../../assets/medium_logo.png',
        links: [
        ]
      },
    ];
    this.letters = this.word.split('');
  }
}
