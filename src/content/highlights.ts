export type Highlight = {
  title: string;
  description: string;
};

export const highlights: Highlight[] = [
  {
    title: "Auth & session design",
    description:
      "JWT access tokens with refresh flows, secure cookie patterns, and pragmatic revocation strategies.",
  },
  {
    title: "Rate limiting & abuse protection",
    description:
      "Protect critical endpoints with quotas, burst control, and clear error semantics for clients.",
  },
  {
    title: "Caching that pays for itself",
    description:
      "Use in-memory caches and data-shaping to reduce DB pressure while keeping correctness and TTLs explicit.",
  },
  {
    title: "Payments & webhooks",
    description:
      "Idempotent handlers, signature verification, and reliable state transitions around third-party callbacks.",
  },
  {
    title: "API design under constraints",
    description:
      "Pagination, timeouts, retries, and versioned contracts so systems evolve without breaking clients.",
  },
  {
    title: "AI-assisted engineering",
    description:
      "Use AI for exploration and scaffolding, then validate with tests, invariants, and production-grade review.",
  },
];

