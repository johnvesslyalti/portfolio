'use client';

import { Card, CardContent } from "@/styles/components/ui/card";
import { motion } from "framer-motion";
import { FaRegEye } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Projects() {
    const projects = [
        {id: 1, name: "Task-Master", href: "https://task-master-tau-five.vercel.app/", src: "/task-master.png", techStack: [<DiMongodb />, <SiExpress />, <FaReact />, <FaNode />], ghHref: "https://github.com/johnvesslyalti/task-master"},
        {id: 2, name: "Go-Cart", href: "https://go-cart-rust.vercel.app/", src: "/go-cart.png", techStack: [<DiMongodb />, <SiExpress />, <FaReact />, <FaNode />], ghHref: "https://github.com/johnvesslyalti/go-cart"},
        {id: 3, name: "Cine-Scope", href: "https://cine-scope-six.vercel.app/", src: "/cine-scope.png", techStack: [<RiNextjsFill />], ghHref: "https://github.com/johnvesslyalti/cine-scope"},
    ]
    return(
        <div className="h-screen flex flex-col p-10">
                <h1 className="text-3xl font-bold text-center">Projects</h1>
                <div className="grid grid-cols-3 gap-5 my-30">
                {projects.map((project) => (
                    <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: project.id * 0.05}}
                    viewport={{ once: false }}
                    >
                        <Card className="h-[200px] py-5 backdrop-blur-2xl bg-black/20 shadow-xl border-white/30 overflow-hidden relative group">
                        <CardContent>
                            <div>
                                <img 
                                src={project.src}
                                alt={project.name}
                                className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end bg-gradient-to-t from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-4">
                                <p className="text-white text-xl font-bold">{project.name}</p>
                                <p className="flex items-center gap-2"><span className="font-bold text-sm">Tech Stack: </span><span className="flex gap-2">{project.techStack.map((icon, index) => (
                                    <span key={index}>
                                        {icon}
                                    </span>
                                    ))}
                                    </span>
                                </p>
                            </div>
                            <div className="absolute flex gap-5 top-0 right-0 p-5 opacity-0 group-hover:opacity-100">
                                <button className="text-2xl">
                                    <a href={project.href}  target="_blank" rel="noopener noreferrer">
                                        <FaRegEye />
                                    </a>
                                </button>
                                <button className="text-2xl">
                                    <a href={project.ghHref} target="_blank" rel="noopener noreferrer">
                                        <IoCodeSlash />
                                    </a>
                                </button>
                            </div>
                        </CardContent>
                        </Card>
                    </motion.div>
                ))}
                </div>
        </div>
    )
}