export default function About() {

  return (
    <section className="border p-5 rounded-lg transition-all duration-500">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        About
      </h2>

      <div className="relative">
        <div className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>
            I'm an <span className="text-neutral-900 dark:text-neutral-100 font-medium">AI Engineer</span> who builds at the intersection of <span className="text-neutral-900 dark:text-neutral-100 font-medium">large language models</span>, <span className="text-neutral-900 dark:text-neutral-100 font-medium">agentic systems</span>, and production infrastructure, designing <span className="text-neutral-900 dark:text-neutral-100 font-medium">RAG pipelines</span>, orchestrating multi-step AI workflows, and shipping intelligent features that go beyond demos into reliable, scalable products. I think in systems: how context flows, where models fail, and how to engineer around their limits with the right retrieval, memory, and tooling strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
