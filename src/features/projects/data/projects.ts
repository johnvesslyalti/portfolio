export const projects = [
  {
    name: "DevNest",
    src: "/projects/devnest.mp4",
    github: "https://github.com/johnvesslyalti/dev-nest",
    live: "https://dev-nest-4hxb.onrender.com/api/docs",

    shortDescription:
      "Modular NestJS backend for a social platform with dedicated auth, posts, comments, likes, feed, profile, email, and shared infrastructure layers backed by PostgreSQL as the system of record.",
    detailedDescription:
      "- Built a modular NestJS backend for a social platform with dedicated auth, posts, comments, likes, feed, profile, email, and shared infrastructure layers backed by PostgreSQL as the system of record.\n- Implemented secure authentication with JWT access tokens, HTTP-only refresh token rotation, session caps, token reuse detection, soft-delete account revocation, Google OAuth 2.0 sign-in, and SHA-256 hashing of stored login IP metadata.\n- Designed pull-based public and follower feed APIs with cursor pagination, Redis-backed caching, and Prisma query patterns that return author metadata and interaction counts without feed fan-out duplication.\n- Engineered Redis-backed platform infrastructure for distributed rate limiting, cacheable profile and content reads, and BullMQ worker processing for asynchronous welcome email jobs.\n- Offloaded CPU-heavy bcrypt hashing and password verification to a piscina worker-thread pool to keep request handling responsive under concurrent authentication load.\n- Validated production-critical behavior through Jest E2E coverage for auth, posts, comments, likes, feeds, rate limiting, cursor pagination, soft-delete flows, and worker-pool concurrency.",
    tech: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "BullMQ",
      "Piscina (Workers)",
      "Jest E2E",
    ],
    category: "Backend",
  },
  {
    name: "XOXO",
    src: "/projects/tic-tac-toe.mp4",
    github: "https://github.com/johnvesslyalti/tic-tac-toe-api",
    live: "https://tic-tac-toe.johnvesslyalti.xyz",
    shortDescription:
      "Modern, high-performance multiplayer Tic-Tac-Toe featuring an authoritative backend, real-time matchmaking, and a sleek glassmorphic UI.",
    detailedDescription:
      "- Built a real-time multiplayer Tic-Tac-Toe game using Nakama as the authoritative game server to ensure game state integrity and prevent client-side cheating.\n- Implemented a secure Node.js proxy layer to handle authentication and protect sensitive server keys, acting as a gateway between the Next.js client and the Nakama backend.\n- Engineered real-time communication using WebSockets for sub-100ms latency, enabling seamless move synchronization and instant match state updates.\n- Designed a sleek, responsive glassmorphic UI using Tailwind CSS 4, providing a premium and modern user experience across different devices.\n- Integrated Nakama's matchmaking system to allow users to find opponents instantly or join specific matches via unique room IDs.\n- Orchestrated the entire development and production environment using Docker and Docker Compose, ensuring consistent behavior across different deployment targets.",
    tech: [
      "TypeScript",
      "Next.js",
      "Nakama",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    category: "Full Stack",
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
