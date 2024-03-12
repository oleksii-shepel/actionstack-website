import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  hover: boolean = false;
  word = "ACTIONSTACK";
  letters: string[] = [];

  ngOnInit() {
    this.letters = this.word.split('');
  }
}
