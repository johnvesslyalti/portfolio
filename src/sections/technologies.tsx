import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiLinux,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { HiOutlineQueueList } from "react-icons/hi2";

export default function Technologies() {
  const technologies = {
    LANGUAGE: [{ name: "TypeScript", icon: <SiTypescript /> }],
    BACKEND: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "BullMQ", icon: <HiOutlineQueueList /> },
    ],
    DATABASE: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
    ORM: [{ name: "Prisma", icon: <SiPrisma /> }],
    FRONTEND: [{ name: "Next.js", icon: <SiNextdotjs /> }],
    "OPERATING SYSTEM": [{ name: "Linux", icon: <SiLinux /> }],
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
              {items.map((tech, index) => (
                <Badge
                  key={index}
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
