import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Injector, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { asyncScheduler } from 'rxjs';
import { WINDOW } from '../window.injectiontoken';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})
export class DocumentationComponent implements AfterViewInit {
  trustedGistCode1!: SafeUrl;
  trustedGistCode2!: SafeUrl;
  trustedGistCode3!: SafeUrl;
  trustedGistCode4!: SafeUrl;
  trustedGistCode5!: SafeUrl;
  trustedGistCode6!: SafeUrl;

  constructor(private sanitizer: DomSanitizer, @Inject(WINDOW) private window: Window, private injector: Injector, @Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngAfterViewInit() {

    this.window.onscroll = () => {
      var scrollPos = window.scrollY;
      var links = document.getElementsByClassName("content143")[0].getElementsByClassName("button86") as HTMLCollectionOf<HTMLElement>;
      for (var i = 0; i < links.length; i++) {
        var parentSection = document.getElementById((links[i].firstElementChild as HTMLAnchorElement).href.split("#")[1]) as HTMLElement;
        if (parentSection) {
          var sectionTop = parentSection.getBoundingClientRect().top + this.window.scrollY; // Calculate the position of the parent section
          var sectionBottom = parentSection.getBoundingClientRect().bottom + this.window.scrollY; // Calculate the bottom of the parent section
          if (sectionTop <= scrollPos && sectionBottom > scrollPos) {
            links[i].className = "button86 active";
          }
          else {
            links[i].className = "button86";
          }
        }
      }
    };

    asyncScheduler.schedule(() => {
      const gistUrl1 = '<script src="https://gist.github.com/oleksii-shepel/436fa857f68a91c67b10128d30e535ba.js"></script>';
      const gistUrl2 = '<script src="https://gist.github.com/oleksii-shepel/e640b129da869fb89171e068fe734bb6.js"></script>';
      const gistUrl3 = '<script src="https://gist.github.com/oleksii-shepel/41d693d51232fd5595cc1653b904c660.js"></script>';
      const gistUrl4 = '<script src="https://gist.github.com/oleksii-shepel/9f9d797c33634f5d8d4f956f732779f1.js"></script>';
      const gistUrl5 = '<script src="https://gist.github.com/oleksii-shepel/b06723482bf320d2503a96f41dd8d976.js"></script>';
      const gistUrl6 = '<script src="https://gist.github.com/oleksii-shepel/87e5ad1f4718335b4e61fc82d2995150.js"></script>';


      this.trustedGistCode1 = this.sanitizer.bypassSecurityTrustHtml(gistUrl1);
      this.trustedGistCode2 = this.sanitizer.bypassSecurityTrustHtml(gistUrl2);
      this.trustedGistCode3 = this.sanitizer.bypassSecurityTrustHtml(gistUrl3);
      this.trustedGistCode4 = this.sanitizer.bypassSecurityTrustHtml(gistUrl4);
      this.trustedGistCode5 = this.sanitizer.bypassSecurityTrustHtml(gistUrl5);
      this.trustedGistCode6 = this.sanitizer.bypassSecurityTrustHtml(gistUrl6);
    });
  }

  adjustHeight(event: any) {
    if(isPlatformBrowser(this.platformId)) {
      event.target.style.height = event.target.contentWindow.document.body.scrollHeight + 'px';
    }
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
}
