import { Component, ElementRef, afterNextRender, viewChild } from '@angular/core';
import { DecorShapes } from '../../components/decor-shapes/decor-shapes';
import skills from '../../data/skills.json';

interface Skill {
  name: string;
  category: string;
  iconClass: string;
  listed?: boolean;
}

interface CategoryMeta {
  name: string;
  color: string;
  description: string;
}

interface SkillCategory extends CategoryMeta {
  id: string;
  skills: Skill[];
}

const data = skills as unknown as {
  categories: Record<string, CategoryMeta>;
  skills: Record<string, Skill>;
};

@Component({
  selector: 'app-skills',
  imports: [DecorShapes],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  /** Grupos para el grid: cada categoría con sus skills visibles (listed:false → solo catálogo). */
  readonly categories: SkillCategory[] = Object.entries(data.categories)
    .map(([id, cat]) => ({
      id,
      ...cat,
      skills: Object.values(data.skills).filter((s) => s.category === id && s.listed !== false)
    }))
    .filter((cat) => cat.skills.length > 0);

  private readonly grid = viewChild<ElementRef<HTMLElement>>('grid');

  constructor() {
    afterNextRender(() => {
      const el = this.grid()?.nativeElement;
      if (!el) return;

      const relayout = () => this.layoutMasonry(el);
      relayout();

      // Recalcula al cambiar el tamaño del grid o de las tarjetas (incl. carga de fuentes/iconos)
      const observer = new ResizeObserver(relayout);
      observer.observe(el);
      for (const card of Array.from(el.children)) observer.observe(card);
    });
  }

  /** Asigna a cada tarjeta el nº de filas finas que ocupa según su altura real → masonry. */
  private layoutMasonry(grid: HTMLElement): void {
    const styles = getComputedStyle(grid);
    const rowGap = parseFloat(styles.rowGap) || 0;
    const rowUnit = parseFloat(styles.gridAutoRows) || 1;

    for (const card of Array.from(grid.children) as HTMLElement[]) {
      card.style.gridRowEnd = 'auto';
      const height = card.getBoundingClientRect().height;
      const span = Math.max(1, Math.ceil((height + rowGap) / (rowUnit + rowGap)));
      card.style.gridRowEnd = `span ${span}`;
    }
  }
}
