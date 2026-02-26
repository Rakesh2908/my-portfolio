export type Project = {
  name: string;
  tagline: string;
  problem: string;
  approach: string[];
  impact: string[];
  stack: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    name: "TechTrove",
    tagline: "Backend-first e-commerce with production-style service boundaries.",
    problem:
      "Build an e-commerce platform with secure auth, reliable payments, and maintainable domain boundaries—without cutting corners on security.",
    approach: [
      "Layered Go architecture (handler → service → repository) across 7 domains, backed by PostgreSQL with transaction-aware data access.",
      "JWT auth with httpOnly refresh tokens, bcrypt password hashing, and rate-limited auth endpoints.",
      "Stripe Checkout + webhooks with signature verification and idempotency-minded state transitions.",
      "Caching and pagination to keep latency predictable under load; clean CORS configuration.",
    ],
    impact: [
      "Shipped 25+ REST endpoints with consistent error semantics and no raw SQL in request paths.",
      "Delivered a typed React/TS frontend with a fast, mobile-first checkout experience.",
    ],
    stack: ["Go", "Gin", "PostgreSQL", "React", "TypeScript", "Stripe"],
    links: [{ label: "GitHub", href: "https://github.com/Rakesh2908/shopgo" }],
  },
  {
    name: "Cyberbullying Tweet Recognition",
    tagline: "ML pipeline for multi-class cyberbullying classification.",
    problem:
      "Classify cyberbullying tweets into multiple categories with strong macro performance across classes.",
    approach: [
      "Text cleaning + normalization; tokenization and lemmatization for stable feature extraction.",
      "TF-IDF features with model comparisons; tuned Linear SVM via GridSearchCV.",
      "Evaluation focused on macro-F1 to balance performance across classes.",
    ],
    impact: ["Achieved ~82% macro F1 on a 47.7k tweet dataset."],
    stack: ["Python", "scikit-learn", "NLTK", "Pandas"],
    links: [{ label: "GitHub", href: "https://github.com/Rakesh2908/Cyberbullying-Tweet-Recognition" }],
  },
];

