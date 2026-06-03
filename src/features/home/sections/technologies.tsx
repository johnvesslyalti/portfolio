import { ReactNode } from "react";
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazonwebservices,
  SiPython,
  SiFastapi,
  SiOpenai,
  SiVercel,
  SiGithubactions,
  SiTurborepo,
  SiDrizzle,
} from "react-icons/si";
import { Bot, Database, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HiOutlineQueueList } from "react-icons/hi2";

interface Technology {
  name: string;
  icon: ReactNode;
  link?: string;
}

export default function Technologies() {
  const technologies: Record<string, Technology[]> = {
    "AI & RAG": [
      {
        name: "LangChain",
        icon: <Bot className="w-4 h-4" />,
        link: "https://www.langchain.com/",
      },
      {
        name: "LangGraph",
        icon: <Workflow className="w-4 h-4" />,
        link: "https://www.langchain.com/langgraph",
      },
      {
        name: "OpenAI",
        icon: <SiOpenai />,
        link: "https://openai.com/",
      },
      {
        name: "LlamaIndex",
        icon: <Bot className="w-4 h-4" />,
        link: "https://www.llamaindex.ai/",
      },
      {
        name: "Ollama",
        icon: <Bot className="w-4 h-4" />,
        link: "https://ollama.ai/",
      },
    ],
    LANGUAGE: [
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Python",
        icon: <SiPython />,
        link: "https://www.python.org/",
      },
    ],
    BACKEND: [
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        link: "https://nodejs.org/en",
      },
      {
        name: "NestJS",
        icon: <SiNestjs />,
        link: "https://nestjs.com/",
      },
      {
        name: "BullMQ",
        icon: <HiOutlineQueueList />,
        link: "https://bullmq.io/",
      },
      {
        name: "FastAPI",
        icon: <SiFastapi />,
        link: "https://fastapi.tiangolo.com/",
      },
    ],
    DATABASE: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        link: "https://www.postgresql.org/",
      },
      {
        name: "pgvector",
        icon: <Database className="w-4 h-4" />,
        link: "https://github.com/pgvector/pgvector",
      },
      {
        name: "Drizzle ORM",
        icon: <SiDrizzle />,
        link: "https://orm.drizzle.team/",
      },
      {
        name: "Redis",
        icon: <SiRedis />,
        link: "https://redis.io/",
      },
    ],
    FRONTEND: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        link: "https://nextjs.org/",
      },
    ],
    DEVOPS: [
      {
        name: "Docker",
        icon: <SiDocker />,
        link: "https://www.docker.com/",
      },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions />,
        link: "https://github.com/features/actions",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        link: "https://vercel.com/",
      },
      {
        name: "Turborepo",
        icon: <SiTurborepo />,
        link: "https://turbo.build/repo",
      },
      {
        name: "AWS",
        icon: <SiAmazonwebservices />,
        link: "https://aws.amazon.com/",
      },
    ],
  };

  return (
    <section className="rounded-2xl p-5
                        bg-white/10 dark:bg-white/5
                        backdrop-blur-2xl
                        border border-white/30 dark:border-white/10
                        shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
        Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(technologies).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-2.5">
            <h3 className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((tech, index) => {
                const badge = (
                  <span className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-xl
                                   bg-white/20 dark:bg-white/8
                                   border border-white/30 dark:border-white/10
                                   text-neutral-700 dark:text-neutral-300
                                   hover:bg-white/30 dark:hover:bg-white/15
                                   hover:scale-105
                                   transition-all duration-200 backdrop-blur-sm cursor-pointer">
                    <span className="text-base">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </span>
                );

                if (tech.link) {
                  return (
                    <a key={index} href={tech.link} target="_blank" rel="noopener noreferrer">
                      {badge}
                    </a>
                  );
                }

                return <div key={index}>{badge}</div>;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
