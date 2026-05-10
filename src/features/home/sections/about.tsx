export default function About() {

  return (
    <section className="border p-5 rounded-lg transition-all duration-500">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        About
      </h2>

      <div className="relative">
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>
            I'm a <span className="text-neutral-900 dark:text-neutral-100 font-medium">full stack developer</span> with a deep obsession for <span className="text-neutral-900 dark:text-neutral-100 font-medium">system design</span> and <span className="text-neutral-900 dark:text-neutral-100 font-medium">systems thinking architecture</span>. I believe great software emerges from understanding how every component interconnects and scales. Currently, I'm exploring <span className="text-neutral-900 dark:text-neutral-100 font-medium">AI & RAG systems</span> — building intelligent retrieval pipelines that bridge language models and real-world data.
          </p>

          <p>
            From backend orchestration with Node.js and Python, to database optimization with PostgreSQL and Redis, to modern frontend experiences with Next.js, I think across the entire stack. My approach is grounded in <span className="text-neutral-900 dark:text-neutral-100 font-medium underline decoration-neutral-400 underline-offset-4">system thinking</span> — designing resilient, scalable architectures where every decision reflects a deeper understanding of trade-offs, constraints, and long-term consequences.
          </p>
        </div>
      </div>
    </section>
  );
}
