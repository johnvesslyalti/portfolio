import { openSourceContributions } from "@/features/open-source/data/contributions";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitPullRequest } from "lucide-react";

export default function OpenSource() {
  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        Open Source
      </h2>

      <div className="flex flex-col gap-6">
        {openSourceContributions.map((contribution, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500 font-mono">
                    {contribution.repo}
                  </span>
                  <span className="text-xs text-neutral-500">·</span>
                  <span className="text-xs text-neutral-500">
                    {contribution.date}
                  </span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  ServerCN — Backend Framework
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <GitPullRequest className="w-3.5 h-3.5" />
                  Merged PR
                </a>
                <a
                  href={contribution.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Website
                </a>
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Engineered and merged a hybrid authentication blueprint integrating PostgreSQL and Drizzle ORM into the ServerCN framework. Delivered reusable scaffold templates for both MVC and feature-based project structures, with strong TypeScript typing and a streamlined developer setup path.
            </p>

            <div className="flex flex-wrap gap-2">
              {contribution.tech.map((t, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="border-neutral-700 bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition-colors duration-200 px-3 py-1 text-xs"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
