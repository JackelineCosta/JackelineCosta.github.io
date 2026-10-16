import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header.component';
import { Project, ProjectImage, projects } from '../../src/data/projects';
import { galleryCategories } from './gallery.data';

type ShowcaseProject = { project: Project; image: ProjectImage; category: string };

const showcaseOrder: Array<Pick<ShowcaseProject, 'category'> & { slug: string }> = [
  { slug: 'raiz', category: 'Aplicativo de rotina capilar' },
  { slug: 'equilibre-se', category: 'Plataforma de terapia online' },
  { slug: 'minigest', category: 'Aplicativo de gestão financeira' },
  { slug: 'macucultura', category: 'Site cultural' },
  { slug: 'melhor-rastreio', category: 'Redesign de experiência de rastreio' },
  { slug: 'afro-bela', category: 'Site / E-commerce' }
];

@Component({
  selector: 'jc-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  template: `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <jc-header />
    <main id="conteudo">
      <section class="hero page-gutter" aria-labelledby="hero-title">
        <div class="hero-composition">
          <h1 id="hero-title"><span class="hero-product">Product</span><span class="hero-designer">Designer<span class="hero-period">.</span></span></h1>
          <div class="hero-notes">
            <p class="hero-name">Jackeline Costa</p>
            <p class="hero-intro">Crio experiências digitais com atenção às pessoas, à clareza e ao contexto de cada projeto.</p>
          </div>
        </div>
      </section>

      <section class="projects page-gutter" id="projetos" aria-labelledby="projects-title">
        <div class="section-head">
          <h2 id="projects-title">Principais<br><em>trabalhos</em></h2>
        </div>
        <div class="project-grid">
          @for (item of showcase; track item.project.slug) {
            <article class="project">
              <a class="project-link" [routerLink]="['/projetos', item.project.slug]" [attr.aria-label]="'Abrir projeto ' + item.project.titulo">
                <span class="project-image-wrap" [class.project-image-wrap-landscape]="item.project.slug === 'raiz' || item.project.slug === 'minigest' || item.project.slug === 'equilibre-se' || item.project.slug === 'macucultura' || item.project.slug === 'afro-bela' || item.project.slug === 'melhor-rastreio'">
                  <span class="project-image-media"><img [src]="'/' + item.image.src" [alt]="item.image.alt" loading="lazy"></span>
                </span>
                <div class="project-info">
                  <strong class="project-title">{{ item.project.titulo }}</strong>
                  <span class="project-category">{{ item.category }}</span>
                </div>
              </a>
            </article>
          }
        </div>
      </section>

      <section class="more-projects" id="mais-projetos" aria-labelledby="more-title">
        <div class="more-inner page-gutter">
          <h2 id="more-title">Mais projetos</h2>
          <nav class="more-tags" aria-label="Categorias de trabalhos">
            @for (item of galleryCategories; track item.slug) {
              <a [routerLink]="['/galerias', item.slug]" [attr.aria-label]="'Explorar ' + item.title">{{ item.title }}</a>
            }
          </nav>
        </div>
      </section>

      <section class="about-home" id="sobre" aria-labelledby="about-title">
        <figure class="about-photo">
          <img src="/assets/images/jackeline-costa-home.png" width="1600" height="1200" alt="Retrato de Jackeline Costa" loading="lazy">
        </figure>
        <div class="about-panel">
          <div class="about-copy">
            <h2 id="about-title">Jackeline Costa</h2>
            <p class="about-role">Product Designer</p>
            <p class="about-description">Minha trajetória cruza Administração, empreendedorismo, cultura e design de produtos digitais. Em cada projeto, busco unir clareza, contexto e atenção às pessoas.</p>
            <a class="about-button" routerLink="/sobre">Mais sobre mim</a>
          </div>
        </div>
      </section>
    </main>
    <footer class="site-ending" id="contato">
      <div class="site-ending-inner page-gutter">
        <p>Jackeline Costa <span>© 2026</span></p>
        <nav aria-label="Canais de contato">
          <a href="mailto:jackeline.costa51@gmail.com">E-mail</a>
          <a href="https://www.linkedin.com/in/jackeline-costa-1a2308268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.behance.net/jackelineluana" target="_blank" rel="noopener noreferrer">Behance</a>
        </nav>
      </div>
    </footer>
  `
})
export class HomeComponent {
  readonly showcase: ShowcaseProject[] = showcaseOrder.map((item) => {
    const project = projects.find((candidate) => candidate.slug === item.slug);
    if (!project) throw new Error(`Projeto não encontrado: ${item.slug}`);
    const image = project.imagens[0];
    if (!image) throw new Error(`Imagem não encontrada: ${item.slug}`);
    return { project, image, category: item.category };
  });

  readonly galleryCategories = galleryCategories;
}
