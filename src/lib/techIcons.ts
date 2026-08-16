// Mapping nom affiché -> slug Simple Icons (https://simpleicons.org)
export const techIconSlugs: Record<string, string> = {
  React: "react",
  "Vite": "vite",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "Tailwind CSS": "tailwindcss",
  "React Router": "reactrouter",
  "TanStack Query": "reactquery",
  "Node.js": "nodedotjs",
  "Express": "express",
  "Flutter": "flutter",
  "Dart": "dart",
  "PostgreSQL": "postgresql",
  "Supabase": "supabase",
  Python: "python",
  Pandas: "pandas",
  "FastAPI": "fastapi",
  "SQLAlchemy": "sqlalchemy",
  "Pydantic": "pydantic",
  Git: "git",
  "GitHub": "github",
  "VS Code": "visualstudiocode",
  Docker: "docker",
  MySQL: "mysql",
  "MySQL Workbench 8.0 CE": "mysql",
  Affinity: "affinitydesigner",
  Canva: "canva",
  "DaVinci Resolve": "davinciresolve",
  "CapCut": "capcut",
};

export const localToolLogos: Record<string, string> = {
  Affinity: "/assets/logos/iffinity.jpeg",
  Canva: "/assets/logos/canva.jpeg",
  "DaVinci Resolve": "/assets/logos/DaVinci Resolve.jpeg",
  CapCut: "/assets/logos/CapCut.png",
};

export function getTechIconUrl(name: string): string | null {
  if (localToolLogos[name]) return localToolLogos[name];
  const slug = techIconSlugs[name];
  return slug ? `https://cdn.simpleicons.org/${slug}` : null;
}
