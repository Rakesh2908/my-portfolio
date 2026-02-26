/**
 * Maps skill label (from content) to skillicons.dev icon ID.
 * @see https://github.com/tandpfun/skill-icons#icons-list
 */
export const skillIconIds: Record<string, string> = {
  // Languages
  "Go": "go",
  "Golang": "go",
  "C++": "cpp",
  "C": "c",
  "Java": "java",
  "Python": "py",
  "JavaScript": "js",
  "JS": "js",
  "TypeScript": "ts",
  "TS": "ts",
  "HTML": "html",
  "CSS": "css",
  "SQL": "postgres",

  // Frameworks
  "Gin (Go)": "go",
  "Gin": "go",
  "Node.js": "nodejs",
  "NodeJS": "nodejs",
  "Express.js": "express",
  "ExpressJS": "express",
  "React": "react",
  "TanStack Query": "react",
  "Zustand": "react",

  // Data
  "PostgreSQL": "postgres",
  "MySQL": "mysql",
  "MongoDB": "mongodb",
  "Indexing": "postgres",
  "Transactions": "postgres",
  "Query optimization": "postgres",

  // Infra & DevEx (EC2, S3, CloudWatch use customIconUrls; no dedicated Glue icon, use AWS)
  "Glue": "aws",
  "AWS": "aws",
  "Docker (basics)": "docker",
  "Docker": "docker",
  "Linux": "linux",
  "CI/CD fundamentals": "githubactions",

  // Tooling
  "Git": "git",
  "GitHub": "github",
  "Postman": "postman",
  "Webhooks": "postman",

  // Extra
  "Tailwind": "tailwind",
  "Tailwind CSS": "tailwind",
  "scikit-learn": "sklearn",
  "Vite": "vite",
};

const SKILLICONS_BASE = "https://skillicons.dev/icons";

/** Full URLs for icons not on skillicons.dev (Stripe, AWS services). Uses Simple Icons via jsDelivr. */
const SI = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons";
export const customIconUrls: Record<string, string> = {
  "Stripe API": `${SI}/stripe.svg`,
  "EC2": `${SI}/amazonec2.svg`,
  "S3": `${SI}/amazons3.svg`,
  "CloudWatch": `${SI}/amazoncloudwatch.svg`,
};

export function getSkillIconUrl(iconId: string, theme: "dark" | "light"): string {
  return `${SKILLICONS_BASE}?i=${encodeURIComponent(iconId)}&theme=${theme}`;
}

export function getSkillIconId(label: string): string | null {
  const exact = skillIconIds[label];
  if (exact) return exact;
  const key = Object.keys(skillIconIds).find(
    (k) => label === k || label.startsWith(k) || label.includes(k)
  );
  return key ? skillIconIds[key] ?? null : null;
}

/** Returns the full image URL for a skill label, or null if no icon. Uses custom URLs for Stripe & AWS services. */
export function getSkillIconUrlByLabel(label: string, theme: "dark" | "light"): string | null {
  if (customIconUrls[label]) return customIconUrls[label];
  const iconId = getSkillIconId(label);
  if (!iconId) return null;
  return getSkillIconUrl(iconId, theme);
}
