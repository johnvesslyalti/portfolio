"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";


import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const contact = [
    { name: "X", link: "https://x.com/johnvesslyalti", icon: <FaXTwitter /> },
    { name: "LinkedIn", link: "https://linkedin.com/in/johnvesslyalti", icon: <FaLinkedin /> },
    { name: "GitHub", link: "https://github.com/johnvesslyalti", icon: <FaGithub /> },
    { name: "LeetCode", link: "https://leetcode.com/johnvesslyalti", icon: <SiLeetcode /> },

  ];


  return (
    <section className="rounded-3xl border border-white/10 bg-white/80 p-8 shadow-lg shadow-neutral-200/30 backdrop-blur dark:border-white/5 dark:bg-neutral-950/60 dark:shadow-neutral-950/60">
      <div className="flex flex-col gap-6 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Contact
          </h2>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Want to build something together?
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Reach out for collaborations, consulting, or just to say hello.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:altijohnvessly@gmail.com"
            className="rounded-full border border-neutral-200 bg-white px-6 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-950/40 dark:text-neutral-100"
          >
            altijohnvessly@gmail.com
          </a>
          <div className="flex flex-wrap justify-center gap-3">
            {contact.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-950/40 dark:text-neutral-200"
              >
                <span className="text-base">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
