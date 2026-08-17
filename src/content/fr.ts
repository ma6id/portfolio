// ─────────────────────────────────────────────────────────────
// CONTENU DU PORTFOLIO — FRANÇAIS
// Toutes les informations réelles connues sont déjà remplies.
// Tout ce qui est marqué [À COMPLÉTER] doit être remplacé par
// une information réelle avant la mise en ligne. Aucune donnée
// n'a été inventée (expérience, stats, clients, diplômes...).
// ─────────────────────────────────────────────────────────────

export const site = {
  domain: "[portfolio.MAM.dev]",
  url: "https://[portfolio.MAM].com",
};

export const identity = {
  name: "MOSTEFAOUI ABD ELMADJID",
  initials: "M.A.M",
  role1: "Développeur Full Stack",
  role2: "Conseil technique pour startups & entreprises",
  location: "Algérie",
  email: "madjidcity02@gmail.com",
  phone: "0559130643",
  photo: "/assets/img/photo portfolio.png",
  cvUrl: "[À COMPLÉTER — lien vers le CV en PDF]",
  intro:
    "J'accompagne les startups et les entreprises établies dans la résolution de leurs défis techniques et stratégiques, de la conception à la production. Fort d'une vaste expérience en développement logiciel intégré (React, Node.js, Flutter), en analyse de données et en intelligence artificielle, je contribue également à la conception de l'identité visuelle, à la planification financière et au développement du modèle économique afin d'aider ces structures dans leur croissance globale. Qu'il s'agisse d'un problème technique spécifique ou d'un projet à lancer, je vous offre un soutien complet à chaque étape.",
  availability: "Ouvert aux opportunités", // à confirmer / modifier si besoin
};

export const socials = {
  github: "https://github.com/ma6id",
  facebook: "https://www.facebook.com/torna.do.714",
  instagram: "https://www.instagram.com/madji_uoafet_7som/",
  linkedin: "[À COMPLÉTER — lien LinkedIn]",
};

export const education = [
  {
    degree: "Master01 en Reconnaissance des Formes et Intelligence Artificielle",
    school: "Université de Chlef — Algérie",
    period: "2025 — 2026",
    status: "en cours",
    details: [
      "Intelligence Artificielle",
      "Data Analysis",
      "Python & Pandas",
      "Bases de données avancées",
      "algorithme de système distribué",
      "Informatique avancée",
      "reconnaissance des formes",
      "tretement d'images (matlab)",
      "tretement du signal",
      "tretement du langage naturel",
    ],
  },
  {
    degree: "Licence en systèmes informatiques et réseaux",
    school: "[université de Chlef — Algérie]",
    period: "[2019 — 2025]",
    status: "[Certificat obtenu]",
    details: [
      "algorithme et structures de données (java, C, C++)",
      "programmation web (HTML, CSS, JavaScript, PHP)",
      "bases de données (SQL, MySQL)",
      "réseaux informatiques (Cisco Packet Tracer)",
      "systèmes d'exploitation ",
      "sécurité informatique",
      "développement d'applications mobiles (java , adroid studio)",
      "structures machines",
      "architecture des ordinateurs",
      "programmation orientée objet",
      "intelligence artificielle",
      
    ],
  },
];

export type SkillCategory = {
  title: string;
  eyebrow: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Développement Web",
    eyebrow: "Frontend",
    skills: ["React", "Vite", "TypeScript", "JavaScript", "Tailwind CSS", "React Router", "TanStack Query"],
  },
  {
    title: "Backend",
    eyebrow: "Serveur & API",
    skills: ["Node.js", "Express", "REST API", "Authentication", "Intégration d'API"],
  },
  {
    title: "Mobile",
    eyebrow: "Cross-platform",
    skills: ["Flutter", "Dart", "Riverpod", "GoRouter"],
  },
  {
    title: "Base de données",
    eyebrow: "Data & Storage",
    skills: [
      "PostgreSQL",
      "SQL",
      "Supabase",
      "Database design",
      "Relations",
      "Row Level Security (RLS)",
      "Migrations",
      "Triggers",
      "Permissions / Grants",
    ],
  },
  {
    title: "Data",
    eyebrow: "Analyse",
    skills: ["Python", "Pandas", "Data Analysis", "SQL", "Data processing"],
  },
  {
    title: "Outils",
    eyebrow: "Workflow",
    skills: ["Git", "GitHub", "VS Code", "[À COMPLÉTER — autres outils]"],
  },
];

