# Portfolio — Développeur Full Stack & Data / IA

Portfolio professionnel construit avec **React + TypeScript + Vite + Tailwind CSS**.
Thème dark/premium bleu nuit & cyan, glassmorphism, animations légères au scroll.

## 🚀 Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

Pour générer la version de production :

```bash
npm run build
npm run preview   # pour tester le build localement
```

Le dossier `dist/` généré peut être déployé tel quel sur Vercel, Netlify, GitHub Pages, etc.

## ✏️ Personnalisation — ce qu'il reste à compléter

**Toutes les informations réelles connues sont déjà remplies.** Tout le reste
a été laissé en `[À COMPLÉTER]` — aucune donnée n'a été inventée
(expérience, statistiques, clients, diplômes, liens...), conformément à la demande initiale.

Un seul fichier centralise tout le contenu texte :

```
src/content/fr.ts
```

Ouvrez-le et remplacez les valeurs marquées `[À COMPLÉTER]` :

- **`identity`** : nom complet, initiales, email, téléphone, lien vers le CV en PDF (à placer dans `public/cv.pdf` par exemple, puis mettre à jour `cvUrl`).
- **`socials`** : lien LinkedIn.
- **`education`** : dates et statut exacts des diplômes.
- **`projects`** :
  - `lunora` : lien GitHub, une vraie difficulté technique rencontrée + sa solution, captures d'écran si disponibles.
  - `samumli` : lien GitHub, problème à l'origine du projet, fonctionnalités précises, une vraie difficulté technique + solution.
  - `data-analysis` : lien GitHub/notebook, problématique réelle, conclusions réelles.
- **`site.url` / `site.domain`** : une fois le nom de domaine choisi, mettez-le à jour ici — il alimente automatiquement le QR Code, le bouton "Copier le lien", le `robots.txt` et les balises SEO.

Pensez aussi à :
- Remplacer les balises `[Nom Prénom]` dans `index.html` (title, meta description, Open Graph).
- Mettre à jour `public/sitemap.xml` et `public/robots.txt` avec le domaine final.
- Ajouter votre CV en PDF dans `public/` et mettre à jour `identity.cvUrl` dans `src/content/fr.ts`.
- Ajouter de vraies captures d'écran de Lunora et Samumli dans `public/assets/img/` puis les référencer dans `screenshots` (et éventuellement les afficher dans `ProjectModal.tsx`).

## 🖼️ Images déjà intégrées

- `public/assets/img/profile.jpg` — votre photo.
- `public/assets/logos/*` — les logos Samumli (variantes flocage / impression / pr, clair et sombre) et Lunora, utilisés dans la section **Identité Visuelle**.

## 🌍 Ajouter l'anglais / l'arabe plus tard

Le contenu textuel est isolé dans `src/content/fr.ts`. Pour ajouter d'autres langues :

1. Dupliquer ce fichier en `src/content/en.ts` et `src/content/ar.ts` en traduisant les valeurs (garder les mêmes clés).
2. Créer un petit contexte React (`LanguageContext`) qui choisit le bon fichier de contenu.
3. Remplacer les imports `from "../content/fr"` par le contenu fourni par ce contexte.
4. Pour l'arabe, penser à activer `dir="rtl"` sur `<html>` et à adapter la mise en page (flex/grid) en conséquence.

L'architecture actuelle (un seul fichier de contenu, aucun texte codé en dur dans les composants sauf libellés d'interface fixes) a été pensée pour rendre cette étape rapide.

## 🧩 Structure du projet

```
src/
  components/     → chaque section du site (Hero, Skills, Projects, Gallery, Contact...)
  content/fr.ts    → TOUT le contenu texte, liens et données de projets
  hooks/           → useTheme (dark/light), useReveal (animations au scroll)
public/
  assets/img/      → photo de profil
  assets/logos/    → logos Samumli & Lunora
  robots.txt, sitemap.xml
```

## 🎨 Stack technique du portfolio

React 19 · TypeScript · Vite · Tailwind CSS · lucide-react (icônes) · qrcode (génération du QR Code)

## ✅ Bonnes pratiques déjà en place

- Responsive (mobile / tablette / desktop) avec navigation mobile dédiée.
- `prefers-reduced-motion` respecté.
- Focus visible au clavier sur tous les éléments interactifs.
- SEO de base (title, meta description, Open Graph, Twitter Card, sitemap, robots.txt).
- Images redimensionnées et compressées pour rester légères.
- Filtrage des projets par catégorie, modale de détail par projet, galerie avec lightbox clavier (← → Échap).
