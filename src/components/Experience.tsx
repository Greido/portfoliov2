import Reveal from "@/components/Reveal";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent-1">04 · Experiencia</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Dónde he estado
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col">
        {experience.map((item, i) => (
          <Reveal key={i} delay={0.1 + i * 0.08}>
            <div className="grid gap-2 border-t border-border py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
              <span className="font-mono text-sm text-muted">
                {item.period}
              </span>
              <div>
                <h3 className="text-lg font-semibold">
                  {item.role}{" "}
                  <span className="text-muted">— {item.organization}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
