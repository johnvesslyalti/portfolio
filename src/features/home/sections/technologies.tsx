import { ReactNode } from "react";
import {
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiAmazonwebservices,
  SiFastapi,
  SiOpenai,
  SiGithubactions,
} from "react-icons/si";
import { Bot, Database, Workflow } from "lucide-react";

interface Technology {
  name: string;
  icon: ReactNode;
  link?: string;
}

export default function Technologies() {
  const technologies: Record<string, Technology[]> = {
    "AI & RAG": [
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
        name: "MCP",
        icon: <Workflow className="w-4 h-4" />,
        link: "https://modelcontextprotocol.io/",
      },
    ],
    "AI EVALUATIONS": [
      {
        name: "Langfuse",
        icon: <Bot className="w-4 h-4" />,
        link: "https://langfuse.com/",
      },
      {
        name: "Langsmith",
        icon: <Workflow className="w-4 h-4" />,
        link: "https://www.langchain.com/langsmith",
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
        name: "Redis",
        icon: <SiRedis />,
        link: "https://redis.io/",
      },
    ],
    DEVOPS: [
      {
        name: "Kubernetes",
        icon: <SiKubernetes />,
        link: "https://kubernetes.io/",
      },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions />,
        link: "https://github.com/features/actions",
      },
      {
        name: "AWS",
        icon: <SiAmazonwebservices />,
        link: "https://aws.amazon.com/",
      },
    ],
    OBSERVABILITY: [
      {
        name: "OpenTelemetry",
        icon: <Workflow className="w-4 h-4" />,
        link: "https://opentelemetry.io/",
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