export type ProjectCategory = "fullstack" | "mobile" | "data" | "ai" | "uiux";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  categories: ProjectCategory[];
  status: string;
  cover: string;
  // "cover" = fill the card like a photo (use for real photographs).
  // "contain" (default) = small centered icon, for transparent logo PNGs.
  coverFit?: "cover" | "contain";
  description: string;
  problem: string;
  solution: string;
  stack: { label: string; items: string[] }[];
  roles?: string[];
  features?: string[];
  highlights: string[];
  challenges?: { problem: string; solution: string }[];
  // Companies/organizations that sponsored or hosted the event this project
  // was built for (e.g. a hackathon), shown as small credit badges.
  partners?: { name: string; logo: string }[];
  github?: string;
  demo?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "scholaria",
    name: "Scholaria",
    tagline: "Plateforme SaaS de gestion d'événements scolaires — React + FastAPI",
    categories: ["fullstack"],
    status: "🏆 1er Prix — BrainHack 2026",
    cover: "/assets/logos/scholaria-icon.png",
    coverFit: "contain",
    partners: [
      { name: "Mobilis", logo: "/assets/logos/mobilis.jpeg" },
      { name: "Wellmax Algérie", logo: "/assets/logos/wellmax.jpeg" },
      { name: "Infobrains UHBC", logo: "/assets/logos/infobrains.png" },
    ],
    description:
      "Scholaria est une plateforme SaaS de gestion d'événements scolaires, imaginée et développée en équipe lors du hackathon BrainHack 2026 (Infobrains Club, en partenariat avec Mobilis et Wellmax). Elle centralise la création, l'approbation, la publication et la réservation de places pour les événements internes (ateliers, compétitions, sorties, activités) au sein des établissements scolaires privés, avec une gestion des places en temps réel.",
    problem:
      "Dans les écoles privées, les événements et activités sont le plus souvent organisés via WhatsApp, formulaires papier ou tableurs Excel : aucune visibilité centralisée pour l'administration, suivi difficile des places disponibles, et communication fragmentée entre enseignants, administration et élèves.",
    solution:
      "Conception d'un workflow numérique complet — de la proposition d'événement par l'enseignant, à l'approbation par l'administration, jusqu'à la réservation de place par l'étudiant en temps réel — sur une architecture SaaS multi-tenant isolant les données de chaque établissement scolaire.",
    stack: [
      { label: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "TanStack Query"] },
      { label: "Backend", items: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "Alembic"] },
      { label: "Database", items: ["MySQL"] },
      { label: "Sécurité", items: ["JWT", "Role-Based Access Control", "Isolation multi-tenant (school_id)"] },
    ],
    roles: ["Administration (école)", "Enseignant / Organisateur d'événement", "Étudiant"],
    features: [
      "Workflow de demande et d'approbation d'événements",
      "Publication automatique aux étudiants éligibles",
      "Réservation de place en temps réel",
      "Gestion de la capacité et des salles",
      "Détection des conflits de planning (salle, enseignant, horaire)",
      "Système de notifications centralisé",
      "Tableaux de bord (administration, enseignant, étudiant)",
      "Architecture SaaS multi-établissements (multi-tenant)",
    ],
    highlights: [
      "Idée originale du projet et vision produit",
      "Élaboration du Business Model Canvas (BMC)",
      "Construction du plan financier",
      "🏆 1er Prix, catégorie Éducation — BrainHack 2026",
    ],
    challenges: [
      {
        problem: "Éviter que deux étudiants réservent simultanément la dernière place disponible sur un événement à forte demande.",
        solution: "Utilisation d'une transaction atomique côté base de données pour valider et décrémenter les places disponibles, garantissant qu'aucune double réservation n'est possible.",
      },
    ],
    github: "[À COMPLÉTER — lien GitHub Scholaria]",
    demo: "",
    screenshots: [],
  },
  {
    slug: "lunora",
    name: "Lunora",
    tagline: "Marketplace mariage, mode nuptiale & beauté — Flutter + Supabase",
    categories: ["mobile", "fullstack"],
    status: "Projet en développement",
    cover: "/assets/logos/lunora-icon.png",
    description:
      "Lunora est une marketplace pensée pour le marché algérien, dédiée au mariage, à la mode nuptiale et à la beauté : vente, location, paiement par échéances, services beauté et livraison.",
    problem:
      "Le secteur du mariage en Algérie manque d'une plateforme unifiée reliant vendeurs, prestataires beauté, clients et livraison, avec une gestion fiable des rôles et des transactions.",
    solution:
      "Conception d'une architecture multi-rôles (client, vendeur, spécialiste beauté, livreur, administrateur) sur une base Flutter côté mobile et Supabase/PostgreSQL côté backend, avec une sécurité gérée au niveau de la base de données via des politiques RLS.",
    stack: [
      { label: "Frontend / Mobile", items: ["Flutter", "Dart", "Riverpod", "GoRouter"] },
      { label: "Backend / Database", items: ["Supabase", "PostgreSQL", "SQL"] },
      { label: "Sécurité", items: ["Authentication", "Role-Based Access Control", "Row Level Security (RLS)", "Permissions & Grants"] },
    ],
    roles: ["Customer", "Seller", "Beauty Specialist", "Delivery Agent", "Administrator"],
    features: [
      "Marketplace multi-catégories (produits, looks)",
      "Panier, commandes, vente et location",
      "Paiement par échéances",
      "Réservation de services beauté",
      "Livraison et suivi",
      "Authentification et gestion des rôles",
      "Back-office administrateur",
    ],
    highlights: [
      "Conception d'une architecture multi-rôles",
      "Intégration Flutter avec Supabase",
      "Conception et exploitation d'une base PostgreSQL",
      "Mise en place de politiques RLS",
      "Gestion des permissions et des accès",
      "Logique métier marketplace (vente + location + échéances)",
    ],
    challenges: [
      {
        problem: "[À COMPLÉTER — un problème technique réellement rencontré sur Lunora]",
        solution: "[À COMPLÉTER — la solution technique apportée]",
      },
    ],
    github: "[À COMPLÉTER — lien GitHub Lunora]",
    demo: "", // application mobile en préparation — pas encore de démo publique
    screenshots: [],
  },
  {
    slug: "samumli",
    name: "Samumli",
    tagline: "Marketplace Print-on-Demand — React + Node.js/Express",
    categories: ["fullstack"],
    status: "Déployé",
    cover: "/assets/logos/samumli-icon.png",
    description:
      "Samumli est une plateforme de marketplace / Print-on-Demand, construite avec une stack React + Node.js différente de Lunora, afin de démontrer une capacité à travailler dans plusieurs environnements Full Stack.",
    problem:
      "[À COMPLÉTER — problème / besoin à l'origine du projet Samumli]",
    solution:
      "Mise en place d'une architecture Full Stack classique : interface React/Vite/TypeScript côté client, API REST Node.js/Express côté serveur, et persistance des données via Supabase (PostgreSQL managé).",
    stack: [
      { label: "Frontend", items: ["React", "Vite", "TypeScript", "Tailwind CSS", "React Router", "TanStack Query"] },
      { label: "Backend", items: ["Node.js", "Express"] },
      { label: "Database", items: ["Supabase"] },
      { label: "Autres", items: ["REST API"] },
    ],
    features: [
      "Catalogue produits Print-on-Demand",
      "Parcours d'achat",
      "[À COMPLÉTER — autres fonctionnalités réelles]",
    ],
    highlights: [
      "Architecture React + Node.js/Express + PostgreSQL",
      "API REST construite de bout en bout",
      "Démontre une architecture avec backend applicatif dédié (Node.js/Express), complémentaire à l'usage direct de Supabase (Backend-as-a-Service) sur Lunora",
    ],
    challenges: [
      {
        problem: "[À COMPLÉTER — un problème technique réellement rencontré sur Samumli]",
        solution: "[À COMPLÉTER — la solution technique apportée]",
      },
    ],
    github: "[À COMPLÉTER — lien GitHub Samumli]",
    demo: "https://smart-on-demand-printing-samumli.vercel.app/",
    screenshots: [],
  },
  {
    slug: "data-analysis",
    name: "Data Analysis",
    tagline: "Python · Pandas · SQL",
    categories: ["data"],
    status: "[À COMPLÉTER]",
    cover: "",
    description:
      "Projet d'analyse de données réalisé dans le cadre du Master en Intelligence Artificielle : nettoyage, exploration et transformation de données avec Python, Pandas et SQL.",
    problem: "[À COMPLÉTER — problématique du dataset / projet réel]",
    solution: "[À COMPLÉTER — approche d'analyse réelle]",
    stack: [{ label: "Outils", items: ["Python", "Pandas", "SQL"] }],
    features: [
      "Nettoyage des données",
      "Exploration et analyse",
      "Transformation",
      "[À COMPLÉTER — statistiques / visualisation si utilisées]",
    ],
    highlights: ["[À COMPLÉTER — conclusions réelles du projet]"],
    github: "[À COMPLÉTER — lien GitHub / notebook]",
    demo: "",
    screenshots: [],
  },
];

