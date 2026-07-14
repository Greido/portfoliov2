import Reveal from "@/components/Reveal";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent-1">03 · Proyectos</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Cosas que he construido
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.1 + i * 0.08}>
            <div
              className={`group flex h-full flex-col rounded-2xl border p-6 transition-colors ${
                project.placeholder
                  ? "border-dashed border-border/80 bg-transparent"
                  : "border-border bg-background-alt hover:border-accent-1/50"
              }`}
            >
              {project.placeholder && (
                <span className="mb-3 w-fit rounded-full border border-accent-3/40 px-2.5 py-0.5 text-xs font-mono text-accent-3">
                  Espacio disponible
                </span>
              )}
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {!project.placeholder && (
                <div className="mt-5 flex gap-4 text-sm">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="text-accent-1 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      className="text-accent-1 hover:underline"
                    >
                      Repo
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
