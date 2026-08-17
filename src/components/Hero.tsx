import { ArrowRight, Github, Instagram, Facebook, Mail } from "lucide-react";
import { identity, socials } from "../content/fr";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="eyebrow">{identity.availability}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-mist-100">
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
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 to-azure-500/10 blur-2xl" />
            <div className="relative glass rounded-[2rem] p-3 shadow-glow animate-float overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 bg-grid-pattern bg-[length:28px_28px] animate-drift pointer-events-none"
                aria-hidden="true"
              />
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

            <div className="absolute -left-6 top-8 glass rounded-xl px-4 py-3 shadow-glow-sm hidden sm:block">
              <p className="font-mono text-[10px] text-mist-500 uppercase tracking-wide">Stack</p>
              <p className="text-sm font-semibold text-mist-100 mt-0.5">React · Flutter</p>
            </div>

            <div className="absolute -right-6 bottom-10 glass rounded-xl px-4 py-3 shadow-glow-sm hidden sm:block">
              <p className="font-mono text-[10px] text-mist-500 uppercase tracking-wide">Database</p>
              <p className="text-sm font-semibold text-mist-100 mt-0.5">PostgreSQL</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
