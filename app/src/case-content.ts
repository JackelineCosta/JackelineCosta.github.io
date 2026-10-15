import { Project, ProjectImage, projects } from '../../src/data/projects';

export interface MobileDocumentSlide {
  image: ProjectImage;
  pageNumber: number;
  partNumber: number;
  partCount: number;
  aspectRatio: string;
  topPercent: number;
}

// Some PDF pages are long canvases. Split their display into overlapping,
// screen-sized views while keeping the original image and PDF untouched.
const longPageSizes: Record<string, [number, number]> = {
  'equilibre-se-01.webp': [1366, 11801],
  'equilibre-se-02.webp': [1366, 3396],
  'melhor-rastreio-01.webp': [1062, 13995],
  'minigest-01.webp': [851, 10099],
  'minigest-02.webp': [851, 2315]
};

export function mobileDocumentSlides(pages: ProjectImage[]): MobileDocumentSlide[] {
  return pages.flatMap((image, pageIndex) => {
    const fileName = image.src.split('/').at(-1) ?? '';
    const size = longPageSizes[fileName];
    if (!size) {
      return [{ image, pageNumber: pageIndex + 1, partNumber: 1, partCount: 1, aspectRatio: '16 / 9', topPercent: 0 }];
    }

    const [width, height] = size;
    const sectionHeight = width * 1.25;
    const partCount = Math.ceil(height / sectionHeight);
    const maxOffset = Math.max(0, height - sectionHeight);
    return Array.from({ length: partCount }, (_, partIndex) => ({
      image,
      pageNumber: pageIndex + 1,
      partNumber: partIndex + 1,
      partCount,
      aspectRatio: '4 / 5',
      topPercent: partCount === 1 ? 0 : -maxOffset * partIndex / (partCount - 1) / sectionHeight * 100
    }));
  });
}

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
