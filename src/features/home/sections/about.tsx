export default function About() {
  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        About
      </h2>

      <p className="text-lg leading-relaxed">
        Backend engineer based in Bengaluru.
      </p>

      <p className="text-lg leading-relaxed mt-4">
        I build production-grade systems — auth infrastructure, async
        pipelines, multi-tenant SaaS, and analytics APIs. Every system
        I design is built for correctness first, then performance.
      </p>

      <p className="text-lg leading-relaxed mt-4">
        Three projects shipped. All public. All live.
      </p>
    </section>
  );
}
