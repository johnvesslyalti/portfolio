export default function About() {
  return (
    <section className="rounded-2xl p-5
                        bg-white/10 dark:bg-white/5
                        backdrop-blur-2xl
                        border border-white/30 dark:border-white/10
                        shadow-[0_8px_32px_rgba(0,0,0,0.10)]">

      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
        About
      </h2>

      <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        I'm an{" "}
        <span className="text-neutral-900 dark:text-neutral-100 font-medium">AI Engineer</span>{" "}
        who builds at the intersection of{" "}
        <span className="text-neutral-900 dark:text-neutral-100 font-medium">large language models</span>,{" "}
        <span className="text-neutral-900 dark:text-neutral-100 font-medium">agentic systems</span>,
        and production infrastructure, designing{" "}
        <span className="text-neutral-900 dark:text-neutral-100 font-medium">RAG pipelines</span>,
        orchestrating multi-step AI workflows, and shipping intelligent features that go beyond
        demos into reliable, scalable products. I think in systems: how context flows, where
        models fail, and how to engineer around their limits with the right retrieval, memory,
        and tooling strategies.
      </p>
    </section>
  );
}
