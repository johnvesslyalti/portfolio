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
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold border-b border-neutral-400 mb-3">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-3">
        {proj.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden transition-all duration-300 rounded-lg"
          >
            <video
              src={project.src}
              className="aspect-video h-auto w-full rounded-lg bg-neutral-950/5 object-contain dark:bg-white/5"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="w-full flex flex-col bg-white text-black dark:text-white dark:bg-transparent border border-neutral-200 dark:border-white/10 rounded-lg p-3 mt-2 shadow-sm gap-2">
              <div className="flex justify-between items-center w-full">
                <div className="font-bold tracking-tight text-[14px]">{project.name}</div>

                <div className="flex items-center gap-1">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-[10px] font-bold flex items-center hover:text-neutral-700 dark:hover:text-neutral-300 px-2 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition whitespace-nowrap"
                  >
                    <FaGithub className="inline mr-1" />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-[10px] font-bold flex items-center hover:text-neutral-700 dark:hover:text-neutral-300 px-2 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition whitespace-nowrap"
                    >
                      <LiaExternalLinkAltSolid className="inline mr-1" />
                      Live
                    </a>
                  )}
                </div>
              </div>
              
              {project.shortDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.shortDescription}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        <Link
          href="/projects"
          className="px-6 py-2 border rounded-md text-sm font-medium hover:bg-neutral-50/5 transition"
        >
          Show More
        </Link>
      </div>
    </section>
  );
}
