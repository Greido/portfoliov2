"use client";

import { useEffect, useState } from "react";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/language";
import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b-[3px] border-border bg-background transition-shadow duration-200 ${
        scrolled ? "shadow-[0_4px_0_0_var(--border)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-mono text-lg font-black tracking-tight text-foreground"
        >
          JPCB<span className="text-accent-2">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-bold text-foreground transition-colors hover:bg-surface-alt"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <a
            href={t.nav.resumeUrl}
            download
            className="nb-border nb-shadow-sm nb-interactive bg-accent-1 px-4 py-2 text-sm font-black text-foreground"
          >
            {t.nav.cv}
          </a>
        </div>

        <details className="md:hidden">
          <summary className="nb-border nb-shadow-sm list-none cursor-pointer bg-surface p-2 text-foreground">
            <span className="sr-only">{t.nav.menuLabel}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div className="nb-border nb-shadow absolute right-6 mt-2 flex flex-col gap-3 bg-surface p-3">
            <LanguageToggle />
            <div className="flex flex-col gap-1">
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-bold text-foreground hover:bg-surface-alt"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={t.nav.resumeUrl}
                download
                className="rounded-md px-3 py-2 text-sm font-bold text-accent-2 hover:bg-surface-alt"
              >
                {t.nav.downloadCv}
              </a>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
