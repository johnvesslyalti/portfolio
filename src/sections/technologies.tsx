import { ReactNode } from "react";
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiLinux,
  SiMongodb,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { HiOutlineQueueList } from "react-icons/hi2";

interface Technology {
  name: string;
  icon: ReactNode;
  link?: string;
}

export default function Technologies() {
  const technologies: Record<string, Technology[]> = {
    LANGUAGE: [
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        link: "https://www.typescriptlang.org/",
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
    ],
    DATABASE: [
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
    ORM: [
      {
        name: "Prisma",
        icon: <SiPrisma />,
        link: "https://www.prisma.io/",
      },
    ],
    FRONTEND: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        link: "https://nextjs.org/",
      },
    ],
    "OPERATING SYSTEM": [
      {
        name: "Linux",
        icon: <SiLinux />,
        link: "https://www.linux.org/",
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
