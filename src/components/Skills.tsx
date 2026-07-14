import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent-1">02 · Skills</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Con qué trabajo
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={0.1 + i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-background-alt p-6 transition-colors hover:border-accent-1/50">
              <h3 className="text-sm font-mono text-accent-2">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted"
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
