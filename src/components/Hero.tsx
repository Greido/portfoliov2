"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { content, profile } from "@/data/content";
import { useLanguage } from "@/lib/language";

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.67 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.4-2.7 5.38-5.27 5.66.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.5 8.75h6.9V21h-6.9V8.75Zm10.3 0h6.6v1.68h.1c.92-1.65 3.17-3.4 6.52-3.4 6.98 0 8.27 4.4 8.27 10.13V21h-6.9v-6.03c0-1.44-.03-3.28-2-3.28-2 0-2.31 1.56-2.31 3.17V21h-6.9V8.75Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setRoleIndex(0);
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % t.hero.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, [t.hero.roles.length]);

  const role = t.hero.roles[roleIndex] ?? t.hero.roles[0];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="nb-dots pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
        <motion.span
          initial={{ opacity: 0, y: 10, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.5 }}
          className="nb-border nb-shadow-sm w-fit bg-accent-1 px-4 py-1.5 font-mono text-sm font-bold text-foreground"
        >
          {t.hero.greeting}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={role}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="nb-border inline-block bg-accent-2 px-4 py-2 text-xl font-black text-background sm:text-2xl"
            >
              {role}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-xl text-lg font-medium text-muted"
        >
          {t.hero.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="nb-border nb-shadow nb-interactive bg-foreground px-6 py-3 text-sm font-black text-background"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="nb-border nb-shadow nb-interactive bg-surface px-6 py-3 text-sm font-black text-foreground"
          >
            {t.hero.contact}
          </a>

          <div className="ml-2 flex items-center gap-3">
            <a
              href={profile.socials.github}
              className="nb-border nb-interactive flex h-10 w-10 items-center justify-center bg-surface text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.socials.linkedin}
              className="nb-border nb-interactive flex h-10 w-10 items-center justify-center bg-surface text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="nb-border nb-interactive flex h-10 w-10 items-center justify-center bg-surface text-foreground"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
