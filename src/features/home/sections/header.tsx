export default function Header() {
  return (
    <section className="border p-5 rounded-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
        <div className="text-2xl sm:text-3xl font-bold tracking-tight">
          Johnvessly Alti
        </div>

        <div className="flex flex-col items-center sm:items-end text-center sm:text-right gap-1">
          <p className="text-[9px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">
            AI ARCHITECTURE • SCALABILITY • PERFORMANCE
          </p>
        </div>
      </div>
    </section>
  );
}
