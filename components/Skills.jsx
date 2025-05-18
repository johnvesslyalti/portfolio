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
        <div className="h-screen flex justify-center items-center p-5 z-1001">
            <div className="w-3/4">
                <h1 className="text-3xl font-bold text-center">Skills</h1>
                <div className="grid grid-cols-3 gap-5 mt-10">
                    {skills.map((skill) => (
                        <Card key={skill.id} className="backdrop-blur-2xl bg-black/20 shadow-xl border-white/30">
                            <CardContent className="flex flex-col justify-center items-center gap-3">
                                <div className="text-5xl">{skill.icon}</div>
                                <p className="font-bold">{skill.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}