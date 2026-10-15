import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from './theme.service';

@Component({
  selector: 'jc-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <div class="page-gutter header-inner">
        <a class="wordmark" routerLink="/" aria-label="Jackeline Costa — início">Jackeline Costa<span aria-hidden="true">®</span></a>
        <nav class="main-nav" id="main-navigation" aria-label="Navegação principal" [class.is-open]="menuOpen()">
          <a routerLink="/" fragment="projetos" (click)="closeMenu()">Projetos</a>
          <a routerLink="/sobre" routerLinkActive="is-active" ariaCurrentWhenActive="page" (click)="closeMenu()">Sobre</a>
          <a routerLink="/" fragment="contato" (click)="closeMenu()">Contato</a>
        </nav>
        <div class="header-actions">
          <button class="theme-toggle" type="button" (click)="theme.toggle()"
            [attr.aria-label]="theme.current() === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'"
            [attr.aria-pressed]="theme.current() === 'light'">
            <span class="theme-symbol" aria-hidden="true">{{ theme.current() === 'dark' ? '☼' : '◐' }}</span>
            <span class="theme-label">{{ theme.current() === 'dark' ? 'Claro' : 'Escuro' }}</span>
          </button>
          <button class="menu-toggle" type="button" aria-controls="main-navigation"
            [attr.aria-expanded]="menuOpen()" [attr.aria-label]="menuOpen() ? 'Fechar menu' : 'Abrir menu'"
            (click)="menuOpen.set(!menuOpen())">
            <span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly theme = inject(ThemeService);
  readonly menuOpen = signal(false);

  closeMenu(): void { this.menuOpen.set(false); }

  @HostListener('document:keydown.escape')
  onEscape(): void { this.closeMenu(); }
}
