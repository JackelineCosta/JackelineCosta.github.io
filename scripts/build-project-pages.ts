import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { projects, type Project } from "../src/data/projects";

const root = resolve(import.meta.dirname, "..");

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>\"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '\"': "&quot;"
  })[character] ?? character);

const list = (items: string[] = []) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

const navigation = (base: string) => `
  <header class="site-header" data-header>
    <div class="container header-inner">
      <a class="brand" href="${base}" aria-label="Jackeline Costa — início">
        <img src="${base}assets/images/jackeline-costa-logo.svg" width="577" height="134" alt="Jackeline Costa">
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-navigation" data-menu-button>
        <span class="sr-only">Abrir menu</span><span aria-hidden="true"></span><span aria-hidden="true"></span>
      </button>
      <nav class="main-nav" id="main-navigation" aria-label="Navegação principal" data-navigation>
        <a href="${base}">Início</a><a href="${base}projetos/" aria-current="page">Projetos</a>
        <a href="${base}experiencia/">Experiência</a><a href="${base}processo/">Processo</a>
        <a href="${base}sobre/">Sobre</a><a href="${base}contato/">Contato</a>
      </nav>
    </div>
  </header>`;

const footer = (base: string) => `
  <footer class="site-footer"><div class="container footer-inner">
    <a class="brand" href="${base}" aria-label="Voltar ao início"><img src="${base}assets/images/jackeline-costa-logo.svg" width="577" height="134" alt="Jackeline Costa"></a>
    <p>© 2026. Todos os direitos reservados.</p>
    <nav class="social-links" aria-label="Redes sociais"><a href="https://www.behance.net/jackelineluana">Behance</a><a href="https://www.linkedin.com/in/jackeline-costa-1a2308268/">LinkedIn</a><a href="mailto:jackeline.costa51@gmail.com">E-mail</a></nav>
  </div></footer>`;

const documentation = (project: Project, base: string) => {
  if (project.pdfPages?.length) {
    const pdfPages = `
      <div class="case-pdf-pages" aria-label="Páginas do material visual do projeto">
        ${project.pdfPages.map((image, index) => `<figure class="case-pdf-page"><img src="${base}${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy"><figcaption>Página ${index + 1}</figcaption></figure>`).join("")}
      </div>`;
    const pdfLink = project.pdf ? `<div class="case-document case-document-compact"><a class="button" href="${base}${escapeHtml(project.pdf)}" target="_blank">Abrir ou baixar PDF</a></div>` : "";

    return `<section class="case-section case-section-pdf-only"><div class="container">${pdfPages}${pdfLink}</div></section>`;
  }

  const gallery = project.imagens.length ? `
    <div class="case-gallery-grid">${project.imagens.map((image) => `<img src="${base}${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy">`).join("")}</div>` : "";
  const textAfterGallery = project.textoAposGaleria?.length ? `
    <div class="case-gallery-text">
      ${project.textoAposGaleria.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
    </div>` : "";
  const pdf = project.pdf ? `
    <div class="case-document"><object class="pdf-viewer" data="${base}${escapeHtml(project.pdf)}" type="application/pdf">
      <p>O visualizador não está disponível. <a href="${base}${escapeHtml(project.pdf)}">Abra o PDF em uma nova aba</a>.</p>
    </object><a class="button" href="${base}${escapeHtml(project.pdf)}" target="_blank">Abrir ou baixar PDF</a></div>` : "";

  if (!gallery && !pdf && !project.linkExterno) return "";
  const external = project.linkExterno ? `<a class="text-link" href="${escapeHtml(project.linkExterno)}" target="_blank" rel="noreferrer">Visitar projeto <span aria-hidden="true">↗</span></a>` : "";
  return `<section class="case-section section-bordered" aria-labelledby="project-documentation"><div class="container">
    <div class="section-heading"><p class="eyebrow">08 · Galeria e documentação</p><h2 id="project-documentation">Materiais do projeto</h2><p>Visualização aberta das telas e do PDF original para consulta completa.</p></div>
    ${gallery}${textAfterGallery}${pdf}${external}
  </div></section>`;
};

