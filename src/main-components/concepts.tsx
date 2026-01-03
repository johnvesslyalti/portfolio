import { Badge } from "@/components/ui/badge";

export default function Concepts() {
  const concepts = [
    "Authentication & Authorization (JWT, OAuth)",
    "Scalable API Architecture",
    "Database Modeling & Data Consistency",
    "Caching Strategies & Cache Invalidation",
    "Distributed Rate Limiting",
    "Asynchronous & Background Job Processing",
    "API Security & Threat Mitigation",
    "Environment Configuration & Secrets Management",
  ];

  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        Core Backend Concepts
      </h2>

      <div className="flex flex-wrap gap-2">
        {concepts.map((concept, index) => (
          <Badge
            key={index}
            variant="outline"
            className="
              border-neutral-400
              text-neutral-800 dark:text-neutral-100
              hover:bg-neutral-200 dark:hover:bg-neutral-800
              transition
            "
          >
            {concept}
          </Badge>
        ))}
      </div>
    </section>
  );
}
