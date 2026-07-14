import Reveal from "@/components/Reveal";
import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent-1">01 · Sobre mí</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Un poco de contexto
        </h2>
      </Reveal>

      <div className="mt-8 flex flex-col gap-5">
        {about.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={0.15 + i * 0.05}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
