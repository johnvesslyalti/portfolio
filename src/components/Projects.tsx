'use client';

import { motion } from "framer-motion";
import { FaRegEye } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { Card, CardContent } from "@/styles/components/ui/card";
import Image from "next/image";
import { ReactElement } from "react";

interface ICard {
  id: number;
  name: string;
  href: string;
  src: string;
  techStack: ReactElement[];
  ghHref: string;
  description: string;
}

export default function Projects() {
  const projects: ICard[] = [
    {
      id: 1,
      name: "Sub Trackr",
      href: "https://sub-trackr-sigma.vercel.app",
      src: "/subtrackr-preview.png",
      techStack: [<RiNextjsFill key="nextjs" />, <BiLogoPostgresql key="postgres" />],
      ghHref: "https://github.com/johnvesslyalti/sub-trackr",
      description:
        "Subscription manager with expense insights, secure auth, and reminder logic. Built using Next.js 14, PostgreSQL, and modern server components.",
    },
    {
      id: 2,
      name: "Cine Scope",
      href: "https://cine-scope-eosin.vercel.app",
      src: "/cine-scope-demo.png",
      techStack: [<RiNextjsFill key="nextjs" />, <BiLogoPostgresql key="postgres" />],
      ghHref: "https://github.com/johnvesslyalti/cine-scope",
      description:
        "Movie discovery and watchlist app with carousel UI, session-based auth, theme toggle, and Zustand state management.",
    },
    {
      id: 3,
      name: "Fin Sage",
      href: "https://fin-sage-rust.vercel.app",
      src: "/finsage-demo.png",
      techStack: [<RiNextjsFill key="nextjs" />, <BiLogoPostgresql key="postgres" />],
      ghHref: "https://github.com/johnvesslyalti/fin-sage",
      description:
        "PWA personal finance tracker with budgets, charts, and recurring transactions. Built with Next.js Server Actions, Zustand, and Recharts.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-5 py-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-bold text-white inline-block relative">
          Projects
          <motion.div
            layoutId="underline"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full"
          />
        </h1>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="relative h-auto bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-xl group transition-transform hover:scale-[1.02]">
              <CardContent className="p-5 pb-3">
                <div className="relative w-full h-64 rounded-md overflow-hidden">
                  <Image
                    src={project.src}
                    alt={`${project.name} preview`}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="mt-4 text-white">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="mt-2 text-sm text-purple-100 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-sm text-purple-300 font-medium">
                      Tech:
                    </span>
                    <span className="flex gap-2 text-lg text-purple-100">
                      {project.techStack}
                    </span>
                  </div>
                </div>
              </CardContent>

              {/* Top Right Buttons - Always Visible */}
              <div className="absolute top-4 right-4 flex gap-3 z-30">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
                  aria-label={`View ${project.name} live`}
                >
                  <FaRegEye />
                </a>
                <a
                  href={project.ghHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
                  aria-label={`View ${project.name} source code`}
                >
                  <IoCodeSlash />
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
