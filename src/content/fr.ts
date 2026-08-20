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
        problem:
          "La politique de sécurité au niveau des lignes (RLS) sur la table des profils utilisateurs vérifiait le rôle d'un utilisateur en consultant cette même table — créant une boucle infinie : pour vérifier si l'accès était autorisé, le système devait d'abord accéder à la table, ce qui déclenchait à nouveau la même vérification.",
        solution:
          "Création d'une fonction de vérification dédiée, exécutée avec des privilèges élevés indépendants de la politique de sécurité standard. Cette fonction peut consulter directement le rôle de l'utilisateur sans déclencher la boucle de vérification, débloquant ainsi l'accès de façon fiable et instantanée.",
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
      "Samumli est une plateforme qui met en relation particuliers et entreprises avec un réseau d'imprimeries à travers l'Algérie. Les clients peuvent commander en ligne des documents, des cartes de visite, des brochures ou des vêtements personnalisés (T-shirts, vestes, casquettes), et leurs commandes sont ensuite transmises à l'imprimerie la plus proche en fonction de la distance et du volume commandé. Le service d'impression de documents est opérationnel, tandis que le service de personnalisation de vêtements est en cours de développement.",

    problem:
      "En Algérie, commander une impression personnalisée ou un article textile en gros volume impose souvent de multiplier les contacts avec différentes imprimeries locales, sans visibilité centralisée sur les prix, les délais ou la capacité à traiter de grandes quantités.",

    solution:
      "Une marketplace hybride : les particuliers et petites commandes passent par un réseau d'imprimeries partenaires façon marketplace, tandis que les commandes en gros volume sont traitées directement par une imprimerie principale intégrée à la plateforme — avec authentification par rôle (client, imprimerie, imprimerie principale, administration), tableaux de bord analytiques, et couverture nationale complète (58 wilayas) dès le lancement.",

    stack: [
      { label: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "Leaflet"] },
      { label: "Backend / Database", items: ["Supabase", "PostgreSQL", "Row Level Security (RLS)", "Realtime"] },
      { label: "Intégrations", items: ["Yalidine", "Maystro", "Procolis", "Zaki Express"] },
    ],
    roles: ["Client", "Imprimerie (Print Shop)", "Imprimerie principale", "Administration"],
    features: [
      "Système multi-rôles avec routes protégées (client, imprimerie, imprimerie principale, administration)",
      "Authentification complète via Supabase (connexion, inscription, profil)",
      "Couverture géographique des 58 wilayas algériennes",
      "Interface trilingue (arabe, français, anglais)",
      "Tableaux de bord avec analyses de données réelles (dépenses, répartition des commandes)",
      "Carte interactive pour la localisation de livraison",
      "Tarification dynamique pour les commandes en gros volume",
      "Mode sombre (Dark Mode)",
    ],

    highlights: [
      "Modèle hybride rare : marketplace décentralisé (commission) + production directe intégrée (marge complète) sur une même plateforme",
      "Couverture nationale complète (58 wilayas) dès le lancement, contrairement à la majorité des concurrents locaux centrés sur certaines villes",
      "Conception d'un système de rôles complet avec dashboards et permissions dédiées",
      "Intégration de tableaux de bord analytiques avec données réelles (recharts)",
      "Prévu : éditeur interactif de personnalisation textile en 3D, quasi inexistant chez les concurrents algériens actuels",
    ],

    challenges: [
      {
        problem:
          "L'ajout d'un éditeur interactif de personnalisation textile en 3D — pour visualiser en temps réel un t-shirt, un hoodie ou une casquette personnalisés avant impression — s'est révélé bien plus complexe que prévu : rendu 3D fluide dans le navigateur, application dynamique des motifs sur un modèle 3D, et performance correcte sur des appareils mobiles grand public. Cette difficulté a considérablement retardé le développement de la section personnalisation textile.",
        solution:
          "Le développement a été priorisé en deux temps : la partie impression de documents (sans dépendance 3D) a été finalisée et lancée en premier, pendant que l'approche technique pour le module 3D est affinée séparément — évitant ainsi qu'un chantier complexe ne bloque le lancement de l'ensemble de la plateforme.",
      },
    ],
    github: "https://github.com/ma6id/Smart_on-demand_printing_SAMUMLI",
    demo: "https://smart-on-demand-printing-samumli.vercel.app/",
    screenshots: [],
  },

  {
    slug: "data-analysis",
    name: "Analyse de données — Video Games Sales",
    tagline: "Exploration, visualisation et modélisation prédictive sur un dataset de ventes de jeux vidéo",
    categories: ["data"],
    status: "Travail Pratique",
    cover: "/assets/image/data-analysis-cover.svg",
    description:
      "Travail pratique de Data Analysis avec Python et Jupyter Notebook, mené sur un dataset de ventes mondiales de jeux vidéo (plateforme, genre, éditeur, ventes par région). Le projet couvre l'ensemble du pipeline d'analyse : exploration, nettoyage, visualisation, réduction de dimensionnalité par PCA, et modélisation prédictive par régression linéaire.",
    problem:
      "Un dataset brut de ventes de jeux vidéo contient de nombreuses variables interdépendantes (ventes par région, plateforme, genre, année) difficiles à interpréter telles quelles, avec des valeurs manquantes et des échelles hétérogènes qui compliquent toute analyse ou modélisation directe.",
    solution:
      "Un pipeline complet d'analyse de données : nettoyage et exploration (Pandas), visualisations statistiques (Matplotlib/Seaborn) pour identifier les tendances et corrélations, standardisation des variables, réduction de dimensionnalité par PCA pour synthétiser l'information, puis un modèle de régression linéaire (Scikit-learn) pour prédire les ventes globales à partir des variables disponibles.",
    stack: [
      { label: "Langage", items: ["Python", "Jupyter Notebook"] },
      { label: "Data", items: ["Pandas", "NumPy", "CSV"] },
      { label: "Visualisation", items: ["Matplotlib", "Seaborn"] },
      { label: "Machine Learning", items: ["Scikit-learn"] },
    ],
    features: [
      "Exploration et nettoyage du dataset (valeurs manquantes, sélection des colonnes pertinentes)",
      "Analyse exploratoire (EDA) : histogrammes, bar plots, matrice de corrélation",
      "Standardisation des variables (StandardScaler)",
      "Réduction de dimensionnalité par PCA (2 composantes principales)",
      "Modèle de régression linéaire pour prédire les ventes globales",
      "Évaluation du modèle (R², RMSE)",
      "Séparation des données en ensembles d'entraînement et de test (train/test split)",
      "Interprétation des résultats et synthèse des conclusions",
    ],
    highlights: [
      "Analyse exploratoire complète avec visualisations statistiques (distribution, corrélations)",
      "Application de la standardisation avant réduction de dimensionnalité",
      "Mise en œuvre d'une PCA pour synthétiser les variables en composantes principales",
      "Construction et évaluation d'un modèle prédictif de régression linéaire",
      "Pipeline structuré : exploration → nettoyage → EDA → standardisation → PCA → machine learning → évaluation",
    ],
    challenges: [
      {
        problem:
          "Le dataset contient plusieurs variables de ventes régionales (Amérique du Nord, Europe, Japon, autres) fortement corrélées entre elles, ce qui rend l'analyse et la modélisation directe complexes : trop de dimensions se chevauchent et se répètent, sans qu'il soit facile d'en tirer une vision claire ou de construire un modèle stable.",
        solution:
          "Application d'une Analyse en Composantes Principales (PCA) après standardisation des variables : les multiples variables corrélées sont résumées en deux composantes principales qui concentrent l'essentiel de l'information (variance expliquée), permettant à la fois une visualisation claire des données et une base plus stable pour la modélisation prédictive.",
      },
    ],
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
