import { processSteps } from "../content/fr";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="py-24 border-t border-mist-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow mb-3">Méthode de travail</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-mist-100">
            Processus de développement
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 relative">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="relative pl-1">
                <span className="tag-num block mb-3">{s.n}</span>
                <h3 className="font-display font-semibold text-lg text-mist-100">{s.title}</h3>
                <p className="text-mist-300 text-sm mt-2 leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
