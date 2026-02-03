export default function About() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/70 p-8 shadow-lg shadow-neutral-200/30 backdrop-blur dark:border-white/5 dark:bg-neutral-950/60 dark:shadow-neutral-950/60">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            About
          </h2>
          <p className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Designing resilient backend systems with a human-centered product
            mindset.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "System design",
              description:
                "Architecting scalable services, reliable data flows, and secure integrations.",
            },
            {
              title: "Performance",
              description:
                "Optimizing latency, infrastructure costs, and observability for critical workloads.",
            },
            {
              title: "Product impact",
              description:
                "Shipping features that unlock measurable outcomes for teams and users.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/80 p-4 text-sm text-neutral-600 shadow-sm shadow-neutral-200/30 dark:border-white/5 dark:bg-neutral-900/60 dark:text-neutral-300"
            >
              <div className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {item.title}
              </div>
              <p className="mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
