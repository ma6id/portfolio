import { ArrowRight, Github, Instagram, Facebook, Mail, Code2, Braces, TerminalSquare } from "lucide-react";
import { identity, socials } from "../content/fr";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative grid grid-cols-[1.1fr_0.9fr] gap-4 sm:gap-10 lg:gap-14 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="eyebrow">{identity.availability}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-semibold text-[clamp(1.75rem,6vw_+_0.5rem,3rem)] leading-[1.1] tracking-tight text-mist-100">
              {identity.role1}
              <br />
              <span className="text-gradient">{identity.role2}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-mist-300 text-sm sm:text-base leading-relaxed max-w-xl">
              {identity.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projets"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                Voir mes projets <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary"
              >
                Me contacter
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-3">
              {[
                { href: socials.github, icon: Github, label: "GitHub" },
                { href: socials.facebook, icon: Facebook, label: "Facebook" },
                { href: socials.instagram, icon: Instagram, label: "Instagram" },
                { href: `mailto:${identity.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-mist-500/25 flex items-center justify-center text-mist-300 hover:text-accent hover:border-accent/40 transition-colors focus-ring"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] aspect-square rounded-full bg-radial-glow animate-glow-pulse pointer-events-none" aria-hidden="true" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full bg-gradient-to-br from-cyan-400/30 via-azure-500/10 to-transparent blur-2xl pointer-events-none" aria-hidden="true" />

            <div className="flex items-center justify-center absolute -left-1 top-1 sm:-left-2 sm:top-2 w-[clamp(2rem,7vw,3rem)] h-[clamp(2rem,7vw,3rem)] rounded-2xl glass shadow-glow-sm z-20 animate-float-orbit-a">
              <Code2 className="text-cyan-300 w-[clamp(0.9rem,3vw,1.25rem)] h-[clamp(0.9rem,3vw,1.25rem)]" />
            </div>

            <div className="flex items-center justify-center absolute -right-1 top-10 sm:-right-3 sm:top-16 w-[clamp(2rem,7vw,3rem)] h-[clamp(2rem,7vw,3rem)] rounded-2xl glass shadow-glow-sm z-20 animate-float-orbit-b">
              <Braces className="text-cyan-300 w-[clamp(0.9rem,3vw,1.25rem)] h-[clamp(0.9rem,3vw,1.25rem)]" />
            </div>

            <div className="flex items-center justify-center absolute left-2 -bottom-1 sm:left-4 sm:-bottom-2 w-[clamp(2rem,7vw,3rem)] h-[clamp(2rem,7vw,3rem)] rounded-2xl glass shadow-glow-sm z-20 animate-float-orbit-c">
              <TerminalSquare className="text-cyan-300 w-[clamp(0.9rem,3vw,1.25rem)] h-[clamp(0.9rem,3vw,1.25rem)]" />
            </div>

            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/25 to-azure-500/15 bg-grid-pattern bg-[length:32px_32px] blur-xl animate-drift"
              aria-hidden="true"
            />
            <div className="absolute -inset-1 rounded-[2.1rem] bg-gradient-to-br from-cyan-400/40 via-transparent to-azure-500/40 blur-md animate-pulse" aria-hidden="true" />
            <div className="relative glass rounded-[2rem] p-3 shadow-glow animate-float overflow-hidden">
              <img
                src={identity.photo}
                alt={identity.name}
                className="relative rounded-[1.5rem] w-full aspect-[4/5] object-cover"
              />
              <div className="absolute top-4 right-4 font-mono text-[10px] text-cyan-300/60 animate-pulse" aria-hidden="true">
                {'</>'}
              </div>
              <div className="absolute bottom-6 left-4 font-mono text-[9px] text-cyan-300/40 animate-pulse" style={{ animationDelay: '0.6s' }} aria-hidden="true">
                01 10 11
              </div>
            </div>

            <div className="absolute -left-2 top-4 sm:-left-6 sm:top-8 glass rounded-xl px-2 py-1.5 sm:px-4 sm:py-3 shadow-glow-sm z-20">
              <p className="font-mono text-[clamp(7px,1.6vw,10px)] text-mist-500 uppercase tracking-wide">Stack</p>
              <p className="text-[clamp(10px,2.4vw,14px)] font-semibold text-mist-100 mt-0.5">React · Flutter</p>
            </div>

            <div className="absolute -right-2 bottom-6 sm:-right-6 sm:bottom-10 glass rounded-xl px-2 py-1.5 sm:px-4 sm:py-3 shadow-glow-sm z-20">
              <p className="font-mono text-[clamp(7px,1.6vw,10px)] text-mist-500 uppercase tracking-wide">Database</p>
              <p className="text-[clamp(10px,2.4vw,14px)] font-semibold text-mist-100 mt-0.5">PostgreSQL</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
