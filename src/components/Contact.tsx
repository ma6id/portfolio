import { useState } from "react";
import { Mail, Phone, MapPin, Github, Send } from "lucide-react";
import { identity, socials } from "../content/fr";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  // Envoi via la route API /api/contact (fonction serverless Vercel), qui
  // relaie le message par turboSMTP. Les identifiants SMTP restent côté
  // serveur (variables d'environnement Vercel) et ne sont jamais exposés au
  // navigateur.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    setSending(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const items = [
    { icon: Mail, label: "Email", value: identity.email, href: `mailto:${identity.email}` },
    { icon: Phone, label: "Téléphone", value: identity.phone, href: `tel:${identity.phone}` },
    { icon: MapPin, label: "Localisation", value: identity.location, href: undefined },
    { icon: Github, label: "GitHub", value: "github.com/ma6id", href: socials.github },
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
              <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
                <Send size={15} /> {sending ? "Envoi en cours..." : "Envoyer le message"}
              </button>
              {sent && (
                <p className="text-xs text-accent font-mono text-center">
                  Message envoyé avec succès. Je vous répondrai rapidement.
                </p>
              )}
              {error && (
                <p className="text-xs text-red-400 font-mono text-center">
                  Une erreur est survenue. Réessayez ou écrivez directement à {identity.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
