import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Hecho con Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
