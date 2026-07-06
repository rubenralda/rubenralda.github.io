import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

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
  theme = inject(ThemeService);

  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
