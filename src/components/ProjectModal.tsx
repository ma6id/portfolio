import { useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "../content/fr";
import TechChip from "./TechChip";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink-950/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div
        className="glass w-full sm:max-w-3xl sm:rounded-3xl rounded-none min-h-screen sm:min-h-0 my-0 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-mist-500/10 bg-ink-950 sm:rounded-t-3xl">
          <div>
            <p className="eyebrow">{project.status}</p>
            <h3 className="font-display font-semibold text-2xl text-mist-100 mt-1">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="w-9 h-9 rounded-full border border-mist-500/25 flex items-center justify-center text-mist-300 hover:text-accent hover:border-accent/40 transition-colors focus-ring shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-8 space-y-9">
          <p className="text-mist-300 leading-relaxed">{project.description}</p>

          {project.partners && project.partners.length > 0 && (
            <div>
              <p className="eyebrow mb-3">Organisé en partenariat avec</p>
              <div className="flex flex-wrap items-center gap-3">
                {project.partners.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-2 rounded-xl border border-mist-500/15 bg-ink-800/40 px-3 py-2"
                  >
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="w-8 h-8 rounded-md object-cover shrink-0"
                    />
                    <span className="text-xs font-mono text-mist-300">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="eyebrow mb-2">Problème</p>
              <p className="text-mist-300 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Solution</p>
              <p className="text-mist-300 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Stack technique</p>
            <div className="space-y-3">
              {project.stack.map((s) => (
                <div key={s.label} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-xs font-mono text-mist-500 w-40 shrink-0">{s.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <TechChip key={it} name={it} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {project.roles && project.roles.length > 0 && (
            <div>
              <p className="eyebrow mb-3">Rôles du système</p>
              <div className="flex flex-wrap gap-2">
                {project.roles.map((r) => (
                  <span key={r} className="chip">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <p className="eyebrow mb-3">Fonctionnalités</p>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mist-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="eyebrow mb-3">Ce que j'ai réalisé</p>
            <ul className="space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-mist-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-azure-400 mt-1.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {project.challenges && project.challenges.length > 0 && (
            <div>
              <p className="eyebrow mb-3">Difficultés techniques & solutions</p>
              <div className="space-y-4">
                {project.challenges.map((c, i) => (
                  <div key={i} className="rounded-xl border border-mist-500/10 bg-ink-800/40 p-4">
                    <p className="text-xs font-mono text-mist-500 mb-1">PROBLÈME</p>
                    <p className="text-sm text-mist-300 mb-3">{c.problem}</p>
                    <p className="text-xs font-mono text-accent/70 mb-1">SOLUTION</p>
                    <p className="text-sm text-mist-300">{c.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Github size={15} /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                <ExternalLink size={15} /> Voir la démo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
