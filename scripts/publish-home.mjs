import { copyFile, cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const source = join(process.cwd(), 'dist', 'portfolio', 'browser');
const target = join(process.cwd(), 'assets', 'angular');
await mkdir(target, { recursive: true });

const files = await readdir(source, { withFileTypes: true });
for (const file of files) {
  if (file.isFile() && file.name !== 'index.html') {
    await copyFile(join(source, file.name), join(target, file.name));
  } else if (file.isDirectory() && file.name === 'media') {
    await cp(join(source, file.name), join(target, file.name), { recursive: true });
  }
}

const html = await readFile(join(source, 'index.html'), 'utf8');
const published = html
  .replace(/(src|href)="((?:main|polyfills|styles|chunk)-[^"/]+\.(?:js|css))"/g, '$1="/assets/angular/$2"')
  .replace(/(src|href)="((?:main|polyfills|styles)\.(?:js|css))"/g, '$1="/assets/angular/$2"')
  .replace('href="assets/images/favicon.svg"', 'href="/assets/images/favicon.svg"');
await writeFile(join(process.cwd(), 'index.html'), published);
const about = published
  .replace(/<title>[^<]*<\/title>/, '<title>Sobre mim — Jackeline Costa</title>')
  .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Trajetória, experiência e habilidades de Jackeline Costa, Product Designer.">')
  .replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="https://jackelinecosta.github.io/sobre/">');
await mkdir(join(process.cwd(), 'sobre'), { recursive: true });
await writeFile(join(process.cwd(), 'sobre', 'index.html'), about);
const projectSource = await readFile(join(process.cwd(), 'src', 'data', 'projects.ts'), 'utf8');
const slugs = [...projectSource.matchAll(/\bslug:\s*"([a-z0-9-]+)"/g)].map((match) => match[1]);
for (const slug of slugs) {
  const projectHtml = published
    .replace(/<title>[^<]*<\/title>/, `<title>${slug} — Jackeline Costa</title>`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="https://jackelinecosta.github.io/projetos/${slug}/">`);
  const directory = join(process.cwd(), 'projetos', slug);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), projectHtml);
}
const gallerySource = await readFile(join(process.cwd(), 'app', 'src', 'gallery.data.ts'), 'utf8');
const gallerySlugs = [...gallerySource.matchAll(/\bslug:\s*'([a-z0-9-]+)'/g)].map((match) => match[1]);
for (const slug of gallerySlugs) {
  const galleryHtml = published
    .replace(/<title>[^<]*<\/title>/, `<title>Galeria — Jackeline Costa</title>`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="https://jackelinecosta.github.io/galerias/${slug}/">`);
  const directory = join(process.cwd(), 'galerias', slug);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), galleryHtml);
}
await writeFile(join(process.cwd(), '404.html'), published);
console.log(`Páginas Angular publicadas: início, sobre, ${slugs.length} projetos e ${gallerySlugs.length} galerias.`);