const renderProject = (project: Project) => {
  const base = "../../";
  const isPdfProject = Boolean(project.pdfPages?.length);
  const facts = [
    project.ano ? `<div><dt>Período</dt><dd>${escapeHtml(project.ano)}</dd></div>` : "",
    project.status ? `<div><dt>Status</dt><dd>${escapeHtml(project.status)}</dd></div>` : "",
    project.papel ? `<div><dt>Função</dt><dd>${escapeHtml(project.papel)}</dd></div>` : ""
  ].filter(Boolean).join("");
  const cover = !isPdfProject && project.imagens[0] ? `<figure class="project-detail-cover"><img src="${base}${escapeHtml(project.imagens[0].src)}" alt="${escapeHtml(project.imagens[0].alt)}"></figure>` : "";
  const overview = project.contexto ? `<section class="case-section"><div class="container case-narrative">
    <div><p class="eyebrow">02 · Visão geral</p><h2>O que é o projeto</h2></div><div class="case-copy"><p>${escapeHtml(project.contexto)}</p></div>
  </div></section>` : "";
  const context = project.problema || project.objetivo ? `<section class="case-section section-bordered"><div class="container case-narrative">
    <div><p class="eyebrow">03 · Contexto e problema</p><h2>A necessidade</h2></div><div class="case-copy">${project.problema ? `<h3>Problema</h3><p>${escapeHtml(project.problema)}</p>` : ""}${project.objetivo ? `<h3>Objetivo</h3><p>${escapeHtml(project.objetivo)}</p>` : ""}</div>
  </div></section>` : "";
  const participation = project.minhaParticipacao ? `<section class="case-section section-bordered"><div class="container case-narrative">
    <div><p class="eyebrow">04 · Minha atuação</p><h2>Participação no projeto</h2></div><div class="case-copy"><p>${escapeHtml(project.minhaParticipacao)}</p></div>
  </div></section>` : "";
  const process = project.processo?.length ? `<section class="case-section section-bordered"><div class="container case-narrative">
    <div><p class="eyebrow">05 · Processo</p><h2>Como o trabalho avançou</h2></div><ol class="case-list case-list-numbered">${list(project.processo)}</ol>
  </div></section>` : "";
  const decisions = project.principaisDecisoes?.length ? `<section class="case-section section-bordered"><div class="container case-narrative">
    <div><p class="eyebrow">06 · Decisões importantes</p><h2>Escolhas do projeto</h2></div><ul class="case-list">${list(project.principaisDecisoes)}</ul>
  </div></section>` : "";
  const resultGroups = [
    project.entregas?.length ? `<div><h3>Entregas</h3><ul class="case-list">${list(project.entregas)}</ul></div>` : "",
    project.resultadosComprovados?.length ? `<div><h3>Resultados comprovados</h3><ul class="case-list">${list(project.resultadosComprovados)}</ul></div>` : "",
    project.aprendizados?.length ? `<div><h3>Aprendizados</h3><ul class="case-list">${list(project.aprendizados)}</ul></div>` : ""
  ].filter(Boolean).join("");
  const results = resultGroups ? `<section class="case-section section-bordered"><div class="container">
    <div class="section-heading"><p class="eyebrow">07 · Resultado</p><h2>O que foi entregue ou aprendido</h2></div><div class="case-result-grid">${resultGroups}</div>
  </div></section>` : "";
  const capabilities = project.ferramentas?.length || project.competencias?.length ? `<section class="case-section section-bordered"><div class="container case-capabilities">
    ${project.ferramentas?.length ? `<div><p class="eyebrow">Ferramentas</p><ul class="skills-list">${list(project.ferramentas)}</ul></div>` : ""}
    ${project.competencias?.length ? `<div><p class="eyebrow">Competências aplicadas</p><ul class="skills-list">${list(project.competencias)}</ul></div>` : ""}
  </div></section>` : "";
  const projectContent = isPdfProject ? documentation(project, base) : `${overview}${context}${participation}${process}${decisions}${results}${capabilities}${documentation(project, base)}`;
  const hasDetailedContent = Boolean(project.descricao || overview || context || participation || process || decisions || results || capabilities || project.imagens.length || project.pdfPages?.length || project.pdf || project.linkExterno);
  const pending = hasDetailedContent ? "" : `<section class="case-section"><div class="container"><p class="project-content-note">A documentação detalhada deste projeto ainda não foi adicionada.</p></div></section>`;
  return `<!doctype html><html lang="pt-BR" data-base="${base}"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#090909"><title>${escapeHtml(project.titulo)} — Jackeline Costa</title>
    <meta name="description" content="${escapeHtml(project.descricao)}"><link rel="icon" href="${base}assets/images/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="${base}styles.css"><script src="${base}script.js" defer></script>
  </head><body><a class="skip-link" href="#conteudo">Pular para o conteúdo</a>${navigation(base)}
    <main id="conteudo"><article>
      <header class="project-detail-hero"><div class="container project-detail-hero-grid${cover ? " has-cover" : ""}">
        <div><a class="back-link" href="${base}projetos/">← Todos os projetos</a>
          <p class="eyebrow">01 · ${escapeHtml(project.categoriaLabel)}</p>
          <h1>${escapeHtml(project.titulo)}</h1>${!isPdfProject && project.descricao ? `<p class="project-lead">${escapeHtml(project.descricao)}</p>` : ""}
          ${!isPdfProject && facts ? `<dl class="project-facts">${facts}</dl>` : ""}
        </div>${cover}
      </div></header>
      ${projectContent}${pending}
    </article></main>${footer(base)}</body></html>`;
};

await writeFile(resolve(root, "data/projects.json"), `${JSON.stringify(projects, null, 2)}\n`, "utf8");

for (const project of projects) {
  const output = resolve(root, "projetos", project.slug, "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, renderProject(project), "utf8");
}

console.log(`${projects.length} páginas de projeto e data/projects.json gerados.`);
