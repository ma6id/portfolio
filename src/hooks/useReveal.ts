import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Filet de sécurité : certains navigateurs intégrés (webviews d'apps
    // comme Signal, Messenger...) ne déclenchent pas toujours
    // IntersectionObserver de façon fiable au premier rendu. Sans ce filet,
    // l'élément resterait invisible (opacity: 0) indéfiniment.
    const fallback = window.setTimeout(() => {
      el.classList.add("in-view");
    }, 1200);

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in-view");
      window.clearTimeout(fallback);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
            window.clearTimeout(fallback);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return ref;
}
