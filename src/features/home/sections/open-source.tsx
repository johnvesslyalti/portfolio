"use client";

import { openSourceContributions } from "@/features/open-source/data/contributions";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function OpenSource() {
  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        Open Source
      </h2>

      <div className="flex flex-col gap-4">
        {openSourceContributions.map((contribution, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:bg-neutral-50/5 transition flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaGithub className="text-lg text-neutral-600 dark:text-neutral-400" />
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  {contribution.repo}
                </span>
              </div>
              <span className="text-xs text-neutral-500">
                {contribution.date}
              </span>
            </div>

            <h3 className="text-lg font-semibold leading-snug">
              {contribution.title}
            </h3>

            <p className="text-base text-neutral-400 leading-relaxed">
              {contribution.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
              {contribution.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a
                href={contribution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold flex items-center hover:text-neutral-700 dark:hover:text-neutral-300 px-3 py-1.5 border rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition whitespace-nowrap"
              >
                <LiaExternalLinkAltSolid className="inline mr-1" />
                View Pull Request
              </a>

              {contribution.live && (
                <a
                  href={contribution.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold flex items-center hover:text-neutral-700 dark:hover:text-neutral-300 px-3 py-1.5 border rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition whitespace-nowrap"
                >
                  <LiaExternalLinkAltSolid className="inline mr-1" />
                  Live Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
