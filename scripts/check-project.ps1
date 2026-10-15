$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$projectRoot = Split-Path -Parent $PSScriptRoot
$requiredFiles = @(
  "index.html",
  "projetos/index.html",
  "experiencia/index.html",
  "processo/index.html",
  "sobre/index.html",
  "contato/index.html",
  "styles.css",
  "script.js",
  "data/projects.json",
  "scripts/build-project-pages.ts",
  "src/data/projects.ts",
  "src/projects-showcase.tsx",
  "assets/js/projects-showcase.js",
  "jackeline-costa.pdf",
  "assets/images/favicon.svg",
  "assets/images/jackeline-costa-logo.svg",
  "assets/images/jackeline-costa-hero.jpg",
  "assets/images/jackeline-costa.jpg",
  "assets/images/experiencia-sebrae.jpg",
  "assets/images/macucultura-territorio.jpg",
  "assets/images/projeto-equilibre-se-preview.avif",
  "assets/images/projeto-equilibre-se-tela.avif",
  "assets/images/ux-workspace.webp"
)

$failures = [System.Collections.Generic.List[string]]::new()

foreach ($relativePath in $requiredFiles) {
  $fullPath = Join-Path $projectRoot $relativePath
  if (-not (Test-Path -LiteralPath $fullPath -PathType Leaf)) {
    $failures.Add("Arquivo obrigatório ausente: $relativePath")
  }
}

$sourceFiles = Get-ChildItem -LiteralPath $projectRoot -File -Recurse |
  Where-Object {
    $_.Extension -in @(".html", ".css", ".js", ".mjs", ".ts", ".tsx") -and
    $_.FullName -notmatch "[\\/]\.git[\\/]" -and
    $_.FullName -notmatch "[\\/]node_modules[\\/]"
  }

$technicalPatterns = @(
  "framerusercontent.com",
  "data-framer",
  "__framer",
  "edit.framer.com",
  "malito:"
)

foreach ($pattern in $technicalPatterns) {
  $matches = $sourceFiles | Select-String -SimpleMatch -Pattern $pattern
  if ($matches) {
    $locations = ($matches | ForEach-Object { "$($_.Path):$($_.LineNumber)" }) -join ", "
    $failures.Add("Referência indesejada '$pattern' encontrada em: $locations")
  }
}

foreach ($htmlFile in ($sourceFiles | Where-Object { $_.Extension -eq ".html" })) {
  $html = Get-Content -Raw -Encoding UTF8 -LiteralPath $htmlFile.FullName
  $localReferences = [regex]::Matches($html, '(?:src|href)="((?!https?:|mailto:|tel:|#)[^"]+)"')

  foreach ($match in $localReferences) {
    $reference = ($match.Groups[1].Value -split "[?#]", 2)[0]
    if ([string]::IsNullOrWhiteSpace($reference)) { continue }

    $referencedPath = Join-Path $htmlFile.DirectoryName $reference
    if (-not (Test-Path -LiteralPath $referencedPath)) {
      $relativeHtmlPath = $htmlFile.FullName.Substring($projectRoot.Length + 1)
      $failures.Add("Referência local quebrada em ${relativeHtmlPath}: $reference")
    }
  }
}

$projectsPath = Join-Path $projectRoot "data/projects.json"
if (Test-Path -LiteralPath $projectsPath -PathType Leaf) {
  try {
    $projects = Get-Content -Raw -Encoding UTF8 -LiteralPath $projectsPath | ConvertFrom-Json
  }
  catch {
    $failures.Add("data/projects.json não contém JSON válido: $($_.Exception.Message)")
    $projects = @()
  }

  $requiredProjectFields = @(
    "slug", "titulo", "categoria", "categoriaLabel", "imagens", "destaque"
  )
  $allowedCategories = @(
    "produtos-digitais", "sites-ecommerce", "cultura-comunicacao", "portfolios",
    "projetos-conceituais", "inteligencia-artificial"
  )
  $seenSlugs = @{}
  $allowedClassifications = @(
    "projeto-autoral", "trabalho-profissional", "projeto-academico", "projeto-comunitario"
  )
  $allowedStates = @("em-desenvolvimento", "concluido")

  foreach ($project in $projects) {
    foreach ($field in $requiredProjectFields) {
      if ($project.PSObject.Properties.Name -notcontains $field) {
        $failures.Add("Campo '$field' ausente no projeto '$($project.slug)'.")
      }
    }

    if ($project.slug -notmatch '^[a-z0-9]+(?:-[a-z0-9]+)*$') {
      $failures.Add("Slug inválido: '$($project.slug)'.")
    }
    if ($seenSlugs.ContainsKey($project.slug)) {
      $failures.Add("Slug duplicado: '$($project.slug)'.")
    }
    $seenSlugs[$project.slug] = $true

    if ($project.categoria -notin $allowedCategories) {
      $failures.Add("Categoria inválida em '$($project.slug)': '$($project.categoria)'.")
    }

    foreach ($classification in $project.classificacoes) {
      if ($classification -notin $allowedClassifications) {
        $failures.Add("Classificação inválida em '$($project.slug)': '$classification'.")
      }
    }
    if ($project.estado -and $project.estado -notin $allowedStates) {
      $failures.Add("Estado inválido em '$($project.slug)': '$($project.estado)'.")
    }

    $projectPage = Join-Path $projectRoot "projetos/$($project.slug)/index.html"
    if (-not (Test-Path -LiteralPath $projectPage -PathType Leaf)) {
      $failures.Add("Página não gerada para o projeto '$($project.slug)'.")
    }

    foreach ($image in $project.imagens) {
      $imagePath = Join-Path $projectRoot $image.src
      if (-not (Test-Path -LiteralPath $imagePath -PathType Leaf)) {
        $failures.Add("Imagem ausente no projeto '$($project.slug)': '$($image.src)'.")
      }
    }

    if ($project.pdf) {
      $pdfPath = Join-Path $projectRoot $project.pdf
      if (-not (Test-Path -LiteralPath $pdfPath -PathType Leaf)) {
        $failures.Add("PDF ausente no projeto '$($project.slug)': '$($project.pdf)'.")
      }
    }
  }
}

if ($failures.Count -gt 0) {
  Write-Host "Falha na validação:" -ForegroundColor Red
  $failures | ForEach-Object { Write-Host "- $_" -ForegroundColor Red }
  exit 1
}

Write-Host "Projeto validado com sucesso." -ForegroundColor Green
Write-Host "Arquivos, dados, páginas geradas, links locais e referências técnicas: OK"
