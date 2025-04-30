import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

export default function Techstack() {
    return(
        <div className="min-h-screen p-10">
            <h1 className="text-3xl text-center font-bold text-gray-300">Tech Stack</h1>
            <p className="text-center mt-5 font-bold text-xl text-gray-500">Technologies I use to build modern web applications</p>
            <div className="grid grid-cols-4 p-10 gap-5 mt-10">
                <div className="group hover:bg-gray-500 bg-gray-500 h-35 rounded-xl flex flex-col gap-2 items-center justify-center text-bg-950 shadow-xl hover:scale-101 transition-all duration-100">
                    <FaHtml5  className="text-5xl group-hover:scale-110"/>
                    <p className="text-gray-300">HTML</p>
                </div>
                <div className="group bg-gray-500 h-35 rounded-xl flex flex-col gap-2 items-center justify-center text-white shadow-xl hover:scale-101 transition-all duration-100">
                    <FaCss3 className=" text-5xl group-hover:scale-110 text-gray-950" />
                    <p className="text-gray-300">CSS</p>
                </div>
                <div className="group bg-gray-500 h-35 rounded-xl flex flex-col gap-2 items-center justify-center text-white shadow-xl hover:scale-101 transition-all duration-100">
                    <IoLogoJavascript className="text-5xl text-gray-950 group-hover:scale-110" />
                    <p className="text-gray-300">JavaScript</p>
                </div>
                <div className="group bg-gray-500 h-35 rounded-xl flex flex-col gap-2 items-center justify-center text-white shadow-xl hover:scale-101 transition-all duration-100">
                    <RiTailwindCssFill className="text-5xl text-gray-950 group-hover:scale-110" />
                    <p className="text-gray-300">TailwindCSS</p>
                </div>
                <div className="group bg-gray-500 h-35 rounded-xl flex flex-col gap-2 items-center justify-center text-white shadow-xl hover:scale-101  transition-all duration-100">
                    <FaReact className="text-5xl text-gray-950 group-hover:scale-110" />
                    <p className="text-gray-300">ReactJS</p>
                </div>
                <div className="group bg-gray-500 h-35 rounded-xl flex flex-col gap-2 items-center justify-center text-white shadow-xl hover:scale-101 transition-all duration-100">
                    <FaNodeJs className="text-5xl text-gray-950 group-hover:scale-110" />
                    <p className="text-gray-300">NodeJS</p>
                </div>
                <div className="group bg-gray-500 h-35 rounded-xl flex flex-col gap-2 items-center justify-center text-white shadow-xl hover:scale-101 transition-all duration-100">
                    <SiExpress className="text-5xl text-gray-950 group-hover:scale-110" />
                    <p className="text-gray-300">ExpressJS</p>
                </div>
                <div className="group bg-gray-500 h-35 rounded-xl flex flex-col gap-2 items-center justify-center text-white shadow-xl hover:scale-101 transition-all duration-100">
                    <DiMongodb className="text-5xl text-gray-950 group-hover:scale-110" />
                    <p className="text-gray-300">MongoDB</p>
                </div>
            </div>
        </div>
    )
}