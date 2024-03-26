import { Component, Inject, Injector, PLATFORM_ID } from '@angular/core';
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
    this.window.location.href = "https://npmjs.com/package/@actioncrew/actionstack";
  }

  tryDemo() {
    this.window.location.href = "https://github.com/actioncrew/actionstack";
  }
}
