import { useEffect, useRef, useState } from "react";
import { Menu, Moon, QrCode, Sun, X } from "lucide-react";
import QRCodeLib from "qrcode";
import { nav, identity, site } from "../content/fr";
import type { Theme } from "../hooks/useTheme";

export default function Nav({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");
  const [qrOpen, setQrOpen] = useState(false);
  const qrCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!qrOpen) return;
    const opts = { width: 240, margin: 1, color: { dark: "#0d1420", light: "#e6edf5" } };
    if (qrCanvasRef.current) QRCodeLib.toCanvas(qrCanvasRef.current, site.url, opts).catch(() => {});
  }, [qrOpen]);

  useEffect(() => {
    if (!qrOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQrOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [qrOpen]);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between gap-3 rounded-2xl transition-all duration-300 min-w-0 ${
          scrolled ? "glass shadow-glow-sm py-2.5 px-5" : ""
        }`}
      >
        <button
          onClick={() => goTo("accueil")}
          className="font-display font-semibold text-lg tracking-tight flex items-center gap-2 focus-ring rounded-md flex-1 min-w-0"
        >
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 via-cyan-400 to-azure-500 flex items-center justify-center text-ink-onaccent font-bold text-base font-mono shadow-glow-sm ring-1 ring-white/20 shrink-0">
               {identity.name.charAt(0)}
          </span>
          <span className="text-mist-100 text-sm sm:text-lg truncate min-w-0">
            {identity.name}
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`px-4 py-2 rounded-full transition-colors focus-ring ${
                active === item.id
                  ? "text-accent bg-accent/10"
                  : "text-mist-300 hover:text-mist-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Changer de thème"
            className="w-10 h-10 rounded-full border border-mist-500/30 flex items-center justify-center text-mist-300 hover:text-accent hover:border-accent/40 transition-colors focus-ring"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setQrOpen(true)}
            className="btn-primary"
            aria-label="Afficher le QR code du portfolio"
          >
            <QrCode size={15} />
            QR Code
          </button>
        </div>

        <button
          className="md:hidden text-mist-100 focus-ring rounded-md"
          onClick={() => setOpen((o) => !o)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 glass rounded-2xl p-4 flex flex-col gap-1 font-mono text-sm">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="text-left px-4 py-3 rounded-xl text-mist-300 hover:text-accent hover:bg-accent/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-3 mt-2 px-4">
            <button
              onClick={toggle}
              className="w-10 h-10 rounded-full border border-mist-500/30 flex items-center justify-center text-mist-300"
              aria-label="Changer de thème"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setQrOpen(true)}
              className="btn-primary flex-1 justify-center"
              aria-label="Afficher le QR code du portfolio"
            >
              <QrCode size={15} />
              QR Code
            </button>
          </div>
        </div>
      )}

      {qrOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-ink-900/80 backdrop-blur-sm"
          onClick={() => setQrOpen(false)}
        >
          <div
            className="relative glass rounded-3xl p-8 sm:p-10 flex flex-col items-center gap-4 shadow-glow-sm max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQrOpen(false)}
              aria-label="Fermer"
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-mist-500/30 flex items-center justify-center text-mist-300 hover:text-accent hover:border-accent/40 transition-colors focus-ring"
            >
              <X size={16} />
            </button>
            <div className="w-[240px] h-[240px] rounded-2xl bg-[#e6edf5] p-3 flex items-center justify-center">
              <canvas ref={qrCanvasRef} />
            </div>
            <p className="text-mist-400 text-sm font-mono text-center">
              Scannez pour découvrir le portfolio
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
