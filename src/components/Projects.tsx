import { useMemo, useState } from "react";
import { ExternalLink, Github, LayoutGrid } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "../content/fr";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

const filters: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "fullstack", label: "Full Stack" },
  { key: "mobile", label: "Mobile" },
  { key: "data", label: "Data" },
  { key: "ai", label: "AI" },
  { key: "uiux", label: "UI/UX" },
];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  return (
    <section id="projets" className="py-24 border-t border-mist-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">Réalisations</p>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-mist-100">
                Projets
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors focus-ring ${
                    filter === f.key
                      ? "border-accent/50 text-accent bg-accent/10"
                      : "border-mist-500/20 text-mist-300 hover:text-mist-100 hover:border-mist-500/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <button
                onClick={() => setSelected(p)}
                className="text-left w-full glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col focus-ring"
              >
                <div className="aspect-[16/10] bg-ink-800/60 flex items-center justify-center relative overflow-hidden">
                  {p.cover ? (
                    <img
                      src={p.cover}
                      alt={p.name}
                      className={
                        p.coverFit === "cover"
                          ? "w-full h-full object-cover"
                          : "w-24 h-24 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                      }
                    />
                  ) : (
                    <LayoutGrid className="text-mist-500" size={32} />
                  )}
                  <span className="absolute top-3 right-3 chip">{p.status}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-mist-100">{p.name}</h3>
                  <p className="text-mist-300 text-sm mt-2 leading-relaxed flex-1">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.stack
                      .flatMap((s) => s.items)
                      .slice(0, 4)
                      .map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                  </div>
                  <div className="flex items-center gap-4 mt-5 pt-4 border-t border-mist-500/10">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-mist-400">
                      <Github size={13} /> Code
                    </span>
                    {p.demo && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-mist-400">
                        <ExternalLink size={13} /> Démo
                      </span>
                    )}
                    <span className="ml-auto text-xs font-mono text-accent">Voir le projet →</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
