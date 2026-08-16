import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { identity, socials } from "../content/fr";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // NOTE : aucun backend n'est encore configuré. Ce formulaire ouvre un e-mail
  // pré-rempli via mailto: en solution simple et fiable par défaut.
  // Pour un envoi direct sans quitter la page, brancher ce formulaire sur un
  // service comme Formspree, EmailJS ou une route API dédiée, puis remplacer
  // handleSubmit ci-dessous par l'appel réseau correspondant.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Contact portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const items = [
    { icon: Mail, label: "Email", value: identity.email, href: `mailto:${identity.email}` },
    { icon: Phone, label: "Téléphone", value: identity.phone, href: `tel:${identity.phone}` },
    { icon: MapPin, label: "Localisation", value: identity.location, href: undefined },
    { icon: Github, label: "GitHub", value: "github.com/ma6id", href: socials.github },
    { icon: Linkedin, label: "LinkedIn", value: socials.linkedin, href: socials.linkedin },
  ];

  return (
    <section id="contact" className="py-24 border-t border-mist-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow mb-3">Prenons contact</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-mist-100">
            Travaillons ensemble
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass rounded-2xl p-8 h-full">
              <div className="space-y-5">
                {items.map((it) => (
                  <div key={it.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <it.icon size={17} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-mist-500 uppercase tracking-wide">
                        {it.label}
                      </p>
                      {it.href ? (
                        <a
                          href={it.href}
                          target={it.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-mist-100 hover:text-accent transition-colors break-all"
                        >
                          {it.value}
                        </a>
                      ) : (
                        <p className="text-mist-100">{it.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  placeholder="Votre nom"
                  className="w-full rounded-xl bg-ink-800/60 border border-mist-500/15 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:outline-none focus:border-accent/50 transition-colors"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="w-full rounded-xl bg-ink-800/60 border border-mist-500/15 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <input
                required
                name="subject"
                placeholder="Sujet"
                className="w-full rounded-xl bg-ink-800/60 border border-mist-500/15 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:outline-none focus:border-accent/50 transition-colors"
              />
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Votre message"
                className="w-full rounded-xl bg-ink-800/60 border border-mist-500/15 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={15} /> Envoyer le message
              </button>
              {sent && (
                <p className="text-xs text-accent font-mono text-center">
                  Votre client mail s'est ouvert avec le message pré-rempli.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
