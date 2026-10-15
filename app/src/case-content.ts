import { Project, projects } from '../../src/data/projects';

export interface CaseContent {
  project: Project;
  /** Complete, ordered renderings of the original PDF pages. */
  documentPages: NonNullable<Project['pdfPages']>;
}

const homeOrder = [
  'raiz',
  'equilibre-se',
  'minigest',
  'macucultura',
  'afro-bela',
  'melhor-rastreio',
  'lp-jussara-do-macuco',
  'portfolio-leninha',
  'portfolio-irene'
];

export const cases: CaseContent[] = homeOrder.map((slug) => {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Projeto não encontrado: ${slug}`);
  const documentPages = project.pdfPages ?? [];
  if (project.pdf && documentPages.length === 0) {
    throw new Error(`PDF sem páginas renderizadas: ${slug}`);
  }
  return { project, documentPages };
});
