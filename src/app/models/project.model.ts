export interface Project {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  repoUrl?: string;
  demoUrl?: string;
}
