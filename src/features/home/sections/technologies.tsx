import { ReactNode } from "react";
import {
  SiTypescript,
  SiJavascript,    
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiLinux,
  SiMongodb,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { BsDatabase } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { HiOutlineQueueList } from "react-icons/hi2";

interface Technology {
  name: string;
  icon: ReactNode;
  link?: string;
}

export default function Technologies() {
  const technologies: Record<string, Technology[]> = {
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
        name: "Prisma ORM",
        icon: <SiPrisma />,
        link: "https://www.prisma.io/",
      },
      {
        name: "REST API Design",
        icon: <BsDatabase />,
      },
    ],
    DATABASES: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        link: "https://www.postgresql.org/",
      },
      {
        name: "Redis",
        icon: <SiRedis />,
        link: "https://redis.io/",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        link: "https://www.mongodb.com/",
      },
    ],
    INFRASTRUCTURE: [
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
        name: "Linux",
        icon: <SiLinux />,
        link: "https://www.linux.org/",
      },
    ],
    LANGUAGE: [
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript (ES6+)",
        icon: <SiJavascript />,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "SQL",
        icon: <DiSqllite />,
      },
    ],
  };

  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(technologies).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((tech, index) => {
                const badge = (
                  <Badge
                    variant="outline"
                    className="
                    border-neutral-700 bg-neutral-800
                    text-neutral-300
                    hover:bg-neutral-700
                    transition-colors duration-200
                    flex items-center gap-2 px-3 py-1.5
                  "
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </Badge>
                );

                if (tech.link) {
                  return (
                    <a
                      key={index}
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
