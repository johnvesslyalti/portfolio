export default function About() {

  return (
    <section className="border p-5 rounded-lg transition-all duration-500">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        About
      </h2>

      <div className="relative">
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>
            I am an <span className="text-neutral-900 dark:text-neutral-100 font-medium italic">AI Systems Engineer</span> obsessed with the intersection of <span className="text-neutral-900 dark:text-neutral-100 font-medium">Large Language Models</span>, <span className="text-neutral-900 dark:text-neutral-100 font-medium">Vector Search</span>, and <span className="text-neutral-900 dark:text-neutral-100 font-medium">High-Performance Backends</span>.
          </p>

          <p>
            I specialize in architecting <span className="text-neutral-900 dark:text-neutral-100 font-medium">RAG Pipelines</span> that scale. My focus is on the deep engineering challenges of the modern stack: optimizing retrieval latency, designing intelligent query processing layers, and building distributed systems that handle complexity with deterministic precision.
          </p>

          <p>
            Driven by <span className="text-neutral-900 dark:text-neutral-100 font-medium underline decoration-neutral-400 underline-offset-4">System Thinking</span>, I spend my time at the bleeding edge, turning raw compute into intelligent, production-ready infrastructure that defines the next era of software.
          </p>
        </div>
      </div>
    </section>
  );
}
