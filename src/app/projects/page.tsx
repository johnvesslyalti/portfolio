// src/app/projects/page.tsx
"use client";

import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
    const router = useRouter();

    return (
        <section className="border p-5 rounded-lg">
            {/* Back button */}
            <div className="mb-5">
                <Button
                    onClick={() => router.push("/")}
                    className="bg-transparent text-black dark:text-white border-2 dark:border-white hover:bg-white dark:hover:bg-black"
                >
                    ← Back to Home
                </Button>
            </div>

            <h2 className="text-2xl font-semibold border-b border-neutral-400 mb-5">
                All Projects
            </h2>

            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="overflow-hidden transition-all duration-300 rounded-lg border border-neutral-300 dark:border-neutral-800 p-3"
                    >
                        {/* Video */}
                        <video
                            src={project.src}
                            className="object-contain w-full h-64 md:h-96 rounded-lg"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Badge / Info */}
                        <Badge className="w-full mt-3 flex justify-between bg-white text-black dark:text-white dark:bg-transparent border-2 border-black dark:border-white/10">
                            <div className="font-bold tracking-tight">{project.name}</div>

                            <div className="flex items-center gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="text-xs flex items-center hover:text-neutral-700 dark:hover:text-neutral-300"
                                >
                                    <FaGithub className="mr-1" />
                                    GitHub
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="text-xs flex items-center hover:text-neutral-700 dark:hover:text-neutral-300"
                                >
                                    <LiaExternalLinkAltSolid className="mr-1" />
                                    Live
                                </a>
                            </div>
                        </Badge>
                    </div>
                ))}
            </div>
        </section>
    );
}
