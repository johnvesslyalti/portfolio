"use client";

import { useState, ReactElement } from "react";
import { motion } from "framer-motion";
import { FaRegEye, FaReact, FaNode } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { Card, CardContent } from "@/styles/components/ui/card";
import Image from "next/image";

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
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const projects: ICard[] = [
    {
      id: 1,
      name: "Go Cart",
      href: "https://go-cart-ebon.vercel.app",
      src: "/go-cart-readme.png",
      techStack: [
        <DiMongodb key="mongo" />,
        <SiExpress key="express" />,
        <FaReact key="react" />,
        <FaNode key="node" />,
      ],
      ghHref: "https://github.com/johnvesslyalti/go-cart",
      description:
        "A full-featured e-commerce web app with user auth, product CRUD, cart system, and role-based admin panel. Built using MERN stack with JWT & bcrypt for secure authentication.",
    },
    {
      id: 2,
      name: "Cine Scope",
      href: "https://cine-scope-eosin.vercel.app",
      src: "/cine-scope-demo.png",
      techStack: [
        <RiNextjsFill key="nextjs" />,
        <BiLogoPostgresql key="postgres" />,
      ],
      ghHref: "https://github.com/johnvesslyalti/cine-scope",
      description:
        "A movie discovery platform with trending carousel, watchlist, session-based auth, and theme toggle. Built using Next.js (App Router), PostgreSQL, Prisma, and Zustand.",
    },
    {
      id: 3,
      name: "Fin Sage",
      href: "https://fin-sage-rust.vercel.app",
      src: "/finsage-demo.png",
      techStack: [
        <RiNextjsFill key="nextjs" />,
        <BiLogoPostgresql key="postgres" />,
      ],
      ghHref: "https://github.com/johnvesslyalti/fin-sage",
      description:
        "A personal finance tracker with charts, budgets, recurring transactions, filters, and PWA support. Built with Next.js Server Actions, PostgreSQL, Prisma, Zustand, and Recharts.",
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
            <Card
              className="relative h-auto bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-xl group cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() =>
                setActiveCard(activeCard === project.id ? null : project.id)
              }
            >
            <CardContent className="p-5">
                <div className="relative w-full h-64">
                  {" "}
                  {/* Adjust height as needed */}
                  <Image
                    src={project.src}
                    alt={project.name}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
              </CardContent>

              {/* Sliding Overlay from Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: activeCard === project.id ? 1 : 0,
                  y: activeCard === project.id ? 0 : 30,
                }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 w-full px-5 py-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 pointer-events-none"
              >
                <p className="text-white text-xl font-bold">{project.name}</p>
                <p className="flex items-center gap-2 mt-2 text-white text-sm">
                  <span className="font-semibold">Tech Stack:</span>
                  <span className="flex gap-2 text-lg">
                    {project.techStack.map((icon, index) => (
                      <span key={index}>{icon}</span>
                    ))}
                  </span>
                </p>
              </motion.div>

              {/* Top Right Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: activeCard === project.id ? 1 : 0,
                  y: activeCard === project.id ? 0 : -10,
                }}
                transition={{ duration: 0.4 }}
                className="absolute top-4 right-4 flex gap-4 z-30 pointer-events-none"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition pointer-events-auto"
                >
                  <FaRegEye />
                </a>
                <a
                  href={project.ghHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition pointer-events-auto"
                >
                  <IoCodeSlash />
                </a>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
