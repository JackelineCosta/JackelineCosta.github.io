import { useLayoutEffect, useRef, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "./data/projects";

gsap.registerPlugin(ScrollTrigger);

const formatIndex = (index: number) => String(index + 1).padStart(2, "0");
const showcaseProjects = projects.filter((project) => project.pdfPages?.length || (project.linkExterno && project.imagens.length));

function ProjectsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const currentRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const panels = gsap.utils.toArray<HTMLElement>("[data-scroll-project]", section);
    const stickyArea = section.querySelector<HTMLElement>(".scroll-projects__sticky");
    if (!stickyArea) return;

    const updateState = (progress: number) => {
      const activeIndex = Math.min(showcaseProjects.length - 1, Math.round(progress * (showcaseProjects.length - 1)));
      if (currentRef.current) currentRef.current.textContent = formatIndex(activeIndex);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;

      panels.forEach((panel, index) => {
        const isActive = index === activeIndex;
        panel.setAttribute("aria-hidden", String(!isActive));
        panel.inert = !isActive;
        panel.style.pointerEvents = isActive ? "auto" : "none";
      });
    };

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.set(panels, { autoAlpha: 0, yPercent: 100 });
        gsap.set(panels[0], { autoAlpha: 1, yPercent: 0 });
        updateState(0);

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            scrub: 0.35,
            pin: stickyArea,
            pinSpacing: true,
            anticipatePin: 1,
            end: () => `+=${window.innerHeight * (showcaseProjects.length - 1)}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => updateState(self.progress)
          }
        });

        showcaseProjects.slice(1).forEach((project, index) => {
          const position = index;
          timeline
            .to(panels[index], { autoAlpha: 0, yPercent: -34, duration: 1 }, position)
            .fromTo(
              panels[index + 1],
              { autoAlpha: 0, yPercent: 100 },
              { autoAlpha: 1, yPercent: 0, duration: 1 },
              position
            )
            .to(
              section,
              {
                "--project-accent": project.tema?.accent ?? "#c9ff5a",
                backgroundColor: project.tema?.background ?? "#10140d",
                duration: 1
              },
              position
            );
        });

        return () => {
          panels.forEach((panel) => {
            panel.removeAttribute("aria-hidden");
            panel.inert = false;
            panel.style.pointerEvents = "";
          });
        };
      });

      media.add("(max-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        panels.forEach((panel) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: "top 92%",
              end: "bottom 8%",
              scrub: 0.25
            }
          })
            .fromTo(panel, { autoAlpha: 0.45, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.24, ease: "none" })
            .to(panel, { autoAlpha: 0.62, y: -12, duration: 0.18, ease: "none" }, 0.82);
        });

        ScrollTrigger.create({
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          onUpdate: (self) => {
            const progress = Math.max(0, Math.min(1, self.progress));
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
            if (currentRef.current) {
              const activeIndex = Math.min(showcaseProjects.length - 1, Math.floor(progress * showcaseProjects.length));
              currentRef.current.textContent = formatIndex(activeIndex);
            }
          }
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        panels.forEach((panel) => {
          panel.removeAttribute("aria-hidden");
          panel.inert = false;
          panel.style.pointerEvents = "auto";
        });
        if (progressRef.current) progressRef.current.style.transform = "scaleX(1)";
      });

    }, section);

    return () => {
      media.revert();
      context.revert();
      panels.forEach((panel) => {
        panel.removeAttribute("aria-hidden");
        panel.inert = false;
        panel.style.pointerEvents = "";
      });
    };
  }, []);

  const sectionStyle = {
    "--project-count": showcaseProjects.length,
    "--project-accent": showcaseProjects[0]?.tema?.accent ?? "#c9ff5a",
    backgroundColor: showcaseProjects[0]?.tema?.background ?? "#10140d"
  } as CSSProperties;

  return (
    <section className="scroll-projects" id="projetos" ref={sectionRef} style={sectionStyle} aria-labelledby="scroll-projects-title">
      <div className="scroll-projects__sticky">
        <div className="container scroll-projects__shell">
          <header className="scroll-projects__header">
            <div>
              <p className="eyebrow">02 · Projetos selecionados</p>
              <h2 id="scroll-projects-title">Projetos</h2>
            </div>
            <div className="scroll-projects__counter" aria-label="Projeto atual">
              <span ref={currentRef}>01</span>
              <span aria-hidden="true"> / </span>
              <span>{formatIndex(showcaseProjects.length - 1)}</span>
            </div>
          </header>

          <div className="scroll-projects__progress" aria-hidden="true">
            <span ref={progressRef} />
          </div>

          <div className="scroll-projects__stage">
            {showcaseProjects.map((project, index) => (
              <article className="scroll-projects__panel" data-scroll-project key={project.slug}>
                <div className="scroll-projects__content">
                  <p className="scroll-projects__meta">
                    <span>{formatIndex(index)}</span>
                    <span>{project.categoriaLabel}</span>
                    <span>{project.ano}</span>
                  </p>
                  <h3>{project.titulo}</h3>
                  {project.descricao && <p className="scroll-projects__description">{project.descricao}</p>}
                  <dl className="scroll-projects__role">
                    <dt>Função</dt>
                    <dd>{project.papel}</dd>
                  </dl>
                  <ul className="scroll-projects__skills" aria-label="Competências">
                    {project.competencias?.map((competencia) => <li key={competencia}>{competencia}</li>)}
                  </ul>
                  <a className="button" href={`projetos/${project.slug}/`}>
                    Abrir projeto <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="scroll-projects__visual" style={{ "--card-accent": project.tema?.accent ?? "#c9ff5a" } as CSSProperties}>
                  {project.imagens?.[0] ? (
                    <img src={project.imagens[0].src} alt={project.imagens[0].alt} loading={index === 0 ? "eager" : "lazy"} />
                  ) : project.pdfPages?.[0] ? (
                    <img src={project.pdfPages[0].src} alt={project.pdfPages[0].alt} loading={index === 0 ? "eager" : "lazy"} />
                  ) : (
                    <div className="scroll-projects__mockup" aria-hidden="true">
                      <div className="scroll-projects__mockup-bar"><span /><span /><span /></div>
                      <div className="scroll-projects__mockup-body">
                        <span className="scroll-projects__mockup-label">{project.categoriaLabel}</span>
                        <strong>{project.titulo}</strong>
                        <span className="scroll-projects__mockup-line" />
                        <span className="scroll-projects__mockup-line scroll-projects__mockup-line-short" />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <a className="scroll-projects__all" href="projetos/">Ver todos os projetos <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}

const rootElement = document.querySelector<HTMLElement>("#scroll-projects-root");
if (rootElement) createRoot(rootElement).render(<ProjectsShowcase />);
