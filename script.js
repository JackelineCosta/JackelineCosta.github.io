const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");
const carousel = document.querySelector("[data-carousel]");

const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Abrir menu";
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
    return;
  }

  menuButton.setAttribute("aria-expanded", "true");
  menuButton.querySelector(".sr-only").textContent = "Fechar menu";
  navigation.classList.add("is-open");
  document.body.classList.add("menu-open");
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) closeMenu();
});

window.addEventListener(
  "scroll",
  () => header.classList.toggle("is-scrolled", window.scrollY > 16),
  { passive: true }
);

if (carousel) {
  const viewport = carousel.querySelector("[data-carousel-viewport]");
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = [...carousel.querySelectorAll("[data-carousel-slide]")];
  const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];
  const previousButton = carousel.querySelector("[data-carousel-previous]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const status = carousel.querySelector("[data-carousel-status]");
  let activeIndex = 0;
  let trackIndex = 1;
  let isAnimating = false;
  let transitionFallback;
  let touchStartX = 0;

  const prepareClone = (slide) => {
    const clone = slide.cloneNode(true);
    clone.removeAttribute("data-carousel-slide");
    clone.classList.remove("is-active");
    clone.setAttribute("aria-hidden", "true");
    clone.setAttribute("inert", "");
    clone.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
    return clone;
  };

  const lastSlideClone = prepareClone(slides[slides.length - 1]);
  const firstSlideClone = prepareClone(slides[0]);
  track.prepend(lastSlideClone);
  track.append(firstSlideClone);
  const trackSlides = [lastSlideClone, ...slides, firstSlideClone];

  const positionTrack = (position) => {
    track.style.transform = `translate3d(-${position * 100}%, 0, 0) translate3d(-${position}rem, 0, 0)`;
  };

  const updateState = () => {
    trackSlides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === trackIndex);
    });

    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      if (isActive) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });

    status.textContent = `Destaque ${activeIndex + 1} de ${slides.length}`;
  };

  const finishTransition = () => {
    window.clearTimeout(transitionFallback);

    if (trackIndex === 0) trackIndex = slides.length;
    if (trackIndex === slides.length + 1) trackIndex = 1;

    track.classList.add("is-jumping");
    positionTrack(trackIndex);
    track.getBoundingClientRect();
    track.classList.remove("is-jumping");
    updateState();
    isAnimating = false;
  };

  const moveBy = (direction) => {
    if (isAnimating) return;

    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    trackIndex += direction;
    isAnimating = true;
    updateState();
    positionTrack(trackIndex);
    transitionFallback = window.setTimeout(finishTransition, 700);
  };

  const showSlide = (requestedIndex) => {
    if (isAnimating) return;

    const nextIndex = (requestedIndex + slides.length) % slides.length;
    if (nextIndex === activeIndex) return;

    activeIndex = nextIndex;
    trackIndex = activeIndex + 1;
    isAnimating = true;
    updateState();
    positionTrack(trackIndex);
    transitionFallback = window.setTimeout(finishTransition, 700);
  };

  track.classList.add("is-jumping");
  positionTrack(trackIndex);
  track.getBoundingClientRect();
  track.classList.remove("is-jumping");

  track.addEventListener("transitionend", (event) => {
    if (event.target === track && event.propertyName === "transform") finishTransition();
  });

  previousButton.addEventListener("click", () => moveBy(-1));
  nextButton.addEventListener("click", () => moveBy(1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => showSlide(Number(dot.dataset.carouselDot)));
  });

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveBy(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveBy(1);
    }
  });

  viewport.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchend",
    (event) => {
      const distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) < 50) return;
      moveBy(distance < 0 ? 1 : -1);
    },
    { passive: true }
  );
}

const basePath = document.documentElement.dataset.base || "";
const projectGrid = document.querySelector("[data-project-grid]");
const projectDialog = document.querySelector("[data-project-dialog]");
const projectDialogContent = document.querySelector("[data-project-dialog-content]");
const projectDialogClose = document.querySelector("[data-project-dialog-close]");
let projectData = [];

