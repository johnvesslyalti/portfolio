"use client";

import { projects } from "@/features/projects/data/projects";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Projects() {
  const router = useRouter();

  const proj = projects.slice(0, 3); // show only first 3

  return (
    <section className="rounded-2xl p-5
                        bg-white/10 dark:bg-white/5
                        backdrop-blur-2xl
                        border border-white/30 dark:border-white/10
                        shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
      <h2 className="text-xl font-semibold border-b border-neutral-200 dark:border-neutral-800 mb-4 pb-3">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {proj.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-xl overflow-hidden
                       bg-white/10 dark:bg-white/5
                       border border-white/20 dark:border-white/8
                       hover:border-white/40 dark:hover:border-white/20
                       hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)]
                       transition-all duration-300"
          >
            {project.src.endsWith(".png") || project.src.endsWith(".webp") ? (
              <img
                src={project.src}
                alt={project.name}
                className="aspect-video w-full object-cover"
              />
            ) : (
              <video
                src={project.src}
                className="aspect-video w-full object-contain bg-black/10 dark:bg-white/5"
                autoPlay
                loop
                muted
                playsInline
                suppressHydrationWarning
              />
            )}

            <div className="flex justify-between items-center px-3 py-2.5">
              <span className="font-semibold text-xs tracking-tight">{project.name}</span>
              <div className="flex items-center gap-1">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-lg
                             bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10
                             hover:bg-white/20 dark:hover:bg-white/10 transition"
                >
                  <FaGithub className="text-xs" /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-lg
                               bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10
                               hover:bg-white/20 dark:hover:bg-white/10 transition"
                  >
                    <LiaExternalLinkAltSolid className="text-xs" /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <Link
          href="/projects"
          className="px-6 py-2 rounded-xl text-sm font-medium
                     bg-white/10 dark:bg-white/5
                     border border-white/20 dark:border-white/10
                     hover:bg-white/20 dark:hover:bg-white/10
                     backdrop-blur-sm transition"
        >
          Show More
        </Link>
      </div>
    </section>
  );
}
