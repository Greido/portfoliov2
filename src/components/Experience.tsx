"use client";

import Reveal from "@/components/Reveal";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/language";

export default function Experience() {
  const { lang } = useLanguage();
  const t = content[lang].experience;

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
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

      <div className="mt-12 flex flex-col gap-6">
        {t.items.map((item, i) => (
          <Reveal key={i} delay={0.1 + i * 0.08}>
            <div className="nb-border nb-shadow grid gap-2 bg-surface p-6 sm:grid-cols-[220px_1fr] sm:gap-8">
              <span className="nb-border w-fit bg-accent-1 px-2 py-1 font-mono text-sm font-black text-foreground">
                {item.period}
              </span>
              <div>
                <h3 className="text-lg font-black">
                  {item.role}{" "}
                  <span className="text-muted">— {item.organization}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
