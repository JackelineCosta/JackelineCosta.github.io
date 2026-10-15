import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly current = signal<Theme>(this.document.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark');

  toggle(): void {
    const next: Theme = this.current() === 'dark' ? 'light' : 'dark';
    this.current.set(next);
    this.document.documentElement.dataset['theme'] = next;
    this.document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#101110' : '#f3f1eb');
    try { localStorage.setItem('portfolio-theme', next); } catch (_) { /* Storage may be unavailable. */ }
  }
}
