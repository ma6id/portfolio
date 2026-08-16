import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Check, Copy, QrCode as QrIcon } from "lucide-react";
import { site } from "../content/fr";
import Reveal from "./Reveal";

export default function ShareLink() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);
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

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard indisponible */
    }
  };

  return (
    <section className="py-20 border-t border-mist-500/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="w-[168px] h-[168px] rounded-2xl bg-[#e6edf5] p-2 flex items-center justify-center shrink-0">
              <canvas ref={canvasRef} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 eyebrow mb-2">
                <QrIcon size={13} /> À insérer sur le CV
              </div>
              <h3 className="font-display font-semibold text-xl text-mist-100">
                Un lien, un scan, tout le portfolio
              </h3>
              <p className="text-mist-300 text-sm mt-2 max-w-md">
                Ce QR Code pointe vers l'URL publique du portfolio. Il peut être imprimé
                directement sur le CV une fois le domaine final configuré.
              </p>
              <div className="mt-5 flex items-center gap-3 justify-center sm:justify-start flex-wrap">
                <code className="font-mono text-xs text-mist-400 bg-ink-800/60 px-3 py-2 rounded-lg break-all">
                  {url}
                </code>
                <button onClick={copyLink} className="btn-secondary !py-2.5">
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copié" : "Copier le lien"}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
