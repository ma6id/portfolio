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
      "MySQL Workbench 8.0 CE",
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
    skills: ["Git", "GitHub", "VS Code", "Docker"],
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
  awardImage?: string;
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
    awardImage: "/assets/awards/scholaria-brainhack.jpg",
  },
  {
    slug: "lunora",
    name: "Lunora",
    tagline: "Marketplace multi-rôles pour le mariage et la beauté en Algérie",
    categories: ["mobile", "fullstack"],
    status: "Projet en développement",
    cover: "/assets/logos/lunora-icon.png",
    description:
      "Lunora est une marketplace pensée pour le marché algérien, dédiée au mariage, à la mode nuptiale et à la beauté : vente, location, paiement par échéances, services beauté et livraison.",

    problem:
      "Avant son mariage, une famille algérienne doit souvent visiter des dizaines de boutiques dans plusieurs villes pour trouver la robe, le photographe ou la maquilleuse — sans savoir à l'avance les prix, les disponibilités, ni si le budget permet la location plutôt que l'achat.",
    solution:
      "Avec Lunora, tout se fait depuis le téléphone : comparer les robes et prestataires beauté par ville, choisir entre achat, location ou paiement par échéances, réserver un rendez-vous beauté, et suivre la livraison — sans déplacement inutile. Pour les vendeurs, la plateforme élargit leur visibilité au-delà de leur ville et augmente leurs opportunités de vente grâce à une audience nationale.",
    stack: [
      { label: "Frontend / Mobile", items: ["Flutter", "Dart", "Riverpod", "GoRouter"] },
      { label: "Backend / Database", items: ["Supabase", "PostgreSQL", "Row Level Security (RLS)"] },
      { label: "Sécurité", items: ["Authentication", "Cloudflare Turnstile (CAPTCHA)", "Role-Based Access Control"] },
    ],
    roles: ["Client", "Vendeur", "Spécialiste beauté", "Livreur", "Administrateur"],
    features: [
      "Marketplace multi-catégories (produits, looks complets)",
      "Achat, paiement par échéances et location de produits",
      "Réservation de services beauté (maquillage, coiffure)",
      "Suivi de livraison par province",
      "Interface trilingue (arabe RTL, français, anglais)",
      "Calcul automatique de la commission de plateforme (8%)",
    ],
    highlights: [
      "Conception d'une architecture multi-rôles en Clean Architecture (Flutter/Riverpod)",
      "Intégration backend complète avec authentification et base de données sécurisées",
      "Mise en place d'une protection anti-bot à l'inscription et à la connexion",
      "Interface trilingue simple d'utilisation, facilitant la couverture des 69 wilayas",
      "Tableau de bord administrateur avec calcul automatique des commissions pour tous les utilisateurs",
    ],
    challenges: [
      {
        problem: "[À COMPLÉTER — un problème technique réellement rencontré sur Lunora]",
        solution: "[À COMPLÉTER — la solution technique apportée]",
      },
    ],
    github: "https://github.com/ma6id/Lunora",
    demo: "",
    screenshots: [],
  },

  {
    slug: "samumli",
    name: "Samumli",
    tagline: "Marketplace algérienne d'impression à la demande",
    categories: ["fullstack"],
    status: "Déployé",
    cover: "/assets/logos/samumli-icon.png",
    description:
      "SAMUMLI est une marketplace algérienne d'impression à la demande qui connecte les clients aux imprimeries et librairies locales. Le modèle repose sur des points de retrait fixes : le client commande en ligne et récupère sa commande à l'imprimerie participante la plus proche, sans attente de livraison.",
    problem:
      "En Algérie, commander une impression personnalisée impose souvent de se déplacer physiquement chez un imprimeur, sans visibilité sur les prix, les délais ou la disponibilité, et sans solution numérique centralisée reliant clients et imprimeries locales.",
    solution:
      "Une marketplace avec quatre rôles distincts (client, imprimerie, imprimerie principale, administration), où le client commande en ligne et retire sa commande dans l'imprimerie participante la plus proche — un modèle de retrait plutôt que de livraison, avec suivi de commande en temps réel via Supabase Realtime.",
    stack: [
      { label: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "Leaflet"] },
      { label: "Backend / Database", items: ["Supabase", "PostgreSQL", "Row Level Security (RLS)", "Realtime"] },
      { label: "Intégrations", items: ["Yalidine", "Maystro", "Procolis", "Zaki Express"] },
    ],
    roles: ["Client", "Imprimerie (Print Shop)", "Imprimerie principale", "Administration"],
    features: [
      "Marketplace multi-imprimeries avec retrait en point fixe",
      "Tableaux de bord par rôle (client, imprimerie, imprimerie principale, administration)",
      "Suivi de commande en temps réel (Supabase Realtime)",
      "Gestion du cycle de vie complet des commandes",
      "Intégration de transporteurs algériens (Yalidine, Maystro, Procolis, Zaki Express)",
      "Interface en arabe (RTL) avec prix en Dinar Algérien (DA)",
    ],
    highlights: [
      "Conception d'une architecture multi-rôles avec routing et dashboards séparés",
      "Intégration Supabase complète (Auth, Realtime, RLS sur 21 tables)",
      "Mise en place du modèle de retrait en point fixe (différenciateur clé du marché)",
      "Intégration de 4 transporteurs algériens pour la logistique",
      "Interface RTL en arabe avec identité visuelle dédiée (Tajawal, couleurs #E67E22 / #C0392B)",
    ],
    challenges: [
      {
        problem: "[À COMPLÉTER — un problème technique réellement rencontré sur Samumli]",
        solution: "[À COMPLÉTER — la solution technique apportée]",
      },
    ],
    github: "https://github.com/ma6id/Smart_on-demand_printing_SAMUMLI",
    demo: "https://samumli.vercel.app",
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
  { title: "Scholaria", subtitle: "Élément graphique", image: "/assets/logos/Courbe@.png", tag: "Branding" },
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
