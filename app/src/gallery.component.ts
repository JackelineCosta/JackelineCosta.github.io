import { Component, HostListener, OnDestroy, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { GalleryCategory, GalleryGroup, GalleryMedia, GalleryWork, galleryCategories } from './gallery.data';

type OpenMedia = { work: GalleryWork; group: GalleryGroup; media: GalleryMedia; index: number };

@Component({
  selector: 'jc-gallery',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  template: `
    <a class="skip-link" href="#conteudo" [attr.inert]="selected() ? '' : null">Pular para o conteúdo</a>
    <jc-header [attr.inert]="selected() ? '' : null" />
    <main id="conteudo" class="gallery-page page-gutter" [attr.inert]="selected() ? '' : null">
      @if (category(); as current) {
        <div class="gallery-inner">
          <a class="gallery-back" routerLink="/" fragment="mais-projetos">← Voltar às categorias</a>
          <header class="gallery-heading">
            <p class="gallery-eyebrow">Outros trabalhos / {{ current.works.length }} {{ current.works.length === 1 ? 'projeto' : 'projetos' }}</p>
            <h1>{{ current.title }}</h1>
          </header>
          <div class="gallery-tabs" role="tablist" [attr.aria-label]="'Trabalhos de ' + current.title" (keydown)="onTabKeydown($event, current.works.length)">
            @for (work of current.works; track work.title; let index = $index) {
              <button type="button" role="tab" [id]="'gallery-tab-' + index" [attr.aria-selected]="activeWorkIndex() === index" [attr.aria-controls]="'gallery-panel'" [attr.tabindex]="activeWorkIndex() === index ? 0 : -1" (click)="selectWork(index)">{{ work.title }}</button>
            }
          </div>
          @if (activeWork(); as work) {
            <section class="gallery-work" id="gallery-panel" role="tabpanel" [attr.aria-labelledby]="'gallery-tab-' + activeWorkIndex()" tabindex="0">
              <div class="gallery-work-heading">
                <div>
                  <h2>{{ work.title }}</h2>
                  <p>{{ work.summary }}</p>
                </div>
                @if (work.projectSlug && work.layout !== 'document') {
                  <a [routerLink]="['/projetos', work.projectSlug]">Conhecer o projeto <span aria-hidden="true">↗</span></a>
                }
              </div>
              @if (work.layout === 'document') {
                <div class="gallery-document" [attr.aria-label]="'Portfólio completo de ' + work.title">
                  @for (page of work.groups[0].media; track page.src; let index = $index) {
                    @if (page.kind === 'image') {
                      <figure><img [src]="'/' + page.src" [alt]="page.alt" [attr.loading]="index === 0 ? 'eager' : 'lazy'"></figure>
                    }
                  }
                </div>
              } @else {
                @for (group of work.groups; track group.title ?? $index) {
                  <div class="gallery-group">
                    @if (group.title) { <h3>{{ group.title }}</h3> }
                    <div class="gallery-grid" [class.gallery-grid-single]="group.media.length === 1">
                      @for (media of group.media; track media.src; let index = $index) {
                        <button type="button" class="gallery-tile" (click)="open(work, group, index, $event.currentTarget)" [attr.aria-label]="(media.kind === 'video' ? 'Reproduzir ' : 'Ampliar ') + media.alt">
                          @if (media.kind === 'image') {
                            <img [src]="'/' + media.src" [alt]="media.alt" [class.gallery-media-contain]="media.fit === 'contain'" loading="lazy">
                          } @else {
                            <img [src]="'/' + media.poster" [alt]="media.alt" loading="lazy">
                            <span class="gallery-play" aria-hidden="true">▶</span>
                          }
                        </button>
                      }
                    </div>
                  </div>
                }
              }
            </section>
          }
          <nav class="gallery-other" aria-label="Outras categorias">
            <span>Explore também</span>
            @for (other of otherCategories(); track other.slug) {
              <a [routerLink]="['/galerias', other.slug]">{{ other.title }} ↗</a>
            }
          </nav>
        </div>
      } @else {
        <div class="gallery-inner gallery-missing">
          <h1>Galeria não encontrada</h1>
          <a routerLink="/" fragment="mais-projetos">Ver categorias</a>
        </div>
      }
    </main>
    <footer class="site-ending" [attr.inert]="selected() ? '' : null">
      <div class="site-ending-inner page-gutter"><p>Jackeline Costa <span>© 2026</span></p><a routerLink="/">Voltar ao início</a></div>
    </footer>

    @if (selected(); as active) {
      <div class="gallery-lightbox" role="dialog" aria-modal="true" [attr.aria-label]="active.work.title" (click)="close()">
        <button type="button" class="gallery-lightbox-close" (click)="close(); $event.stopPropagation()" aria-label="Fechar visualização">×</button>
        <div class="gallery-lightbox-content" (click)="$event.stopPropagation()">
          @if (active.media.kind === 'image') {
            <img [src]="'/' + active.media.src" [alt]="active.media.alt">
          } @else {
            <video controls autoplay playsinline [poster]="'/' + active.media.poster" [src]="'/' + active.media.src" [attr.aria-label]="active.media.alt"></video>
          }
          <div class="gallery-lightbox-controls">
            <button type="button" (click)="move(-1)" [disabled]="active.index === 0" aria-label="Slide anterior"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 12c0-.55-.45-1-1-1H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1z"/></svg></button>
            <span>{{ active.index + 1 }} / {{ active.group.media.length }}</span>
            <button type="button" (click)="move(1)" [disabled]="active.index === active.group.media.length - 1" aria-label="Próximo slide"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4 10.59 5.41 16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg></button>
          </div>
        </div>
      </div>
    }
  `
})
export class GalleryComponent implements OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly slug = signal(this.route.snapshot.paramMap.get('slug'));
  readonly category = computed<GalleryCategory | undefined>(() =>
    galleryCategories.find((item) => item.slug === this.slug())
  );
  readonly otherCategories = computed(() => galleryCategories.filter((item) => item.slug !== this.category()?.slug));
  readonly activeWorkIndex = signal(0);
  readonly activeWork = computed(() => this.category()?.works[this.activeWorkIndex()]);
  readonly selected = signal<OpenMedia | null>(null);
  private returnFocus: HTMLElement | null = null;

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.close();
      this.slug.set(params.get('slug'));
      this.activeWorkIndex.set(0);
      this.title.setTitle(`${this.category()?.title ?? 'Galeria'} — Jackeline Costa`);
    });
  }

  open(work: GalleryWork, group: GalleryGroup, index: number, trigger: EventTarget | null): void {
    this.returnFocus = trigger instanceof HTMLElement ? trigger : null;
    this.selected.set({ work, group, media: group.media[index], index });
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => document.querySelector<HTMLButtonElement>('.gallery-lightbox-close')?.focus());
  }

  close(): void {
    if (!this.selected()) return;
    this.selected.set(null);
    document.body.style.overflow = '';
    this.returnFocus?.focus();
  }

  move(delta: number): void {
    const active = this.selected();
    if (!active) return;
    const index = active.index + delta;
    if (index < 0 || index >= active.group.media.length) return;
    this.selected.set({ ...active, media: active.group.media[index], index });
  }

  selectWork(index: number): void {
    this.activeWorkIndex.set(index);
  }

  onTabKeydown(event: KeyboardEvent, count: number): void {
    if (!count) return;
    let next = this.activeWorkIndex();
    if (event.key === 'ArrowRight') next = (next + 1) % count;
    else if (event.key === 'ArrowLeft') next = (next - 1 + count) % count;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = count - 1;
    else return;
    event.preventDefault();
    this.selectWork(next);
    requestAnimationFrame(() => document.getElementById(`gallery-tab-${next}`)?.focus());
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.selected()) return;
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.move(-1);
    if (event.key === 'ArrowRight') this.move(1);
  }

  ngOnDestroy(): void { document.body.style.overflow = ''; }
}
