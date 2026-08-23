import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { site } from "../content/fr";
import Reveal from "./Reveal";

export default function ShareLink() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [url, setUrl] = useState(site.url);

  useEffect(() => {
    // Utilise l'URL réelle du site une fois déployé ; en attendant, celle
    // définie dans src/content/fr.ts (site.url) sert de valeur par défaut.
    const current = typeof window !== "undefined" ? window.location.href : site.url;
    setUrl(current.includes("localhost") || current.startsWith("blob:") ? site.url : current);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, url, {
      width: 168,
      margin: 1,
      color: { dark: "#0d1420", light: "#e6edf5" },
    }).catch(() => {});
  }, [url]);

  return (
    <section className="py-20 border-t border-mist-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-10 flex flex-col items-center gap-4">
            <div className="w-[168px] h-[168px] rounded-2xl bg-[#e6edf5] p-2 flex items-center justify-center shrink-0">
              <canvas ref={canvasRef} />
            </div>
            <p className="text-mist-400 text-xs font-mono">Scannez pour découvrir le portfolio</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
