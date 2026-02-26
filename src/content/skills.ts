export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["C", "C++", "Go", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend & APIs",
    items: [
      "REST API design",
      "Microservices fundamentals",
      "JWT auth",
      "OAuth concepts",
      "API security",
      "Rate limiting",
      "Caching strategies",
      "Pagination",
      "Error handling",
      "Concurrency (Go routines)",
    ],
  },
  {
    title: "Frameworks",
    items: ["Gin (Go)", "Node.js", "Express.js", "React", "TanStack Query", "Zustand"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Indexing", "Transactions", "Query optimization"],
  },
  {
    title: "Infra & DevEx",
    items: ["EC2", "S3", "CloudWatch", "Glue", "Docker (basics)", "Linux", "CI/CD fundamentals"],
  },
  {
    title: "Tooling",
    items: ["Git", "GitHub", "Postman", "Stripe API", "Webhooks"],
  },
];