export const processSteps = [
  { n: "01", title: "Analyse", desc: "Comprendre le problème et les besoins réels avant d'écrire la moindre ligne de code." },
  { n: "02", title: "Architecture", desc: "Définir l'architecture technique et choisir la stack la plus adaptée au projet." },
  { n: "03", title: "Conception", desc: "UI/UX et conception détaillée de la solution, écrans et flux principaux." },
  { n: "04", title: "Développement", desc: "Implémentation frontend, backend et base de données." },
  { n: "05", title: "Tests", desc: "Validation fonctionnelle et correction des problèmes identifiés." },
  { n: "06", title: "Déploiement", desc: "Publication et maintenance lorsque le projet est prêt pour la production." },
];

export type VideoEdit = {
  title: string;
  description: string;
  thumbnail: string;
  tag: string;
  type: "link" | "file";
  src: string;
};

export const videoEdits: VideoEdit[] = [
  {
    title: "Tournoi amical de boxe — Inno Gym",
    description: "Vidéo de montage réalisée à l'occasion d'un tournoi amical de boxe organisé à la salle de sport Inno Gym. Prise de vue au smartphone, montage sur CapCut.",
    thumbnail: "",
    tag: "Sport",
    type: "file",
    src: "/assets/video/0329-web.mp4",
  },
];

