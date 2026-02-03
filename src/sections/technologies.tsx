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
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    ORM: [{ name: "Prisma", icon: <SiPrisma /> }],
    FRONTEND: [{ name: "Next.js", icon: <SiNextdotjs /> }],
    "OPERATING SYSTEM": [{ name: "Linux", icon: <SiLinux /> }],
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/70 p-8 shadow-lg shadow-neutral-200/30 backdrop-blur dark:border-white/5 dark:bg-neutral-950/60 dark:shadow-neutral-950/60">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Technologies
          </h2>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            The stack powering my day-to-day builds.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(technologies).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/80 p-5 shadow-sm shadow-neutral-200/30 dark:border-white/5 dark:bg-neutral-900/60"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex items-center gap-2 border-neutral-200/60 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-200 hover:shadow-md dark:border-white/10 dark:bg-neutral-950/40 dark:text-neutral-200"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
