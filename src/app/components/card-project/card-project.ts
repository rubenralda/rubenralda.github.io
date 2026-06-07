import { Component, input, Input, output, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-card-project',
  imports: [],
  templateUrl: './card-project.html',
  styleUrl: './card-project.scss',
})
export class CardProject {

  projects = input.required<Project[]>();
  open     = output<{ project: Project; index: number }>();

  onCardClick(project: Project, index: number): void {
    this.open.emit({ project, index });
  }
}
