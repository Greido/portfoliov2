"use client";

import { useLanguage } from "@/lib/language";
import type { Lang } from "@/data/content";

const options: Lang[] = ["en", "es"];

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="nb-border flex bg-surface text-xs font-black">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`px-2.5 py-1.5 uppercase transition-colors ${
            lang === option
              ? "bg-accent-1 text-foreground"
              : "text-foreground hover:bg-surface-alt"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
