export default function Header() {
  return (
    <section className="border p-5 rounded-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">
          Johnvessly Alti
        </div>

        <div className="flex flex-row items-center gap-4 sm:contents">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to work
          </div>
        </div>
      </div>
    </section>
  );
}
