'use client'

import { Card, CardContent, CardHeader } from "@/styles/components/ui/card";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Skills() {

    const skills = [
        { id: 1, name: "HTML", icon: <FaHtml5 />},
        { id: 2, name: "CSS", icon: <FaCss3 />},
        { id: 3, name: "JavaScript", icon: <IoLogoJavascript />},
        { id: 4, name: "Tailwind CSS", icon: <RiTailwindCssFill />},
        { id: 5, name: "ReactJS", icon: <FaReact />},
        { id: 6, name: "NodeJS", icon: <FaNode />},
        { id: 7, name: "ExpressJS", icon: <SiExpress />},
        { id: 8, name: "NextJS", icon: <RiNextjsFill />},
        { id: 9, name: "MongoDB", icon: <DiMongodb />},
        
    ]

    return(
        <div className="flex justify-center items-center px-5 py-16">
            <div className="w-full max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 1 * 0.05}}
                    viewport={{ once: false }}
                    ><h1 className="text-5xl font-bold text-center">Skills</h1></motion.div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 mt-10">
                    {skills.map((skill) => (
                        <motion.div
                        key={skill.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: skill.id * 0.05 }}
                            viewport={{ once: false }}
                            >
                            <Card className="backdrop-blur-2xl bg-black/20 shadow-xl border-white/30">
                            <CardContent className="flex flex-col justify-center items-center gap-3">
                                <div className="text-5xl">{skill.icon}</div>
                                <p className="font-bold">{skill.name}</p>
                            </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}