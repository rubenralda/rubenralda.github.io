import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import proyectos from '../../data/proyectos.json';
import { CardProject } from '../../components/card-project/card-project';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CardProject],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
    
  readonly projects: Project[] = proyectos.slice(0, 4);

}
