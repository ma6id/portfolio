import { GraduationCap } from "lucide-react";
import { education } from "../content/fr";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="py-24 border-t border-mist-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow mb-3">Parcours académique</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-mist-100">
            Ma formation
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100}>
              <div className="glass glass-hover rounded-2xl p-7 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-mist-100">{e.degree}</h3>
                    <p className="text-mist-300 text-sm mt-1">{e.school}</p>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="chip">{e.period}</span>
                      <span className="chip">{e.status}</span>
                    </div>
                  </div>
                </div>
                {e.details.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {e.details.map((d) => (
                      <span
                        key={d}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-ink-800/60 text-mist-300 border border-mist-500/10"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
