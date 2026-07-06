import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly KEY = 'rr-theme';

  theme = signal<'dark' | 'light'>('dark');

  constructor() {
    const saved = localStorage.getItem(this.KEY) as 'dark' | 'light' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial: 'dark' | 'light' = saved ?? (prefersDark ? 'dark' : 'light');
    this.apply(initial);
  }

  toggle(): void {
    const next: 'dark' | 'light' = this.theme() === 'dark' ? 'light' : 'dark';
    this.apply(next);
    localStorage.setItem(this.KEY, next);
  }

  private apply(t: 'dark' | 'light'): void {
    this.theme.set(t);
    document.documentElement.setAttribute('data-theme', t);
  }
}
