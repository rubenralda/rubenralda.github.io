import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  host: {
    '(window:scroll)': 'onScroll()'
  }
})
export class Nav {
  scrolled = signal(false);

  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