const escapeHtml = (value = "") =>
  String(value).replace(
    /[&<>"]/g,
    (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]
  );

const projectUrl = (project) => `${basePath}projetos/${project.slug}/`;

const projectCard = (project) => {
  const cover = project.imagens?.[0]
    ? `<img src="${basePath}${escapeHtml(project.imagens[0].src)}" alt="${escapeHtml(project.imagens[0].alt)}" loading="lazy">`
    : `<span class="project-placeholder" data-category="${escapeHtml(project.categoria)}"><span>${escapeHtml(project.categoriaLabel)}</span></span>`;
  const metadata = [project.categoriaLabel, project.ano, project.status].filter(Boolean).map(escapeHtml).join(" · ");
  const secondaryFilters = [...(project.classificacoes || []), project.estado].filter(Boolean).join(" ");

  return `<article class="project-data-card" data-project-category="${escapeHtml(project.categoria)}" data-project-secondary="${escapeHtml(secondaryFilters)}">
    <a class="project-data-media" href="${projectUrl(project)}">${cover}</a>
    <div class="project-data-content">
      <p class="project-data-meta">${metadata}</p>
      <h3><a href="${projectUrl(project)}">${escapeHtml(project.titulo)}</a></h3>
      ${project.descricao ? `<p>${escapeHtml(project.descricao)}</p>` : ""}
      <div class="project-data-actions">
        <button type="button" data-project-preview="${escapeHtml(project.slug)}">Ver prévia</button>
        <a href="${projectUrl(project)}">Abrir projeto <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </article>`;
};

const openProjectPreview = (project) => {
  if (!projectDialog || !projectDialogContent) return;
  const previewMedia = project.imagens?.length
    ? `<div class="dialog-project-gallery">${project.imagens.slice(0, 3).map((image) => `<img class="dialog-project-image" src="${basePath}${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}">`).join("")}</div>`
    : `<div class="dialog-project-placeholder project-placeholder" data-category="${escapeHtml(project.categoria)}" aria-hidden="true"><span>${escapeHtml(project.categoriaLabel)}</span></div>`;
  const facts = [
    project.status ? `<div><dt>Status</dt><dd>${escapeHtml(project.status)}</dd></div>` : "",
    project.papel ? `<div><dt>Participação</dt><dd>${escapeHtml(project.papel)}</dd></div>` : ""
  ].filter(Boolean).join("");
  const actions = [
    `<a class="button" href="${projectUrl(project)}">Ver estudo completo</a>`,
    project.pdf ? `<a class="text-link" href="${basePath}${escapeHtml(project.pdf)}" target="_blank">Abrir PDF ↗</a>` : "",
    project.linkExterno ? `<a class="text-link" href="${escapeHtml(project.linkExterno)}" target="_blank" rel="noreferrer">Visitar projeto ↗</a>` : ""
  ].filter(Boolean).join("");

  projectDialogContent.innerHTML = `
    ${previewMedia}<div class="dialog-project-content">
      <p class="eyebrow">${escapeHtml(project.categoriaLabel)}${project.ano ? ` · ${escapeHtml(project.ano)}` : ""}</p>
      <h2 id="preview-title">${escapeHtml(project.titulo)}</h2>
      ${project.descricao ? `<p class="dialog-description">${escapeHtml(project.descricao)}</p>` : ""}
      ${facts ? `<dl class="dialog-facts">${facts}</dl>` : ""}
      ${project.contexto ? `<p>${escapeHtml(project.contexto)}</p>` : ""}
      <div class="dialog-actions">${actions}</div>
    </div>`;
  projectDialog.showModal();
  projectDialogClose?.focus();
};

document.addEventListener("click", (event) => {
  const previewButton = event.target.closest("[data-project-preview]");
  if (!previewButton) return;
  const project = projectData.find((item) => item.slug === previewButton.dataset.projectPreview);
  if (project) openProjectPreview(project);
});

projectDialogClose?.addEventListener("click", () => projectDialog.close());
projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

const setupProjectFilters = () => {
  const filters = document.querySelector("[data-project-filters]");
  const emptyState = document.querySelector("[data-project-empty]");
  const projectCount = document.querySelector("[data-project-count]");
  if (!filters || !projectGrid) return;
  const primarySelect = filters.querySelector("[data-primary-filter-select]");
  const secondarySelect = filters.querySelector("[data-secondary-filter-select]");
  let selectedPrimary = primarySelect?.value || "todos";
  let selectedSecondary = secondarySelect?.value || "todos";

  const applyFilters = () => {
    let visibleCount = 0;
    projectGrid.querySelectorAll("[data-project-category]").forEach((card) => {
      const matchesPrimary = selectedPrimary === "todos" || card.dataset.projectCategory === selectedPrimary;
      const secondaryValues = (card.dataset.projectSecondary || "").split(" ");
      const matchesSecondary = selectedSecondary === "todos" || secondaryValues.includes(selectedSecondary);
      const visible = matchesPrimary && matchesSecondary;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    emptyState.hidden = visibleCount > 0;
    if (projectCount) projectCount.textContent = `${visibleCount} ${visibleCount === 1 ? "projeto" : "projetos"}`;
  };

  primarySelect?.addEventListener("change", () => {
    selectedPrimary = primarySelect.value;
    applyFilters();
  });

  secondarySelect?.addEventListener("change", () => {
    selectedSecondary = secondarySelect.value;
    applyFilters();
  });

  applyFilters();
};

if (projectGrid) {
  fetch(`${basePath}data/projects.json`)
    .then((response) => {
      if (!response.ok) throw new Error("Não foi possível carregar os projetos.");
      return response.json();
    })
    .then((projects) => {
      projectData = projects;
      projectGrid.innerHTML = projects.map(projectCard).join("");
      setupProjectFilters();
    })
    .catch(() => {
      projectGrid.innerHTML = '<p class="empty-state">Não foi possível carregar os projetos agora.</p>';
    });
}
