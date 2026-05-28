export const projects = [
  {
    name: "Inferr",
    src: "/projects/inferr.mp4",
    github: "https://github.com/johnvesslyalti/ai-developer-feed",
    live: "https://inferr.xyz",
    shortDescription:
      "Personalized AI developer feed that ranks Hacker News and Dev.to articles with pgvector embeddings and answers questions through RAG chat.",
    detailedDescription:
      "- Built a full-stack AI developer feed with a Next.js 16 frontend and NestJS 11 API in a pnpm/Turborepo monorepo.\n- Implemented Google OAuth 2.0 authentication with HTTP-only refresh cookies, short-lived JWT access tokens, and protected user feed, profile, and chat routes.\n- Designed a PostgreSQL 16 + pgvector data model for articles, embeddings, refresh tokens, and user interests using Drizzle ORM migrations.\n- Engineered semantic feed ranking by embedding each user's interest tags and ordering articles by vector similarity against summarized Hacker News and Dev.to content.\n- Built a Redis/Bull scrape pipeline that runs daily, retries failures with exponential backoff, and processes unsummarized articles through OpenAI embeddings and summaries.\n- Added a RAG chat endpoint that retrieves the most relevant article summaries and answers developer questions with cited feed sources.",
    tech: [
      "Next.js 16",
      "NestJS 11",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Drizzle ORM",
      "Redis",
      "Bull",
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
