import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injector, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { WINDOW } from '../window.injectiontoken';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  constructor(@Inject(WINDOW) private window: Window, private injector: Injector, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  download() {
    this.window.location.href = "https://github.com/actioncrew/actionstack/archive/refs/heads/master.zip";
  }

  tryDemo() {
    this.window.location.href = "https://github.com/actioncrew/actionstack";
  }

  learnMoreDocumentation() {
    const router = this.injector.get(Router);
    router.navigate(['/documentation'], { fragment: 'introduction' }).then(() => {
      if(isPlatformBrowser(this.platformId)) {
        let element = document.getElementById('introduction')!;
        element.scrollIntoView();
      }
    });
  }

}
