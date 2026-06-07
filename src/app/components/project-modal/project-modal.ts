import { Component, input, output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-modal',
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

  get indexLabel(): string {
    return (this.index() + 1).toString().padStart(2, '0');
  }
}
