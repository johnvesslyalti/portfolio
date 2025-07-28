'use client';

import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaGithub
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiExpress, SiPostgresql, SiPrisma
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";

const techIcons = [
  { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { id: 2, name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
  { id: 3, name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" /> },
  { id: 4, name: "TypeScript", icon: <TbBrandTypescript className="text-blue-600" /> },
  { id: 5, name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
  { id: 6, name: "React.js", icon: <FaReact className="text-cyan-300" /> },
  { id: 7, name: "Next.js", icon: <RiNextjsFill className="text-white dark:text-black" /> },
  { id: 8, name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { id: 9, name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { id: 10, name: "MongoDB", icon: <DiMongodb className="text-green-500" /> },
  { id: 11, name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { id: 12, name: "Prisma ORM", icon: <SiPrisma className="text-slate-100" /> },
  { id: 13, name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { id: 14, name: "GitHub", icon: <FaGithub className="text-white" /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold text-white relative inline-block">
          Skills
          <motion.div
            layoutId="underline"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full"
          />
        </h2>
        <p className="text-purple-200 mt-4 text-sm sm:text-base max-w-xl mx-auto">
          Technologies I use to build scalable, modern, full stack applications.
        </p>
      </motion.div>

      {/* Icons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 mt-16 w-full max-w-7xl">
        {techIcons.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center group"
          >
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 border border-white/20 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 rounded-lg"
              aria-label={skill.name}
              title={skill.name}
            >
              <div className="text-3xl sm:text-4xl">{skill.icon}</div>
            </div>
            <p className="text-white mt-2 text-sm font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
