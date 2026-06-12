import {
  GitPullRequest,
  ExternalLink
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface Contribution {
  repo: string;
  repoUrl: string;
  prTitle: string;
  prNumber: string;
  prUrl: string;
  status: "Open" | "Merged";
  description: string;
  tech: string[];
}

export default function Contributions() {
  const contribution: Contribution = {
    repo: "SigNoz/signoz",
    repoUrl: "https://github.com/SigNoz/signoz",
    prTitle: "fix(alerts): set default time range to 5m on create alert page",
    prNumber: "#11601",
    prUrl: "https://github.com/SigNoz/signoz/pull/11601",
    status: "Open",
    description: "Identified ClickHouse Out-of-Memory (OOM) errors caused by default 6-hour high-cardinality queries during new alert creation. Optimized performance by reducing the default time range to 5 minutes, mitigating backend memory spikes in production scale environments.",
    tech: ["TypeScript", "React", "ClickHouse", "Alerting Systems"],
  };

  return (
    <section className="rounded-2xl p-6
                        bg-white/10 dark:bg-white/5
                        backdrop-blur-2xl
                        border border-white/30 dark:border-white/10
                        shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
      
      {/* Title */}
      <h2 className="text-xl font-semibold border-b border-neutral-200 dark:border-neutral-800 mb-5 pb-3 flex items-center gap-2">
        <GitPullRequest className="text-emerald-500 dark:text-emerald-400 w-5 h-5" />
        Open Source Contributions
      </h2>

      {/* Single Highlighted Contribution */}
      <div className="group flex flex-col p-4 rounded-xl
                     bg-white/5 dark:bg-white/2
                     border border-white/10 dark:border-white/5
                     hover:border-white/30 dark:hover:border-white/15
                     hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)]
                     transition-all duration-300"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-2.5">
          <div>
            <a
              href={contribution.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors flex items-center gap-1.5"
            >
              <FaGithub className="w-3.5 h-3.5" />
              {contribution.repo}
            </a>
            <h3 className="text-base font-semibold mt-1 text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5 flex-wrap">
              {contribution.prTitle}{" "}
              <span className="text-neutral-400 dark:text-neutral-500 font-mono text-sm font-normal">
                {contribution.prNumber}
              </span>
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/40 shadow-xs">
            <GitPullRequest className="w-3.5 h-3.5" />
            {contribution.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          {contribution.description}
        </p>

        {/* Footer / Tech list & link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto pt-4 border-t border-neutral-200/50 dark:border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {contribution.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[10px] font-medium rounded-md
                           bg-neutral-100 dark:bg-neutral-800/60
                           text-neutral-600 dark:text-neutral-400
                           border border-neutral-200/50 dark:border-neutral-700/50"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={contribution.prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold
                       bg-white/10 dark:bg-white/5 
                       text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white
                       border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10
                       transition-all duration-200 cursor-pointer"
          >
            <span>View Pull Request</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
