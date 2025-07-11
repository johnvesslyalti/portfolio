'use client';

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaGithub
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiPostgresql, SiPrisma } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";

import { AnimatedBeam } from "@/components/magicui/animated-beam";

const techIcons = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <TbBrandTypescript className="text-blue-600" /> },
  { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-300" /> },
  { name: "NextJS", icon: <RiNextjsFill className="text-white dark:text-black" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Prisma", icon: <SiPrisma className="text-slate-100" /> },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20"
      ref={containerRef}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-white relative inline-block">
          Skills
          <motion.div
            layoutId="underline"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full"
          />
        </h1>
      </motion.div>

      {/* Square Icon Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-5 mt-10 w-full max-w-7xl">
        {techIcons.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
            ref={(el) => (iconRefs.current[index] = el)}
          >
            <div className="bg-white/10 border border-white/20 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 rounded-full p-10">
              <div className="text-3xl">{skill.icon}</div>
            </div>
            <p className="text-white mt-2 text-sm font-medium text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Beams Between Icons */}
      {techIcons.map((_, index) => {
        if (index < techIcons.length - 1) {
          return (
            <AnimatedBeam
              key={`beam-${index}`}
              containerRef={containerRef}
              fromRef={{ current: iconRefs.current[index] }}
              toRef={{ current: iconRefs.current[index + 1] }}
              duration={2}
            />
          );
        }
        return null;
      })}
    </div>
  );
}