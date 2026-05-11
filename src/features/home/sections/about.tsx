export default function About() {

  return (
    <section className="border p-5 rounded-lg transition-all duration-500">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        About
      </h2>

      <div className="relative">
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>
            I&apos;m a <span className="text-neutral-900 dark:text-neutral-100 font-medium">backend engineer</span> focused on building production AI systems — <span className="text-neutral-900 dark:text-neutral-100 font-medium">RAG pipelines</span>, <span className="text-neutral-900 dark:text-neutral-100 font-medium">LLM-integrated APIs</span>, and the infrastructure that keeps them reliable. I work across Python and TypeScript, with hands-on experience shipping systems using FastAPI, NestJS, LlamaIndex, FAISS, and OpenAI.
          </p>

          <p>
            My engineering approach is grounded in <span className="text-neutral-900 dark:text-neutral-100 font-medium underline decoration-neutral-400 underline-offset-4">system design</span>: understanding data flow, latency trade-offs, and failure modes before writing a line of code. I&apos;m actively deepening my work in <span className="text-neutral-900 dark:text-neutral-100 font-medium">agentic AI systems</span>, multi-agent orchestration, and vector database architecture — building toward roles at AI-first startups and product companies.
          </p>
        </div>
      </div>
    </section>
  );
}
