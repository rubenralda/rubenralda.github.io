import { Component } from '@angular/core';

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
  readonly categories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Front-End Development',
      description: 'Construyendo interfaces modernas, responsivas y accesibles con las tecnologías más relevantes del ecosistema web.',
      skills: [
        { name: 'Angular',     iconClass: 'devicon-angular-plain colored' },
        { name: 'Vue 3',       iconClass: 'devicon-vuejs-plain colored' },
        { name: 'React',       iconClass: 'devicon-react-original colored' },
        { name: 'TypeScript',  iconClass: 'devicon-typescript-plain colored' },
        { name: 'HTML5',       iconClass: 'devicon-html5-plain colored' },
        { name: 'CSS3',        iconClass: 'devicon-css3-plain colored' },
      ]
    },
    {
      id: 'styling',
      name: 'Styling & Design',
      description: 'Sistemas de diseño visual y estilos con herramientas modernas para crear interfaces atractivas y consistentes.',
      skills: [
        { name: 'Sass/SCSS',   iconClass: 'devicon-sass-original colored' },
        { name: 'Tailwind',    iconClass: 'devicon-tailwindcss-plain colored' },
        { name: 'Bootstrap',   iconClass: 'devicon-bootstrap-plain colored' },
        { name: 'Figma',       iconClass: 'devicon-figma-plain colored' },
      ]
    },
    {
      id: 'backend',
      name: 'Back-End Development',
      description: 'APIs robustas, servicios y lógica de negocio con múltiples tecnologías del lado del servidor.',
      skills: [
        { name: 'Java',        iconClass: 'devicon-java-plain colored' },
        { name: 'Spring Boot', iconClass: 'devicon-spring-plain colored' },
        { name: 'Node.js',     iconClass: 'devicon-nodejs-plain colored' },
        { name: 'C# / .NET',   iconClass: 'devicon-csharp-plain colored' },
      ]
    },
    {
      id: 'databases',
      name: 'Database Management',
      description: 'Diseño y administración de bases de datos relacionales y NoSQL para aplicaciones escalables.',
      skills: [
        { name: 'MySQL',       iconClass: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL',  iconClass: 'devicon-postgresql-plain colored' },
        { name: 'MongoDB',     iconClass: 'devicon-mongodb-plain colored' },
        { name: 'Firebase',    iconClass: 'devicon-firebase-plain colored' },
      ]
    },
    {
      id: 'devops',
      name: 'DevOps & Herramientas',
      description: 'Control de versiones, integración continua y despliegue de aplicaciones en entornos cloud.',
      skills: [
        { name: 'Git',         iconClass: 'devicon-git-plain colored' },
        { name: 'GitHub',      iconClass: 'devicon-github-original' },
        { name: 'Docker',      iconClass: 'devicon-docker-plain colored' },
        { name: 'Linux',       iconClass: 'devicon-linux-plain' },
      ]
    },
    {
      id: 'cs',
      name: 'Fundamentos CS',
      description: 'Base teórica sólida en ciencias de la computación aplicada a la resolución eficiente de problemas.',
      skills: [
        { name: 'Algoritmos',  iconClass: 'devicon-python-plain colored' },
        { name: 'POO',         iconClass: 'devicon-java-plain colored' },
        { name: 'Redes',       iconClass: 'devicon-ubuntu-plain colored' },
        { name: 'Sistemas Op.',iconClass: 'devicon-linux-plain' },
      ]
    }
  ];
}
