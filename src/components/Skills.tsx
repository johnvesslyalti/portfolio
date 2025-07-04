'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/styles/components/ui/card";
import {
    FaHtml5, FaCss3, FaReact, FaNodeJs
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiGit } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";

const techIcons = [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-600 drop-shadow-[0_0_10px_#f97316]" /> },
    { id: 2, name: "CSS", icon: <FaCss3 className="text-blue-500 drop-shadow-[0_0_10px_#3b82f6]" /> },
    { id: 3, name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400 drop-shadow-[0_0_10px_#facc15]" /> },
    { id: 4, name: "TypeScript", icon: <TbBrandTypescript className="text-blue-600 drop-shadow-[0_0_10px_#2563eb]" /> },
    { id: 5, name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-400 drop-shadow-[0_0_10px_#06b6d4]" /> },
    { id: 6, name: "ReactJS", icon: <FaReact className="text-cyan-300 drop-shadow-[0_0_10px_#22d3ee]" /> },
    { id: 7, name: "NextJS", icon: <RiNextjsFill className="text-white dark:text-black drop-shadow-[0_0_10px_#fff]" /> },
    { id: 8, name: "NodeJS", icon: <FaNodeJs className="text-green-600 drop-shadow-[0_0_10px_#16a34a]" /> },
    { id: 9, name: "ExpressJS", icon: <SiExpress className="text-gray-300 drop-shadow-[0_0_10px_#a3a3a3]" /> },
    { id: 10, name: "MongoDB", icon: <DiMongodb className="text-green-500 drop-shadow-[0_0_10px_#22c55e]" /> },
];

export default function Skills() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
            {/* Title with Brutal Energy */}
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

            {/* Grid of Weapons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-16 w-full max-w-7xl">
                {techIcons.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.08 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-zinc-900/70 border border-white/10 rounded-xl hover:scale-110 hover:shadow-[0_0_20px_#f0f] transition duration-300 backdrop-blur-md group">
                            <CardContent className="flex flex-col items-center justify-center py-8 px-4 gap-3">
                                <div className="text-5xl group-hover:animate-pingOnce">
                                    {skill.icon}
                                </div>
                                <p className="font-bold text-center text-white tracking-wide text-lg">
                                    {skill.name}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Animation */}
            <style jsx>{`
                @keyframes pingOnce {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.25);
                        opacity: 0.75;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .group-hover\\:animate-pingOnce:hover {
                    animation: pingOnce 0.4s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
}
