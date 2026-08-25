import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, sectionTools } from "../content/fr";
import Reveal from "./Reveal";
import ToolsBadge from "./ToolsBadge";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
      if (e.key === "ArrowLeft")
        setIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index]);

  return (
    <section id="identite" className="py-24 border-t border-mist-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow mb-3">Design & branding</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-mist-100">
            Identité Visuelle
          </h2>
          <p className="text-mist-300 mt-4 max-w-2xl">
            Logos, variantes et éléments graphiques conçus pour Samumli, Lunora, Dragon et Scholaria.
          </p>
        </Reveal>
        <div className="mt-4">
          <ToolsBadge tools={sectionTools.identite} />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, i) => (
            <Reveal key={item.title + i} delay={(i % 6) * 70}>
              <button
                onClick={() => setIndex(i)}
                className="group text-left w-full glass glass-hover rounded-2xl overflow-hidden focus-ring"
              >
                <div className="aspect-[4/3] bg-ink-800/70 flex items-center justify-center p-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-5 py-4 flex items-center justify-between border-t border-mist-500/10">
                  <div>
                    <p className="text-sm font-medium text-mist-100">{item.title}</p>
                    {item.subtitle && <p className="text-xs text-mist-500 mt-0.5">{item.subtitle}</p>}
                  </div>
                  <span className="chip">{item.tag}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {index !== null && (
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
              setIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
            }}
            aria-label="Précédent"
            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full border border-mist-500/25 flex items-center justify-center text-mist-300 hover:text-accent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
            }}
            aria-label="Suivant"
            className="absolute right-4 sm:right-8 w-11 h-11 rounded-full border border-mist-500/25 flex items-center justify-center text-mist-300 hover:text-accent"
          >
            <ChevronRight size={20} />
          </button>

          <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="glass rounded-3xl p-10 flex items-center justify-center">
              <img
                src={galleryItems[index].image}
                alt={galleryItems[index].title}
                className="max-h-[50vh] object-contain"
              />
            </div>
            <p className="text-center text-mist-100 font-medium mt-4">{galleryItems[index].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
