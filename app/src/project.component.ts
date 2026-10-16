import { Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from './header.component';
import { CaseContent, cases, mobileDocumentSlides } from './case-content';

@Component({
  selector: 'jc-project',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  template: `
    <a class="skip-link" href="#conteudo" [attr.inert]="readerOpen() ? '' : null">Pular para o conteúdo</a>
    <jc-header [attr.inert]="readerOpen() ? '' : null" />
    <main id="conteudo" class="case-page" [attr.inert]="readerOpen() ? '' : null">
      @if (caseData(); as content) {
        <article>
          <header class="case-opening page-gutter" [class.case-opening-document]="content.documentPages.length > 0">
            <div class="case-topline">
              <a routerLink="/" fragment="projetos">Voltar aos projetos</a>
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
              <div class="case-mobile-document">
                <div class="case-mobile-slide-track" #slideTrack (scroll)="updateSlide(slideTrack)" tabindex="0" role="region" aria-roledescription="carrossel" [attr.aria-label]="'Apresentação de ' + content.project.titulo">
                  @for (slide of mobileSlides(); track $index; let index = $index) {
                    <figure class="case-mobile-slide">
                      <button #openSlide type="button" class="case-mobile-slide-open" (click)="openReader(index, openSlide)" [attr.aria-label]="'Abrir página ' + slide.pageNumber + ' em tela cheia horizontal'">
                        <span class="case-mobile-slide-media" [style.aspect-ratio]="slide.aspectRatio">
                          <img [src]="'/' + slide.image.src" [style.top.%]="slide.topPercent" [alt]="slide.image.alt + (slide.partCount > 1 ? ', parte ' + slide.partNumber + ' de ' + slide.partCount : '')" [attr.loading]="index === 0 ? 'eager' : 'lazy'">
                        </span>
                        <span class="case-mobile-slide-expand" aria-hidden="true">Ampliar ↗</span>
                      </button>
                    </figure>
                  }
                </div>
                <div class="case-mobile-slide-controls">
                  <button type="button" (click)="moveSlide(slideTrack, -1)" [disabled]="activeSlide() === 0" aria-label="Slide anterior"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 12c0-.55-.45-1-1-1H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1z"/></svg></button>
                  <span aria-live="polite">{{ activeSlide() + 1 }} / {{ mobileSlides().length }}</span>
                  <button type="button" (click)="moveSlide(slideTrack, 1)" [disabled]="activeSlide() === mobileSlides().length - 1" aria-label="Próximo slide"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4 10.59 5.41 16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg></button>
                </div>
                <section class="case-mobile-summary" aria-labelledby="case-mobile-summary-title">
                  <p class="case-mobile-summary-eyebrow">Em poucas palavras</p>
                  <h2 id="case-mobile-summary-title">Sobre o projeto</h2>
                  @if (content.project.descricao) { <p class="case-mobile-summary-lead">{{ content.project.descricao }}</p> }
                  @if (content.project.contexto) { <div><h3>Contexto</h3><p>{{ content.project.contexto }}</p></div> }
                  @if (content.project.problema) { <div><h3>Desafio</h3><p>{{ content.project.problema }}</p></div> }
                  @if (content.project.objetivo) { <div><h3>Objetivo</h3><p>{{ content.project.objetivo }}</p></div> }
                  @if (content.project.minhaParticipacao) { <div><h3>Minha atuação</h3><p>{{ content.project.minhaParticipacao }}</p></div> }
                  @if (!content.project.contexto && content.project.papel) { <div><h3>Minha atuação</h3><p>{{ content.project.papel }}</p></div> }
                </section>
              </div>
              @if (content.project.linkExterno) {
                <p class="case-project-link"><a [href]="content.project.linkExterno" target="_blank" rel="noopener noreferrer">{{ content.project.slug === 'raiz' ? 'Ver aplicativo no Google Play' : 'Visitar projeto online' }} ↗</a></p>
              }
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
    @if (readerOpen()) {
      @if (readerSlide(); as slide) {
        <section class="case-reader" animate.enter="case-reader-enter" animate.leave="case-reader-leave" role="dialog" aria-modal="true" [attr.aria-label]="'Apresentação em tela cheia de ' + caseData()?.project?.titulo">
          <div class="case-reader-stage">
            @if (slide.partCount > 1) {
              <div class="case-reader-media" [style.aspect-ratio]="slide.aspectRatio">
                <img [src]="'/' + slide.image.src" [style.top.%]="slide.topPercent" [alt]="slide.image.alt + ', parte ' + slide.partNumber + ' de ' + slide.partCount">
              </div>
            } @else {
              <img class="case-reader-page" [src]="'/' + slide.image.src" [alt]="slide.image.alt">
            }
          </div>
          <div class="case-reader-controls">
            <button type="button" (click)="moveReader(-1)" [disabled]="readerIndex() === 0" aria-label="Slide anterior"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 12c0-.55-.45-1-1-1H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1z"/></svg></button>
            <span aria-live="polite">{{ readerIndex() + 1 }} / {{ mobileSlides().length }}</span>
            <button type="button" (click)="moveReader(1)" [disabled]="readerIndex() === mobileSlides().length - 1" aria-label="Próximo slide"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4 10.59 5.41 16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg></button>
            <button type="button" class="case-reader-close" (click)="closeReader()" aria-label="Fechar tela cheia">×</button>
          </div>
        </section>
      }
    }
    <footer class="site-ending" [attr.inert]="readerOpen() ? '' : null">
      <div class="site-ending-inner page-gutter"><p>Jackeline Costa <span>© 2026</span></p><nav aria-label="Canais de contato"><a href="mailto:jackeline.costa51@gmail.com">E-mail</a><a href="https://www.linkedin.com/in/jackeline-costa-1a2308268/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://www.behance.net/jackelineluana" target="_blank" rel="noopener noreferrer">Behance</a></nav></div>
    </footer>
  `
})
export class ProjectComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly destroyRef = inject(DestroyRef);
  readonly caseData = signal<CaseContent | undefined>(undefined);
  readonly nextCase = signal<CaseContent | undefined>(undefined);
  readonly mobileSlides = computed(() => mobileDocumentSlides(this.caseData()?.documentPages ?? []));
  readonly activeSlide = signal(0);
  readonly readerOpen = signal(false);
  readonly readerIndex = signal(0);
  readonly readerSlide = computed(() => this.mobileSlides()[this.readerIndex()]);
  private readerTrigger: HTMLElement | null = null;
  private previousBodyOverflow = '';
  private ownsFullscreen = false;

  moveSlide(track: HTMLElement, direction: number): void {
    const next = Math.max(0, Math.min(this.mobileSlides().length - 1, this.activeSlide() + direction));
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
    this.activeSlide.set(next);
  }

  updateSlide(track: HTMLElement): void {
    this.activeSlide.set(Math.round(track.scrollLeft / track.clientWidth));
  }

  openReader(index: number, trigger: HTMLElement): void {
    if (!window.matchMedia('(max-width: 850px)').matches) return;
    this.readerTrigger = trigger;
    this.readerIndex.set(index);
    this.readerOpen.set(true);
    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.querySelector<HTMLButtonElement>('.case-reader-close')?.focus(), 0);

    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      void document.documentElement.requestFullscreen().then(async () => {
        if (!this.readerOpen()) {
          await document.exitFullscreen();
          return;
        }
        this.ownsFullscreen = true;
        try { await screen.orientation?.lock?.('landscape'); } catch { /* CSS handles browsers without orientation lock. */ }
      }).catch(() => { /* The fixed landscape reader works without the Fullscreen API. */ });
    }
  }

  closeReader(restoreFocus = true): void {
    if (!this.readerOpen()) return;
    this.readerOpen.set(false);
    document.body.style.overflow = this.previousBodyOverflow;
    if (this.ownsFullscreen) {
      screen.orientation?.unlock?.();
      if (document.fullscreenElement) void document.exitFullscreen().catch(() => {});
      this.ownsFullscreen = false;
    }
    if (restoreFocus) setTimeout(() => this.readerTrigger?.focus(), 0);
  }

  moveReader(direction: number): void {
    this.readerIndex.update((index) => Math.max(0, Math.min(this.mobileSlides().length - 1, index + direction)));
    document.querySelector<HTMLElement>('.case-reader-stage')?.scrollTo({ top: 0, behavior: 'instant' });
  }

  @HostListener('document:keydown', ['$event'])
  onReaderKeydown(event: KeyboardEvent): void {
    if (!this.readerOpen()) return;
    if (event.key === 'Escape') this.closeReader();
    if (event.key === 'ArrowLeft') this.moveReader(-1);
    if (event.key === 'ArrowRight') this.moveReader(1);
  }

  @HostListener('document:fullscreenchange')
  onFullscreenChange(): void {
    if (this.ownsFullscreen && !document.fullscreenElement) this.closeReader();
  }

  constructor() {
    this.destroyRef.onDestroy(() => this.closeReader(false));
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.closeReader(false);
      const slug = params.get('slug');
      const index = cases.findIndex((item) => item.project.slug === slug);
      const content = index < 0 ? undefined : cases[index];
      this.caseData.set(content);
      this.activeSlide.set(0);
      this.nextCase.set(index < 0 ? undefined : cases[(index + 1) % cases.length]);
      this.title.setTitle(content ? `${content.project.titulo} — Jackeline Costa` : 'Projeto não encontrado — Jackeline Costa');
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
