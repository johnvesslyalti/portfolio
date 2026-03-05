
export default function Header() {
  return (
    <section className="border p-5 rounded-lg">
      {/* Header */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center gap-1">
          <div className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
            Johnvessly Alti
          </div>
          <a
            href="mailto:altijohnvessly@gmail.com"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
          >
            altijohnvessly@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
