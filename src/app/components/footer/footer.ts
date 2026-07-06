import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  theme = input<'dark' | 'light'>('dark');

  readonly year = new Date().getFullYear();

  toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
