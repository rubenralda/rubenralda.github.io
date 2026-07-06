import { Component } from '@angular/core';
import data from '../../data/proyectosU.json';

interface UniProject {
  year: string;
  title: string;
  descripcion: string;
  repositorio: string;
  tags: string[];
  curso: string;
}

/** Lista minimalista (casi solo texto) de los proyectos universitarios. */
@Component({
  selector: 'app-uni-projects',
  template: `
    <ul class="uni">
      @for (p of projects; track p.repositorio) {
        <li class="uni__item">
          <a class="uni__link" [href]="p.repositorio" target="_blank" rel="noopener noreferrer">
            <span class="uni__title">{{ p.title }}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                 stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <span class="uni__meta">{{ p.curso }} · {{ p.year }}</span>
          <span class="uni__tags">{{ p.tags.join(' · ') }}</span>
        </li>
      }
    </ul>
  `,
  styleUrl: './uni-projects.scss'
})
export class UniProjects {
  readonly projects = data as UniProject[];
}
