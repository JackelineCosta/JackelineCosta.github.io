import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { education, experiences, skills } from './about.data';
import { projects } from '../../src/data/projects';
import { RouterLink } from '@angular/router';

const featuredSlugs = ['raiz', 'minigest', 'equilibre-se', 'macucultura'] as const;

@Component({
  selector: 'jc-about',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  template: `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <jc-header />
    <main id="conteudo" class="about-page">
      <div class="about-page-grid">
        <h1 class="about-page-intro"><span class="about-page-hello">Olá!</span><span>Sou Jackeline,</span><span><em>Product</em> Designer.</span></h1>

        <figure class="about-page-portrait">
          <img src="/assets/images/jackeline-costa.jpg" width="635" height="953" alt="Retrato de Jackeline Costa" fetchpriority="high">
        </figure>

        <div class="about-page-career">
          <section class="about-page-detail" aria-labelledby="experience-title">
            <h2 id="experience-title">Experiência profissional</h2>
            <div class="about-page-entry-list">
              @for (entry of experiences; track entry.organization) {
                <div class="about-page-entry">
                  <div><h3>{{ entry.organization }}</h3><p>{{ entry.role }}</p></div>
                  <span>{{ entry.period }}</span>
                </div>
              }
            </div>
          </section>

          <section class="about-page-detail" aria-labelledby="education-title">
            <h2 id="education-title">Formação</h2>
            <div class="about-page-entry-list">
              @for (entry of education; track entry.course) {
                <div class="about-page-entry">
                  <div><h3>{{ entry.course }}</h3><p>{{ entry.institution }}</p></div>
                  <span>{{ entry.period }}</span>
                </div>
              }
            </div>
          </section>

          <section class="about-page-detail" aria-labelledby="skills-title">
            <h2 id="skills-title">Habilidades</h2>
            <ul class="about-page-skills">
              @for (skill of skills; track skill) { <li>{{ skill }}</li> }
            </ul>
          </section>

          <section class="about-page-detail" aria-labelledby="about-projects-title">
            <h2 id="about-projects-title">Projetos selecionados</h2>
            <nav class="about-page-projects" aria-label="Projetos de Jackeline Costa">
              @for (project of featuredProjects; track project.slug) {
                <a [routerLink]="['/projetos', project.slug]">{{ project.titulo }}</a>
              }
            </nav>
          </section>
        </div>

        <section class="about-page-story" aria-labelledby="about-story-title">
          <h2 id="about-story-title">Sobre mim</h2>
          <p>Sou Jackeline Costa, formada em Administração pela Faculdade Sebrae e atuo como Product Designer. Trabalhei 3 anos no Sebrae-SP e ele me aproximou de gestão de projetos, análise de dados e criação de materiais para apoiar decisões, conhecimentos que hoje fazem parte do meu trabalho com design.</p>
          <p>No desenvolvimento de produtos digitais, gosto de entender os problemas antes de pensar nas soluções. Questiono escolhas, estudo o comportamento das pessoas e procuro entender como cada decisão pode afetar a experiência de quem vai usar o produto.</p>
          <p>Sou curiosa e gosto de aprender na prática. A inteligência artificial se tornou parte importante desse processo. Uso IA diariamente para pesquisar, testar ideias, aprender sobre programação, revisar soluções e entender melhor o desenvolvimento dos meus projetos. Não vejo a tecnologia como substituta do meu raciocínio, mas como uma ferramenta que me ajuda a aprender, experimentar e ir além do que já sei.</p>
        </section>

        <section class="about-page-contact" aria-labelledby="about-contact-title">
          <h2 id="about-contact-title">Entre em contato</h2>
          <a class="about-page-email" href="mailto:jackeline.costa51@gmail.com">jackeline.costa51@gmail.com</a>
          <nav aria-label="Redes profissionais">
            <a href="https://www.linkedin.com/in/jackeline-costa-1a2308268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.behance.net/jackelineluana" target="_blank" rel="noopener noreferrer">Behance</a>
          </nav>
        </section>
      </div>
    </main>
    <footer class="site-ending about-page-footer">
      <div class="site-ending-inner page-gutter"><p>Jackeline Costa <span>© 2026</span></p><a href="/">Voltar ao início</a></div>
    </footer>
  `
})
export class AboutComponent {
  readonly experiences = experiences;
  readonly education = education;
  readonly skills = skills;
  readonly featuredProjects = featuredSlugs.map((slug) => {
    const project = projects.find((item) => item.slug === slug);
    if (!project) throw new Error(`Projeto não encontrado: ${slug}`);
    return project;
  });
}
