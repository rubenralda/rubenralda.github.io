import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects)
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills').then(m => m.Skills)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