export type GalleryItem = {
  title: string;
  subtitle?: string;
  image: string;
  tag: string;
};

export const galleryItems: GalleryItem[] = [
  { title: "Samumli", subtitle: "Wordmark principal", image: "/assets/logos/samumli-pr.png", tag: "Branding" },
  { title: "Samumli — Flocage", subtitle: "Variante service", image: "/assets/logos/samumli-flocage.png", tag: "Branding" },
  { title: "Samumli — Impression", subtitle: "Variante service", image: "/assets/logos/samumli-impression.png", tag: "Branding" },
  { title: "Samumli", subtitle: "Version sombre", image: "/assets/logos/dark-samumli-pr.png", tag: "Dark mode" },
  { title: "Samumli — Flocage", subtitle: "Version sombre", image: "/assets/logos/dark-samumli-flocage.png", tag: "Dark mode" },
  { title: "Samumli — Impression", subtitle: "Version sombre", image: "/assets/logos/dark-samumli-impression.png", tag: "Dark mode" },
  { title: "Samumli", subtitle: "Icône application", image: "/assets/logos/samumli-icon.png", tag: "Icône" },
  { title: "Lunora", subtitle: "Icône application", image: "/assets/logos/lunora-icon.png", tag: "Icône" },
  { title: "Dragon", subtitle: "Wordmark principal", image: "/assets/logos/1.png", tag: "Branding" },
  { title: "Dragon", subtitle: "Version sombre", image: "/assets/logos/dragonBlanch.png", tag: "Branding" },
  { title: "Scholaria", subtitle: "Wordmark principal", image: "/assets/logos/scholaria-logo.png", tag: "Branding" },
  { title: "Scholaria", subtitle: "Icône application", image: "/assets/logos/Courbe@.png", tag: "Icône" },
];

export const sectionTools = {
  identite: ["Affinity", "Canva"],
  montage: ["DaVinci Resolve", "CapCut"],
};

export const nav = [
  { id: "accueil", label: "Principal" },
  { id: "developpeur", label: "Développeur" },
  { id: "identite", label: "Designer" },
  { id: "montage", label: "Monteur Vidéo" },
];
