import { Github, Facebook, Instagram, Mail } from "lucide-react";
import { identity, socials, nav } from "../content/fr";

export default function Footer() {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-mist-500/10 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-azure-500 flex items-center justify-center text-ink-onaccent font-bold text-sm font-mono">
            {identity.initials}
          </span>
          <span className="text-mist-300 text-sm">
            © {new Date().getFullYear()} {identity.name} — Tous droits réservés.
          </span>
        </div>

        <nav className="flex items-center gap-5 font-mono text-xs text-mist-400">
          {nav.map((n) => (
            <button key={n.id} onClick={() => goTo(n.id)} className="hover:text-cyan-300 transition-colors">
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[
            { href: socials.github, icon: Github },
            { href: socials.facebook, icon: Facebook },
            { href: socials.instagram, icon: Instagram },
            { href: `mailto:${identity.email}`, icon: Mail },
          ].map(({ href, icon: Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-mist-500/20 flex items-center justify-center text-mist-400 hover:text-cyan-300 hover:border-cyan-300/40 transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
