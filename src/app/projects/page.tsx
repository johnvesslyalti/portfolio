"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
    const router = useRouter();
    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((p) => p.category === filter);

    return (
        <section className="py-6">
            <div className="max-w-4xl mx-auto px-4 mb-10">

                {/* Header — Left Arrow + Centered Title */}
                <div className="relative mb-8 flex items-center justify-center">
                    <button
                        onClick={() => router.push("/")}
                        className="absolute left-0 text-2xl hover:opacity-70 transition cursor-pointer"
                    >
                        ←
                    </button>

                    <h2 className="text-2xl font-bold text-center">
                        Projects
                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-3 mb-8">
                    {["All", "Full Stack", "Backend"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-1.5 rounded-md text-sm border transition ${filter === cat
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-neutral-200 dark:bg-neutral-800"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project List */}
                <div className="flex flex-col gap-10">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center 
                        border border-neutral-300 dark:border-neutral-800 
                        p-10 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            {/* Left — Video */}
                            <div className="w-full flex justify-center">
                                <video
                                    src={project.src}
                                    className="rounded-lg shadow-md w-full max-w-sm object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>

                            {/* Right — Content */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold">{project.name}</h3>

                                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-1">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-[10px] rounded-md bg-neutral-100 dark:bg-neutral-900 border dark:border-neutral-700"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-1 px-3 py-1.5 border rounded-md text-xs hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                                    >
                                        <FaGithub className="text-sm" /> GitHub
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="flex items-center gap-1 px-3 py-1.5 border rounded-md text-xs hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                                    >
                                        <LiaExternalLinkAltSolid className="text-sm" /> Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
