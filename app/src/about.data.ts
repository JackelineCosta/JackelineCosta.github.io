export interface ExperienceEntry {
  organization: string;
  role: string;
  period: string;
}

export interface EducationEntry {
  course: string;
  institution: string;
  period: string;
}

export const experiences: readonly ExperienceEntry[] = [
  { organization: 'Sebrae-SP', role: 'Estágio em Gestão de Projetos', period: 'fev. 2023 — fev. 2025' }
];

export const education: readonly EducationEntry[] = [
  { course: 'Administração', institution: 'Faculdade Sebrae', period: 'desde 2022' }
];

export const skills: readonly string[] = [
  'Pesquisa e testes com usuários',
  'Arquitetura da informação',
  'Jornadas e fluxos de navegação',
  'UX/UI Design',
  'Prototipação',
  'Design System',
  'UX Writing',
  'Análise de dados e feedbacks',
  'Gestão de projetos',
  'IA aplicada ao design e desenvolvimento'
];
