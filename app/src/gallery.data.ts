import { Project, projects } from '../../src/data/projects';

export type GalleryMedia =
  | { kind: 'image'; src: string; alt: string; fit?: 'contain' }
  | { kind: 'video'; src: string; poster: string; alt: string };

export interface GalleryGroup {
  title?: string;
  media: GalleryMedia[];
}

export interface GalleryWork {
  title: string;
  summary: string;
  projectSlug?: string;
  layout?: 'document';
  groups: GalleryGroup[];
}

export interface GalleryCategory {
  slug: string;
  title: string;
  works: GalleryWork[];
}

function fromProject(slug: string, useDocumentPages = false): GalleryWork {
  const project: Project | undefined = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Projeto não encontrado: ${slug}`);
  const images = useDocumentPages ? project.pdfPages ?? project.imagens : project.imagens;
  return {
    title: project.titulo,
    summary: project.descricao ?? project.contexto ?? '',
    projectSlug: project.slug,
    ...(useDocumentPages ? { layout: 'document' as const } : {}),
    groups: [{ media: images.map((image) => ({ kind: 'image', src: image.src, alt: image.alt, ...(useDocumentPages ? { fit: 'contain' as const } : {}) })) }]
  };
}

function raizMedia(filePrefix: string, first: number, last: number, label: string): GalleryMedia[] {
  return Array.from({ length: last - first + 1 }, (_, offset) => {
    const number = first + offset;
    return {
      kind: 'image',
      src: `assets/images/social-media/raiz/${filePrefix}-${String(number).padStart(2, '0')}.png`,
      alt: `${label}, peça ${offset + 1} de ${last - first + 1}`
    };
  });
}

// Cada trabalho vira uma aba. MacuCultura e outros projetos de Social Media
// podem ser acrescentados quando suas peças forem enviadas.
export const galleryCategories: GalleryCategory[] = [
  {
    slug: 'social-media',
    title: 'Social Media',
    works: [
      {
        title: 'Raiz',
        summary: 'Conteúdos de divulgação do aplicativo de cuidados capilares, com apresentação da proposta, funcionalidades e atualizações do produto.',
        projectSlug: 'raiz',
        groups: [
          { title: 'Apresentação do Raiz', media: raizMedia('divulgacao', 1, 7, 'Apresentação do Raiz') },
          { title: 'Disponível no Google Play', media: raizMedia('divulgacao', 8, 9, 'Divulgação do Raiz no Google Play') },
          { title: 'Novidades no aplicativo · carrossel', media: raizMedia('novidades', 1, 6, 'Carrossel de novidades do Raiz') }
        ]
      }
    ]
  },
  {
    slug: 'sites-e-paginas',
    title: 'Sites e páginas',
    works: [
      fromProject('lp-jussara-do-macuco')
    ]
  },
  {
    slug: 'portfolios-editoriais',
    title: 'Portfólios editoriais',
    works: [
      fromProject('portfolio-leninha', true),
      fromProject('portfolio-irene', true)
    ]
  }
];
