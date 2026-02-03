import GitHubCalendar from "react-github-calendar";

export default function GitHub() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/70 p-8 shadow-lg shadow-neutral-200/30 backdrop-blur dark:border-white/5 dark:bg-neutral-950/60 dark:shadow-neutral-950/60">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Open Source
          </h2>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            A snapshot of my GitHub momentum over the past year.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Focusing on consistent contributions, maintainer collaboration, and
            experimental builds.
          </p>
        </div>

        <div className="github-calendar-wrapper w-full rounded-2xl border border-white/10 bg-white/90 p-4 shadow-sm shadow-neutral-200/30 dark:border-white/5 dark:bg-neutral-900/60">
          <GitHubCalendar
            username="johnvesslyalti"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>
    </section>
  );
}
