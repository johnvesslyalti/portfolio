"use client";

import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Link from "next/link";

export default function Projects() {
  const proj = projects.slice(0, 3); // show only first 3

  return (
    <section className="rounded-3xl border border-white/10 bg-white/70 p-8 shadow-lg shadow-neutral-200/30 backdrop-blur dark:border-white/5 dark:bg-neutral-950/60 dark:shadow-neutral-950/60">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Featured Projects
          </h2>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Recent builds highlighting system design, DX, and product craft.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proj.map((project, index) => (
          <div
            key={index}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/90 shadow-sm shadow-neutral-200/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-neutral-900/70"
          >
            <div className="relative overflow-hidden">
              <video
                src={project.src}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-56"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
            </div>

            <div className="flex h-full flex-col gap-4 p-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  Crafted to balance performance, scalability, and a polished
                  user experience.
                </p>
              </div>

              <div className="mt-auto flex items-center gap-2 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 font-medium text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-950/40 dark:text-neutral-200"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 font-medium text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-950/40 dark:text-neutral-200"
                >
                  <LiaExternalLinkAltSolid />
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/projects"
          className="rounded-full border border-neutral-200 bg-white px-6 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-950/40 dark:text-neutral-100"
        >
          Show More
        </Link>
      </div>
      </div>
    </section>
  );
}
