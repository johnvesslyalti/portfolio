'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/styles/components/ui/card";
import {
    FaHtml5, FaCss3, FaReact, FaNodeJs, FaGithub
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiGit } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";

const techIcons = [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { id: 2, name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
    { id: 3, name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" /> },
    { id: 4, name: "TypeScript", icon: <TbBrandTypescript className="text-blue-600" /> },
    { id: 5, name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
    { id: 6, name: "ReactJS", icon: <FaReact className="text-cyan-300" /> },
    { id: 7, name: "NextJS", icon: <RiNextjsFill className="text-white dark:text-black" /> },
    { id: 8, name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
    { id: 9, name: "ExpressJS", icon: <SiExpress className="text-gray-300" /> },
    { id: 10, name: "MongoDB", icon: <DiMongodb className="text-green-500" /> },
];

export default function Skills() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
            {/* Heading */}
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
                        layoutId="skills-underline"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="h-1 mt-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                </h1>
                <p className="text-gray-400 text-lg">
                    Tools and Technologies I use regularly
                </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12 w-full max-w-6xl">
                {techIcons.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white/10 border border-white/20 rounded-xl hover:scale-105 hover:shadow-xl transition duration-300">
                            <CardContent className="flex flex-col items-center justify-center py-6 px-4 gap-3">
                                <div className="text-4xl">{skill.icon}</div>
                                <p className="font-semibold text-center text-white">{skill.name}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
