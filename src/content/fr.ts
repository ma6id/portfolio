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
  role2: "Intelligence Artificielle & Data",
  location: "Algérie",
  email: "[madjidcity02@gmail.com]",
  phone: "[0559130643]",
  photo: "/assets/img/photo portfolio.png",
  //cvUrl: "[À COMPLÉTER — lien vers le CV en PDF]",
  intro:
    "Développeur informatique orienté Full Stack, Mobile, Intelligence Artificielle et Data, avec une expérience pratique à travers la conception et le développement de projets logiciels complets.",
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
  description: string;
  problem: string;
  solution: string;
  stack: { label: string; items: string[] }[];
  roles?: string[];
  features?: string[];
  highlights: string[];
  challenges?: { problem: string; solution: string }[];
  github?: string;
  demo?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
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
      "Mise en place d'une architecture Full Stack classique : interface React/Vite/TypeScript côté client, API REST Node.js/Express côté serveur, et persistance des données via PostgreSQL.",
    stack: [
      { label: "Frontend", items: ["React", "Vite", "TypeScript", "Tailwind CSS", "React Router", "TanStack Query"] },
      { label: "Backend", items: ["Node.js", "Express"] },
      { label: "Database", items: ["PostgreSQL"] },
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
      "Démontre une stack complémentaire à Lunora (Flutter/Supabase)",
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
];

export const nav = [
  { id: "accueil", label: "Principal" },
  { id: "developpeur", label: "Développeur" },
  { id: "identite", label: "Identité Visuelle" },
];
