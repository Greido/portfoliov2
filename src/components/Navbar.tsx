"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/site";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          JPCB<span className="text-accent-1">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          className="hidden rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent-1 hover:text-accent-1 md:inline-block"
        >
          CV
        </a>

        <details className="md:hidden">
          <summary className="list-none cursor-pointer rounded-full border border-border p-2 text-foreground">
            <span className="sr-only">Menú</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div className="absolute right-6 mt-2 flex flex-col gap-1 rounded-xl border border-border bg-background-alt p-3 shadow-xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              className="rounded-lg px-3 py-2 text-sm text-accent-1 hover:bg-white/5"
            >
              Descargar CV
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
