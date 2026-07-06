export type ProjectGroup = 'laboral' | 'personal' | 'academico';

export interface Project {
  id: string;
  group: ProjectGroup;
  featured?: boolean;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  role?: string;
  period?: string;
  /** Estado opcional (p. ej. "Terminado", "En desarrollo"). Los empleos pueden omitirlo. */
  status?: string;
  highlights?: string[];
  /** Muestra la lista de proyectos universitarios (proyectosU.json) en el modal. */
  uniProjects?: boolean;
  tech: string[];
  gradient: string;
  image?: string;
  comingSoon?: boolean;
  repoUrl?: string;
  demoUrl?: string;
  /** Enlaces adicionales etiquetados (p. ej. un repo por semestre). */
  links?: { label: string; url: string }[];
}
