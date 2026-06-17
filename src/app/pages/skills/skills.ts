import { Component } from '@angular/core';
import skills from '../../data/skills.json';


interface Skill {
  name: string;
  iconClass: string;
}

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  readonly categories: SkillCategory[] = skills;
}
