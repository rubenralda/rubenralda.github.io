import { Component, input, output } from '@angular/core';
import { Project } from '../../models/project.model';
import { UniProjects } from '../uni-projects/uni-projects';
import skillsData from '../../data/skills.json';

interface Skill {
  name: string;
  category: string;
  iconClass: string;
}

interface CategoryMeta {
  name: string;
  color: string;
}

const data = skillsData as unknown as {
  categories: Record<string, CategoryMeta>;
  skills: Record<string, Skill>;
};

@Component({
  selector: 'app-project-modal',
  imports: [UniProjects],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
  host: {
    '(document:keydown.escape)': 'closed.emit()'
  }
})
export class ProjectModal {
  project = input.required<Project>();
  index   = input.required<number>();
  closed  = output<void>();

  /** Diccionarios para resolver cada clave del stack en el template (lookup O(1)). */
  readonly skills = data.skills;
  readonly categories = data.categories;

  get indexLabel(): string {
    return (this.index() + 1).toString().padStart(2, '0');
  }

  /** Punto ámbar si el estado indica algo en curso; verde en otro caso. */
  get statusInProgress(): boolean {
    return /desarrollo|curso|progreso/i.test(this.project().status ?? '');
  }
}
