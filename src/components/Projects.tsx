"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import ProjectModal from "@/components/ProjectModal";
import { content, type Project } from "@/data/content";
import { useLanguage } from "@/lib/language";

const cardColors = ["bg-surface", "bg-accent-3", "bg-surface"];

export default function Projects() {
  const { lang } = useLanguage();
  const t = content[lang].projects;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="nb-border w-fit bg-accent-3 px-3 py-1 font-mono text-sm font-bold text-foreground">
          {t.label}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
          {t.heading}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {t.items.map((project, i) => {
          const clickable = !project.placeholder;
          return (
            <Reveal key={project.title} delay={0.1 + i * 0.08}>
              <div
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : undefined}
                onClick={clickable ? () => setActiveProject(project) : undefined}
                onKeyDown={
                  clickable
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveProject(project);
                        }
                      }
                    : undefined
                }
                aria-haspopup={clickable ? "dialog" : undefined}
                className={`nb-interactive flex h-full flex-col p-6 ${
                  clickable ? "cursor-pointer" : ""
                } ${
                  project.placeholder
                    ? "border-[3px] border-dashed border-border bg-transparent"
                    : `nb-border nb-shadow ${cardColors[i % cardColors.length]}`
                }`}
              >
                {project.placeholder && (
                  <span className="mb-3 w-fit bg-accent-1 px-2.5 py-0.5 text-xs font-black text-foreground">
                    {t.slotAvailable}
                  </span>
                )}
                <h3 className="text-lg font-black">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="nb-border bg-background px-2.5 py-1 text-xs font-bold text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {!project.placeholder && (
                  <div className="mt-5 flex gap-4 text-sm font-bold">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="underline decoration-2 underline-offset-2 hover:text-accent-2"
                      >
                        {t.demo}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="underline decoration-2 underline-offset-2 hover:text-accent-2"
                      >
                        {t.repo}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <ProjectModal
        project={activeProject}
        labels={{
          close: t.close,
          noImages: t.noImages,
          demo: t.demo,
          repo: t.repo,
        }}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
