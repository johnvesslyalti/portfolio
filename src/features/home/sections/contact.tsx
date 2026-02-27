"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const contact = [
    { name: "LinkedIn", link: "https://linkedin.com/in/johnvesslyalti", icon: <FaLinkedin /> },
    { name: "GitHub", link: "https://github.com/johnvesslyalti", icon: <FaGithub /> },
    { name: "LeetCode", link: "https://leetcode.com/johnvesslyalti", icon: <SiLeetcode /> },
  ];


  return (
    <section className="flex flex-col gap-10 sm:flex-row sm:justify-center items-center border p-5 rounded-xl backdrop-blur-sm">

      {/* Social Icons */}
      <div className="flex flex-wrap gap-4">
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
    </section>
  );
}
