export const projects = [
  {
    name: "Inferr",
    src: "/projects/inferr.mp4",
    github: "https://github.com/johnvesslyalti/inferr",
    live: "https://inferr.xyz",
    shortDescription:
      "Personalized AI developer feed with a three-stage ingestion pipeline, pgvector HNSW semantic ranking, and a LangGraph agentic RAG chat that supports multi-turn conversation history.",
    detailedDescription:
      "- Built a full-stack AI developer feed in a pnpm/Turborepo monorepo — Next.js 15 frontend, NestJS 11 API — deployed on Vercel and Render with a Neon serverless PostgreSQL database.\n- Engineered a three-stage daily ingestion pipeline: parallel metadata fetch from Hacker News and Dev.to → HTML content extraction via Cheerio in concurrent batches of 5 → sequential gpt-4o-mini summarisation and text-embedding-3-small embeddings, triggered by a GitHub Actions cron job and idempotent via URL deduplication.\n- Designed a personalized feed ranking system using a pgvector HNSW index (1536-dim, cosine) with a tag-overlap bonus (−0.12 per matching tag), cosine distance threshold < 0.5, and a 48-hour recency filter applied in TypeScript — falling back gracefully when no recent articles clear the threshold.\n- Built a LangGraph agentic RAG chat — a four-node state machine (retrieve → grade → rewrite → generate) that accepts multi-turn conversation history, separates the search query from the original question to prevent rewrite contamination, and retries up to twice before generating with the best available context.\n- Implemented a dual-token auth system: short-lived JWT access tokens (15 min) paired with SHA-256-hashed refresh tokens stored in a dedicated table and delivered via HttpOnly cookie (7 days), with atomic Drizzle transactions for rotation and replacement-chain traversal (depth 10) for multi-tab reuse detection.",
    tech: [
      "Next.js 15",
      "NestJS 11",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Drizzle ORM",
      "LangGraph",
      "OpenAI",
      "Google OAuth",
    ],
    category: "AI / Full Stack",
  },
  {
    name: "DevNest",
    src: "/projects/devnest.mp4",
    github: "https://github.com/johnvesslyalti/dev-nest",
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
    name: "PG RAG",
    src: "/projects/pg-rag.mp4",
    github: "https://github.com/johnvesslyalti/rag-paulgraham",
    shortDescription:
      "Bleeding-edge RAG system featuring an intelligent query rewriter, semantic search via FAISS, and real-time streaming responses.",
    detailedDescription:
      "- Architected a complete RAG (Retrieval-Augmented Generation) pipeline using LlamaIndex to orchestrate document ingestion, vector indexing, and LLM generation.\n- Implemented an Intelligence Layer for query rewriting and intent detection, allowing the system to handle complex multi-turn conversations and clarify user intent.\n- Engineered a high-performance vector retrieval system using FAISS and HuggingFace embeddings for sub-50ms semantic search across thousands of text chunks.\n- Developed a responsive Next.js 16 frontend with real-time streaming (NDJSON) and a minimalist, glassmorphic UI providing a premium ChatGPT-like experience.\n- Orchestrated local and cloud LLMs (Ollama, OpenAI) via a FastAPI backend, handling asynchronous event streams for low-latency interactions.",
    tech: [
      "LlamaIndex",
      "FastAPI",
      "FAISS",
      "Python",
      "Ollama",
      "Next.js 16",
      "Tailwind CSS 4",
    ],
    category: "AI / RAG",
  },
];
