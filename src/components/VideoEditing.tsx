import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { sectionTools, videoEdits } from "../content/fr";
import Reveal from "./Reveal";
import ToolsBadge from "./ToolsBadge";

const getYouTubeEmbedUrl = (url: string) => {
  const normalized = url.trim();

  if (normalized.includes("youtube.com/watch?v=")) {
    const id = new URL(normalized).searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }

  if (normalized.includes("youtu.be/")) {
    const id = normalized.split("youtu.be/")[1]?.split(/[?&#]/)[0];
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }

  return null;
};

const getPlatformLabel = (url: string) => {
  if (url.includes("youtube")) return "YouTube";
  if (url.includes("instagram")) return "Instagram";
  if (url.includes("tiktok")) return "TikTok";
  return "plateforme";
};

export default function VideoEditing() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? null : (i + 1) % videoEdits.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? null : (i - 1 + videoEdits.length) % videoEdits.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index]);

  const selected = index === null ? null : videoEdits[index];

  return (
    <section id="montage" className="py-24 border-t border-mist-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow mb-3">Montage & motion</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-mist-100">Monteur Vidéo</h2>
          <p className="text-mist-300 mt-4 max-w-2xl">
            [À COMPLÉTER — description de la section montage vidéo]
          </p>
        </Reveal>
        <div className="mt-4">
          <ToolsBadge tools={sectionTools.montage} />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videoEdits.map((item, i) => (
            <Reveal key={item.title + i} delay={(i % 6) * 70}>
              <button
                onClick={() => setIndex(i)}
                className="group text-left w-full glass glass-hover rounded-2xl overflow-hidden focus-ring"
              >
                <div className="relative aspect-[16/10] bg-ink-800/70 overflow-hidden">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <video src={item.src} muted preload="metadata" className="h-full w-full object-cover" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-ink-950/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-ink-900/60 text-mist-100">
                      <Play size={18} className="ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4 flex items-start justify-between gap-3 border-t border-mist-500/10">
                  <div>
                    <p className="text-sm font-medium text-mist-100">{item.title}</p>
                    <p className="text-xs text-mist-500 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                  <span className="chip shrink-0">{item.tag}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-ink-950/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setIndex(null)}
            aria-label="Fermer"
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-mist-500/25 flex items-center justify-center text-mist-300 hover:text-accent"
          >
            <X size={18} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? null : (i - 1 + videoEdits.length) % videoEdits.length));
            }}
            aria-label="Précédent"
            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full border border-mist-500/25 flex items-center justify-center text-mist-300 hover:text-accent"
          >
            <span className="text-xl">‹</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? null : (i + 1) % videoEdits.length));
            }}
            aria-label="Suivant"
            className="absolute right-4 sm:right-8 w-11 h-11 rounded-full border border-mist-500/25 flex items-center justify-center text-mist-300 hover:text-accent"
          >
            <span className="text-xl">›</span>
          </button>

          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="glass rounded-3xl p-4 sm:p-6">
              {selected.type === "link" && (() => {
                const embedUrl = getYouTubeEmbedUrl(selected.src);

                if (embedUrl) {
                  return (
                    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-mist-500/10 bg-ink-900/80">
                      <iframe
                        src={embedUrl}
                        title={selected.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  );
                }

                return (
                  <div className="flex min-h-[30vh] flex-col items-center justify-center gap-4 rounded-2xl border border-mist-500/10 bg-ink-900/60 p-6 text-center">
                    <p className="text-mist-300">Ce média n'est pas intégrable directement dans la modale.</p>
                    <a
                      href={selected.src}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      Voir sur {getPlatformLabel(selected.src)}
                    </a>
                  </div>
                );
              })()}

              {selected.type === "file" && (
                <video controls className="w-full rounded-xl" preload="metadata">
                  <source src={selected.src} />
                </video>
              )}
            </div>
            <p className="text-center text-mist-100 font-medium mt-4">{selected.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
