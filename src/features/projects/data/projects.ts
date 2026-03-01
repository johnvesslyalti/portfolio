export const projects = [
    {
        name: "DevNest",
        src: "/projects/devnest.mp4",
        github: "https://github.com/johnvesslyalti/devnest",

        shortDescription:
            "Social platform backend with JWT refresh token rotation, cascade session revocation, Redis async workers, and a pull-based feed architecture on PostgreSQL. Full CI/CD with E2E test suites.",
        detailedDescription:
            "- Architected a streamlined monolithic backend with PostgreSQL as the strict single source of truth, enforcing clean dependency injection and modular application boundaries.\n- Engineered a security-critical authentication system using JWT access tokens, UUID-tracked refresh token rotation to prevent concurrent login collisions, cascade revocation, and SHA-256 IP hashing.\n- Migrated the home feed from a legacy MongoDB push model to a pull-based SQL architecture, aggregating social graph posts on demand to eliminate duplication and synchronization drift.\n- Implemented CI/CD pipelines with GitHub Actions, enforcing build validation, migration safety checks, and End-to-End (E2E) quality gates.\n- Deployed Redis-backed BullMQ worker processes for scalable asynchronous execution and distributed rate limiting, isolating background workloads from request-response latency.\n- Authored deterministic E2E suites validating core REST APIs and security invariants, including token rotation correctness and cascading session revocations.",
        tech: [
            "Node.js",
            "NestJS",
            "TypeScript",
            "Next.js",
            "PostgreSQL",
            "MongoDB",
            "Prisma",
            "Redis + BullMQ",
            "JWT Auth",
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
            "Fitness analytics platform with normalized PostgreSQL schema and sub-120ms query latency on aggregation-heavy training volume and progression metrics.",
        detailedDescription:
            "- Architected a normalized PostgreSQL schema prioritizing relational integrity and long-term analytical correctness.\n- Designed and optimized aggregation-heavy SQL queries computing training volume and progression metrics with sub-120 ms response latency.\n- Focused on indexing strategy, query planning, and efficient data access patterns for responsive analytics workloads.",
        tech: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "Auth.js / JWT",
        ],
        category: "Full Stack",
    },
    {
        name: "SubTrackr",
        src: "/projects/subtrackr.mp4",
        github: "https://github.com/johnvesslyalti/sub-trackr",
        live: "https://johnvesslyalti-subtrackr.vercel.app",
        shortDescription:
            "Multi-tenant subscription SaaS with strict tenant-aware data isolation, OAuth 2.0 auth, and concurrent-safe application logic.",
        detailedDescription:
            "- Developed a multi-tenant backend enforcing strict tenant-aware data isolation and predictable CRUD semantics.\n- Implemented OAuth-based authentication with hardened session handling and explicit security boundaries.\n- Designed application logic emphasizing correctness, concurrency safety, and deterministic behavior under shared infrastructure.",
        tech: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "Auth.js / JWT",
        ],
        category: "Full Stack",
    },
];
