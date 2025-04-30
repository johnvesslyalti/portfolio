import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
    { icon: <FaHtml5 className="text-5xl text-gray-950 group-hover:scale-110" />, name: "HTML" },
    { icon: <FaCss3 className="text-5xl text-gray-950 group-hover:scale-110" />, name: "CSS" },
    { icon: <IoLogoJavascript className="text-5xl text-gray-950 group-hover:scale-110" />, name: "JavaScript" },
    { icon: <RiTailwindCssFill className="text-5xl text-gray-950 group-hover:scale-110" />, name: "TailwindCSS" },
    { icon: <FaReact className="text-5xl text-gray-950 group-hover:scale-110" />, name: "ReactJS" },
    { icon: <FaNodeJs className="text-5xl text-gray-950 group-hover:scale-110" />, name: "NodeJS" },
    { icon: <SiExpress className="text-5xl text-gray-950 group-hover:scale-110" />, name: "ExpressJS" },
    { icon: <DiMongodb className="text-5xl text-gray-950 group-hover:scale-110" />, name: "MongoDB" },
];

export default function Techstack() {
    return (
        <div className="min-h-screen">
            <h1 className="text-3xl text-center font-bold text-gray-300">Tech Stack</h1>
            <p className="text-center mt-5 font-bold text-xl text-gray-500">
                Technologies I use to build modern web applications
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-10 gap-5 mt-10">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="group bg-gray-500 h-35 rounded-xl flex flex-col gap-2 items-center justify-center text-white shadow-xl transition-all duration-100"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: false }}
                    >
                        {tech.icon}
                        <p className="text-gray-300">{tech.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
