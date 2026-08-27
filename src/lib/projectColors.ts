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
