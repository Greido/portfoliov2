"use client";

import Reveal from "@/components/Reveal";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/language";

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
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

      <div className="mt-8 flex flex-col gap-5">
        {t.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={0.15 + i * 0.05}>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-muted">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
