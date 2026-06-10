export default function Header() {
  return (
    <section className="rounded-2xl p-5
                        bg-white/10 dark:bg-white/5
                        backdrop-blur-2xl
                        border border-white/30 dark:border-white/10
                        shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-10">
        <div className="text-2xl sm:text-3xl font-bold tracking-tight whitespace-nowrap">
          Johnvessly Alti
        </div>

        <div className="flex flex-col items-center sm:items-end text-center sm:text-right gap-1">
          <p className="text-[8px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] whitespace-nowrap">
            AGENTIC SYSTEMS • MCP SERVERS • RAG PIPELINES
          </p>
        </div>
      </div>
    </section>
  );
}
