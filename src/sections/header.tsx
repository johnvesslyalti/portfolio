import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <section className="border p-5 rounded-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">
          Johnvessly Alti
        </div>

        <div className="flex flex-row items-center gap-4 sm:contents">
          <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            altijohnvessly@gmail.com
          </div>
          <a
            href="https://x.com/nodvex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
