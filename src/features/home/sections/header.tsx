import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Header() {
  const contact = [
    { name: "LinkedIn", link: "https://linkedin.com/in/johnvesslyalti", icon: <FaLinkedin /> },
    { name: "GitHub", link: "https://github.com/johnvesslyalti", icon: <FaGithub /> },
  ];

  return (
    <section className="border p-5 rounded-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">
          Johnvessly Alti
        </div>

        <div className="flex items-center gap-4">
          {contact.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-2xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              {item.icon}

              <span
                className="absolute left-1/2 -translate-x-1/2 -top-9
                           px-3 py-1 text-xs font-medium
                           bg-white dark:bg-neutral-900
                           text-black dark:text-white
                           rounded-md shadow-lg border border-neutral-200 dark:border-neutral-700
                           opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                           transition-all duration-150 whitespace-nowrap pointer-events-none"
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
