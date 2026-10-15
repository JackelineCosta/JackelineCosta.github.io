import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from './header.component';
import { CaseContent, cases } from './case-content';

@Component({
  selector: 'jc-project',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  template: `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <jc-header />
    <main id="conteudo" class="case-page">
      @if (caseData(); as content) {
        <article>
          <header class="case-opening page-gutter" [class.case-opening-document]="content.documentPages.length > 0">
            <div class="case-topline">
              <a routerLink="/" fragment="projetos">Voltar aos projetos</a>
              <span>Projeto / {{ projectNumber() }}</span>
            </div>
            <div class="case-heading">
              <p class="case-category">{{ content.project.categoriaLabel }} @if (content.project.ano) { / {{ content.project.ano }} }</p>
              <h1>{{ content.project.titulo }}</h1>
              @if (!content.project.pdf && content.project.descricao) { <p class="case-deck">{{ content.project.descricao }}</p> }
            </div>
          </header>

          @if (content.documentPages.length > 0) {
            <section class="case-document page-gutter" aria-label="Apresentação completa do projeto">
              @if (content.project.showCoverBeforePdf) {
                <figure class="case-document-cover">
                  <img [src]="'/' + content.project.imagens[0].src" [alt]="content.project.imagens[0].alt" fetchpriority="high">
                </figure>
              }
              <div class="case-document-pages">
                @for (page of content.documentPages; track page.src; let index = $index) {
                  <figure class="case-document-page">
                    <img [src]="'/' + page.src" [alt]="'Página ' + (index + 1) + ' de ' + content.documentPages.length + ' da apresentação original de ' + content.project.titulo" [attr.fetchpriority]="index === 0 ? 'high' : null" [attr.loading]="index === 0 ? 'eager' : 'lazy'">
                  </figure>
                }
              </div>
            </section>
          } @else {
            <div class="case-body case-body-undocumented page-gutter">
              <figure class="case-cover">
                <img [src]="'/' + content.project.imagens[0].src" [alt]="content.project.imagens[0].alt" fetchpriority="high">
              </figure>
              @if (content.project.contexto || content.project.problema || content.project.objetivo) {
                <section class="case-overview" aria-labelledby="case-overview-title">
                  <h2 id="case-overview-title">O projeto</h2>
                  <div class="case-overview-items">
                    @if (content.project.contexto) { <div><h3>Contexto</h3><p>{{ content.project.contexto }}</p></div> }
                    @if (content.project.problema) { <div><h3>Desafio</h3><p>{{ content.project.problema }}</p></div> }
                    @if (content.project.objetivo) { <div><h3>Objetivo</h3><p>{{ content.project.objetivo }}</p></div> }
                  </div>
                </section>
              }
              @if (content.project.imagens.length > 1) {
                <div class="case-existing-gallery" aria-label="Imagens do projeto">
                  @for (image of content.project.imagens.slice(1); track image.src) {
                    <figure><img [src]="'/' + image.src" [alt]="image.alt" loading="lazy"></figure>
                  }
                </div>
              }
              @if (content.project.imagens.length === 1) {
                <p class="case-note">A apresentação completa deste projeto ainda não está disponível.</p>
              }
              @if (content.project.linkExterno) { <p class="case-existing-link"><a [href]="content.project.linkExterno" target="_blank" rel="noopener noreferrer">Visitar projeto</a></p> }
            </div>
          }

          <nav class="case-next page-gutter" aria-label="Continuar explorando">
            <a routerLink="/" fragment="projetos" class="case-back">Todos os projetos</a>
            @if (nextCase(); as next) {
              <a [routerLink]="['/projetos', next.project.slug]" class="case-next-link">
                <span>Próximo projeto</span>
                <strong>{{ next.project.titulo }}</strong>
              </a>
            }
          </nav>
        </article>
      } @else {
        <section class="case-not-found page-gutter">
          <p>Projeto não encontrado / 404</p>
          <h1>Este projeto não está por aqui.</h1>
          <a routerLink="/" fragment="projetos">Ver todos os projetos</a>
        </section>
      }
    </main>
    <footer class="site-ending">
      <div class="site-ending-inner page-gutter"><p>Jackeline Costa <span>© 2026</span></p><nav aria-label="Canais de contato"><a href="mailto:jackeline.costa51@gmail.com">E-mail</a><a href="https://www.linkedin.com/in/jackeline-costa-1a2308268/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://www.behance.net/jackelineluana" target="_blank" rel="noopener noreferrer">Behance</a></nav></div>
    </footer>
  `
})
export class ProjectComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  readonly caseData = signal<CaseContent | undefined>(undefined);
  readonly nextCase = signal<CaseContent | undefined>(undefined);
  readonly projectNumber = signal('—');

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(inject(DestroyRef))).subscribe((params) => {
      const slug = params.get('slug');
      const index = cases.findIndex((item) => item.project.slug === slug);
      const content = index < 0 ? undefined : cases[index];
      this.caseData.set(content);
      this.nextCase.set(index < 0 ? undefined : cases[(index + 1) % cases.length]);
      this.projectNumber.set(index < 0 ? '—' : String(index + 1).padStart(2, '0'));
      this.title.setTitle(content ? `${content.project.titulo} — Jackeline Costa` : 'Projeto não encontrado — Jackeline Costa');
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
