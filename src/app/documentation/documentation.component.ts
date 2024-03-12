import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})
export class DocumentationComponent implements AfterViewInit {

  ngAfterViewInit() {
    window.onscroll = () => {
      var scrollPos = window.scrollY;
      var links = document.getElementsByClassName("content143")[0].getElementsByClassName("button86") as HTMLCollectionOf<HTMLElement>;
      for (var i = 0; i < links.length; i++) {
        var parentSection = document.getElementById((links[i].firstElementChild as HTMLAnchorElement).href.split("#")[1]) as HTMLElement;
        if (parentSection) {
          var sectionTop = parentSection.getBoundingClientRect().top + window.scrollY; // Calculate the position of the parent section
          var sectionBottom = parentSection.getBoundingClientRect().bottom + window.scrollY; // Calculate the bottom of the parent section
          if (sectionTop <= scrollPos && sectionBottom > scrollPos) {
            links[i].className = "button86 active";
          }
          else {
            links[i].className = "button86";
          }
        }
      }
    };
  }
}
