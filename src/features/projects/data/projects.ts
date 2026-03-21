export const projects = [
  {
    name: "DevNest",
    src: "/projects/devnest.mp4",
    github: "https://github.com/johnvesslyalti/devnest",

    shortDescription:
      "Built a highly-concurrent full-stack social platform using NestJS, scaling with Piscina worker threads, Prisma (PostgreSQL/MongoDB), Redis/BullMQ, and robust JWT auth.",
    detailedDescription:
      "- Scaled API to handle 5,000+ concurrent users by offloading CPU-bound cryptography (bcrypt) to a Piscina-managed worker thread pool and implementing clustering, completely eliminating event loop blocking.\n- Engineered a security-critical authentication system using JWTs, stateful UUID-tracked refresh token rotation to prevent concurrent login collisions, cascade session revocation, and SHA-256 IP hashing.\n- Migrated the home feed from a legacy MongoDB push model to a pull-based PostgreSQL architecture, utilizing connection pooling to aggregate social graphs on demand and eliminate synchronization drift.\n- Deployed Redis-backed BullMQ worker processes for scalable asynchronous execution and distributed rate limiting, isolating background workloads from request-response latency.\n- Implemented CI/CD pipelines with GitHub Actions, enforcing build validation and deterministic E2E test suites that validate core APIs, security invariants, and multi-threaded worker stability.",
    tech: [
      "TypeScript",
      "NestJS",
      "Piscina (Workers)",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Redis + BullMQ",
      "JWT Security",
      "GitHub Actions CI",
    ],
    category: "Backend",
  },
  {
    name: "LiftLog",
    src: "/projects/liftlog.mp4",
    github: "https://github.com/johnvesslyalti/lift-log",
    live: "https://johnvesslyalti-liftlog.vercel.app",
    shortDescription:
      "Fitness analytics platform built on relationally sound data modeling and query-efficient training insights.",
    detailedDescription:
      "- Architected a normalized PostgreSQL schema prioritizing relational integrity and long-term analytical correctness.\n- Designed and optimized aggregation-heavy SQL queries computing training volume and progression metrics with sub-120 ms response latency.\n- Focused on indexing strategy, query planning, and efficient data access patterns for responsive analytics workloads.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Auth.js / JWT"],
    category: "Full Stack",
  },
  {
    name: "SubTrackr",
    src: "/projects/subtrackr.mp4",
    github: "https://github.com/johnvesslyalti/sub-trackr",
    live: "https://johnvesslyalti-subtrackr.vercel.app",
    shortDescription:
      "Multi-tenant subscription management SaaS emphasizing secure tenant isolation and deterministic behavior under shared infrastructure.",
    detailedDescription:
      "- Developed a multi-tenant backend enforcing strict tenant-aware data isolation and predictable CRUD semantics.\n- Implemented OAuth-based authentication with hardened session handling and explicit security boundaries.\n- Designed application logic emphasizing correctness, concurrency safety, and deterministic behavior under shared infrastructure.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Auth.js / JWT"],
    category: "Full Stack",
  },
];
