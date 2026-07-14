"use client";

import Reveal from "@/components/Reveal";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/language";

const chipColors = ["bg-accent-1", "bg-accent-2 text-background", "bg-surface-alt", "bg-accent-3"];

export default function Skills() {
  const { lang } = useLanguage();
  const t = content[lang].skills;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
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

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {t.groups.map((group, i) => (
          <Reveal key={group.title} delay={0.1 + i * 0.06}>
            <div className="nb-border nb-shadow h-full bg-surface p-6">
              <h3 className="font-mono text-sm font-black uppercase text-accent-2">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`nb-border px-3 py-1 text-sm font-bold text-foreground ${
                      chipColors[i % chipColors.length]
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
