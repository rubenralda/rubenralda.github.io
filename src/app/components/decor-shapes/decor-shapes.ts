import { Component } from '@angular/core';

/** Cluster decorativo (blob + sol + chispa) — motivo de marca reutilizable. */
@Component({
  selector: 'app-decor-shapes',
  template: `
    <span class="blob"></span>
    <span class="sun"></span>
    <span class="spark"></span>
  `,
  styleUrl: './decor-shapes.scss',
  host: {
    class: 'decor',
    'aria-hidden': 'true'
  }
})
export class DecorShapes {}
