import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injector, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { WINDOW } from '../window.injectiontoken';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(@Inject(WINDOW) private window: Window, private injector: Injector, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  download() {
    this.window.location.href = "https://npmjs.com/package/@actioncrew/actionstack";
  }

  tryDemo() {
    this.window.location.href = "https://github.com/actioncrew/actionstack";
  }

  learnMoreKeyFeatures() {
    const router = this.injector.get(Router);
    router.navigate(['/features'], { fragment: 'key-features' }).then(() => {
      if(isPlatformBrowser(this.platformId)) {
        let element = document.getElementById('key-features')!;
        element.scrollIntoView();
      }
    });
  }

  learnMoreAPIReference() {
    const router = this.injector.get(Router);
    router.navigate(['/documentation'], { fragment: 'api-reference' }).then(() => {
      if(isPlatformBrowser(this.platformId)) {
        let element = document.getElementById('api-reference')!;
        element.scrollIntoView();
      }
    });
  }

  learnMoreAdvancedTopics() {
    const router = this.injector.get(Router);
    router.navigate(['/documentation'], { fragment: 'advanced-topics' }).then(() => {
      if(isPlatformBrowser(this.platformId)) {
        let element = document.getElementById('advanced-topics')!;
        element.scrollIntoView();
      }
    });
  }

  learnMoreContributing() {
    const router = this.injector.get(Router);
    router.navigate(['/documentation'], { fragment: 'contributing' }).then(() => {
      if(isPlatformBrowser(this.platformId)) {
        let element = document.getElementById('contributing')!;
        element.scrollIntoView();
      }
    });
  }
}
