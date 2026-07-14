import Reveal from "@/components/Reveal";
import { profile } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent-1">05 · Contacto</p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Hablemos
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-6 max-w-xl text-lg text-muted">
          ¿Tienes una idea, un proyecto o una vacante en mente? Escríbeme, con
          gusto lo conversamos.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            {profile.email}
          </a>
          <a
            href={profile.socials.linkedin}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-1 hover:text-accent-1"
          >
            LinkedIn
          </a>
          <a
            href={profile.socials.github}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-1 hover:text-accent-1"
          >
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
