# Portfólio — Jackeline Costa

Portfólio em Angular, TypeScript e SCSS, publicado como site estático no GitHub Pages.

## Desenvolvimento

```powershell
npm ci
npm run serve
```

## Publicação

```powershell
npm run build
```

O build do Angular é salvo em `dist/portfolio/browser`. O script `scripts/publish-home.mjs` copia os arquivos necessários para a raiz pública (`index.html`, `404.html`, `sobre/`, `projetos/` e `assets/angular/`). Esses arquivos gerados também precisam ser incluídos no commit para o GitHub Pages servir a versão atual.

Os projetos e seus caminhos de imagem e PDF ficam em `src/data/projects.ts`. As capas, imagens das apresentações e PDFs públicos ficam em `assets/`.

As pastas `tmp/` e `artifacts/` guardam materiais locais de trabalho e não fazem parte do site publicado.
