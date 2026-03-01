
export default function Header() {
  return (
    <section className="border p-5 rounded-lg">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Johnvessly Alti
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-medium mt-2">
            Backend Engineer · NestJS · PostgreSQL · Redis
          </p>
        </div>
        <a 
          href="mailto:altijohnvessly@gmail.com"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors"
        >
          🟢 Open to backend roles in Bengaluru — internships & full-time → altijohnvessly@gmail.com
        </a>
      </div>
    </section>
  );
}
