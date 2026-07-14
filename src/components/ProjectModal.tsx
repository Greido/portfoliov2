"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "@/data/content";

type Labels = {
  close: string;
  noImages: string;
  demo: string;
  repo: string;
};

export default function ProjectModal({
  project,
  labels,
  onClose,
}: {
  project: Project | null;
  labels: Labels;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            key={project.title}
            className="nb-border nb-shadow relative max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-surface p-6"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={labels.close}
              className="nb-border nb-interactive absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center bg-accent-1 text-foreground"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <h3 className="pr-8 text-2xl font-black">{project.title}</h3>
            <p className="mt-2 text-sm font-medium text-muted">
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

            <div className="mt-6">
              {project.images.length > 0 ? (
                <>
                  <div className="nb-border aspect-video w-full overflow-hidden bg-background">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.images[activeImage]}
                      alt={`${project.title} screenshot ${activeImage + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {project.images.length > 1 && (
                    <div className="mt-3 flex gap-2 overflow-x-auto">
                      {project.images.map((src, i) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setActiveImage(i)}
                          className={`nb-border h-16 w-16 flex-shrink-0 overflow-hidden ${
                            i === activeImage ? "ring-2 ring-accent-2" : ""
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="nb-border flex aspect-video w-full items-center justify-center border-dashed bg-background px-4 text-center text-sm font-bold text-muted">
                  {labels.noImages}
                </div>
              )}
            </div>

            {(project.demoUrl || project.repoUrl) && (
              <div className="mt-6 flex gap-4 text-sm font-bold">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nb-border nb-shadow-sm nb-interactive bg-accent-1 px-4 py-2 text-foreground"
                  >
                    {labels.demo}
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nb-border nb-shadow-sm nb-interactive bg-surface px-4 py-2 text-foreground"
                  >
                    {labels.repo}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
