import { Component, signal, OnDestroy } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectModal } from '../../components/project-modal/project-modal';
import { CardProject } from '../../components/card-project/card-project';
import proyectos from '../../data/proyectos.json';

interface ActiveProject {
  project: Project;
  index: number;
}

@Component({
  selector: 'app-projects',
  imports: [ProjectModal, CardProject],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnDestroy {
  activeProject = signal<ActiveProject | null>(null);

  readonly projects: Project[] = proyectos;

  open(project: Project, index: number): void {
    this.activeProject.set({ project, index });
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.activeProject.set(null);
    document.body.style.overflow = '';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
