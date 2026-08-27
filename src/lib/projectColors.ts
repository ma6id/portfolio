// Couleurs de marque réelles de chaque projet, extraites de leurs logos respectifs.
// - PROJECT_COLORS : couleur pleine, réservée aux éléments décoratifs (barres, bordures,
//   halos, graphiques) où le contraste texte n'entre pas en jeu.
// - PROJECT_TEXT_COLORS : variante éclaircie de la même teinte, garantissant un contraste
//   de lecture suffisant (WCAG AA, ≥ 4.5:1) sur le fond sombre du site — à utiliser
//   uniquement pour du texte (liens, labels).
export const PROJECT_COLORS: Record<string, string> = {
  Scholaria: "#5B3FD6", // indigo-violet du logo Scholaria
  Lunora: "#C08A6B",    // rose gold du logo Lunora
  Samumli: "#1450F0",   // bleu vif du logo Samumli
};

export const PROJECT_TEXT_COLORS: Record<string, string> = {
  Scholaria: "#846FE0",
  Lunora: "#C08A6B",
  Samumli: "#4F7CF4",
};

// Convertit un hex ("#5B3FD6") en triplet "R G B" (ex. "91 63 214"),
// pour l'utiliser dans rgb(var(--x) / alpha) — permet de faire varier
// l'opacité en CSS pur sans dépendre de color-mix().
export function hexToRgbTriplet(hex: string): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}
