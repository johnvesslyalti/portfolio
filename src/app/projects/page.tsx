"use client";

import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export default function ProjectsPage() {
    const router = useRouter();

    return (
        <section className="py-6">
            <div className="mx-auto mb-10 max-w-2xl px-6">
                <div className="mb-10 rounded-2xl border border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50 p-5 shadow-sm dark:border-white/10 dark:from-neutral-950 dark:to-neutral-900/40">
                    <div className="relative mb-4 flex items-center">
                        <button
                            onClick={() => router.push("/")}
                            className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs text-neutral-700 transition hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-white/10"
                        >
                            <IoIosArrowBack className="text-sm" />
                            Back
                        </button>

                        <h1 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold tracking-tight">
                            Projects
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-neutral-900/60 md:p-6"
                        >
                            <div className="flex flex-col gap-6">
                                <video
                                    src={project.src}
                                    className="min-h-52 w-full rounded-xl border border-neutral-200 object-cover transition duration-500 group-hover:scale-[1.01] dark:border-white/10"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />

                                <div className="flex gap-2 pt-1">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-3 py-1.5 text-xs text-neutral-700 transition hover:bg-neutral-100 dark:border-white/15 dark:text-neutral-200 dark:hover:bg-white/10"
                                    >
                                        <FaGithub className="text-sm" /> GitHub
                                    </Link>

                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-3 py-1.5 text-xs text-neutral-700 transition hover:bg-neutral-100 dark:border-white/15 dark:text-neutral-200 dark:hover:bg-white/10"
                                        >
                                            <LiaExternalLinkAltSolid className="text-sm" /> Live App
                                        </Link>
                                    )}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                                                {project.category}
                                            </p>
                                            <h2 className="text-xl font-semibold tracking-tight">{project.name}</h2>
                                        </div>
                                        <div className="text-xs text-neutral-400">0{index + 1}</div>
                                    </div>

                                    <ul className="space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                        {project.detailedDescription
                                            .split("\n")
                                            .map((line) => line.replace(/^- /, "").trim())
                                            .filter(Boolean)
                                            .map((point, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="rounded-md border border-neutral-200 bg-neutral-100/70 px-2.5 py-1 text-[11px] text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
