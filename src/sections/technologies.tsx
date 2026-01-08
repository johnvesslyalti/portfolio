import {
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { HiOutlineQueueList } from "react-icons/hi2";

export default function Technologies() {
  const technologies = [
    // --- Backend / Systems ---
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Prisma ORM", icon: <SiPrisma /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "BullMQ (Background Jobs)", icon: <HiOutlineQueueList /> },
    { name: "Next.js (App Router + Server Actions)", icon: <SiNextdotjs /> },
  ];

  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        Technologies
      </h2>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge
            key={index}
            variant="outline"
            className="
              border-neutral-700
              text-neutral-800 dark:text-neutral-100
              hover:bg-neutral-200 dark:hover:bg-neutral-800
              transition
              flex items-center gap-2
            "
          >
            <span className="text-lg">{tech.icon}</span>
            <span>{tech.name}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
}
