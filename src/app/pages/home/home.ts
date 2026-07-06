import { Component, DestroyRef, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import proyectos from '../../data/proyectos.json';
import { CardProject } from '../../components/card-project/card-project';
import { DecorShapes } from '../../components/decor-shapes/decor-shapes';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CardProject, DecorShapes],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private router = inject(Router);

  readonly projects: Project[] = (proyectos as unknown as Project[]).filter((p) => p.featured);

  /** Roles del carrusel — añade o quita palabras aquí, sin tocar el CSS. */
  readonly roles = ['Cloud', 'Backend', 'Frontend', 'Devops', 'BD'];
  readonly roleIndex = signal(0);
  readonly currentRole = computed(() => this.roles[this.roleIndex()]);

  private roleEl = viewChild<ElementRef<HTMLElement>>('roleEl');

  constructor() {
    const canAnimate =
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (canAnimate && this.roles.length > 1) {
      const id = window.setInterval(
        () => this.roleIndex.update((i) => (i + 1) % this.roles.length),
        2400
      );
      inject(DestroyRef).onDestroy(() => window.clearInterval(id));

      // Anima cada cambio de palabra (la WAA reinicia siempre, sin depender del DOM)
      effect(() => {
        this.roleIndex();
        this.roleEl()?.nativeElement.animate(
          [
            { transform: 'translateY(100%)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
          ],
          { duration: 450, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
        );
      });
    }
  }

  openModal(event: { project: Project; index: number }): void {
    if (event.project.comingSoon) return;
    this.router.navigate(['/projects'], { queryParams: { open: event.project.id } });
  }
}
