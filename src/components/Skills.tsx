import { skillCategories } from "../content/fr";
import Reveal from "./Reveal";
import TechChip from "./TechChip";

export default function Skills() {
  return (
    <section className="py-24 border-t border-mist-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow mb-3">Profil technique</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-mist-100">
            Compétences
          </h2>
          <p className="text-mist-300 mt-4 max-w-2xl">
            Organisées par domaine plutôt qu'en simple liste — pour refléter la manière dont
            j'utilise réellement ces technologies dans mes projets.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <div className="glass glass-hover rounded-2xl p-6 h-full">
                <p className="eyebrow">{cat.eyebrow}</p>
                <h3 className="font-display font-semibold text-lg text-mist-100 mt-1.5 mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <TechChip key={s} name={s} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
