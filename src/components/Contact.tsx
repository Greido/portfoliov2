"use client";

import Reveal from "@/components/Reveal";
import { content, profile } from "@/data/content";
import { useLanguage } from "@/lib/language";

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
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

      <Reveal delay={0.15}>
        <p className="mt-6 max-w-xl text-lg font-medium text-muted">
          {t.body}
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="nb-border nb-shadow nb-interactive bg-foreground px-6 py-3 text-sm font-black text-background"
          >
            {profile.email}
          </a>
          <a
            href={profile.socials.linkedin}
            className="nb-border nb-shadow nb-interactive bg-accent-1 px-6 py-3 text-sm font-black text-foreground"
          >
            {t.linkedinLabel}
          </a>
          <a
            href={profile.socials.github}
            className="nb-border nb-shadow nb-interactive bg-surface px-6 py-3 text-sm font-black text-foreground"
          >
            {t.githubLabel}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
