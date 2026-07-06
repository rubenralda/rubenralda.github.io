import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectGroup } from '../../models/project.model';
import { ProjectModal } from '../../components/project-modal/project-modal';
import { CardProject } from '../../components/card-project/card-project';
import { DecorShapes } from '../../components/decor-shapes/decor-shapes';
import proyectos from '../../data/proyectos.json';

interface ActiveProject {
  project: Project;
  index: number;
}

interface Group {
  id: ProjectGroup;
  name: string;
  accent: string;
  items: Project[];
}

@Component({
  selector: 'app-projects',
  imports: [ProjectModal, CardProject, DecorShapes],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);

  activeProject = signal<ActiveProject | null>(null);

  readonly projects: Project[] = proyectos as unknown as Project[];

  /** Grupos en orden de impacto: laboral → personales → académico. */
  readonly groups: Group[] = [
    { id: 'laboral',   name: 'Experiencia laboral',    accent: '#0891b2', items: this.inGroup('laboral') },
    { id: 'personal',  name: 'Proyectos personales',   accent: '#4f46e5', items: this.inGroup('personal') },
    { id: 'academico', name: 'Experiencia académica',  accent: '#059669', items: this.inGroup('academico') }
  ];

  /** Proyectos aún no terminados — se muestran discretos al final. */
  readonly upcoming: Project[] = this.projects.filter(p => p.comingSoon);

  private inGroup(group: ProjectGroup): Project[] {
    return this.projects.filter(p => p.group === group && !p.comingSoon);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('open');
    if (id) {
      const project = this.projects.find(p => p.id === id);
      if (project) this.open(project);
    }
  }

  open(project: Project): void {
    const index = this.projects.findIndex(p => p.id === project.id);
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
