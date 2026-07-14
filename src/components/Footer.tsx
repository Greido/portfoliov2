"use client";

import { content, profile } from "@/data/content";
import { useLanguage } from "@/lib/language";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang].footer;

  return (
    <footer className="border-t-[3px] border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm font-bold text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">{t.madeWith}</p>
      </div>
    </footer>
  );
}
