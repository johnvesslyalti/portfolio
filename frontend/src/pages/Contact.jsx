import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
    return (
        <div className="min-h-screen flex items-center justify-center p-5 text-center">
            <div>
                <h1 className="text-3xl mb-10 font-bold text-gray-300">Contact Me!</h1>
                <ul className="flex flex-col gap-5">
                    <li><a target="_blank" href="https://x.com/johnvesslyalti" className="flex items-center justify-center gap-5 p-2 bg-gray-500 text-lg rounded-xl min-w-xs"><FaXTwitter className="text-2xl text-gray-950 "/></a></li>
                    <li><a target="_blank" href="mailto:altijohnvessly@gmail.com" className="flex items-center justify-center gap-5 p-2 bg-gray-500 text-lg rounded-xl"><IoIosMail className="text-2xl text-gray-950 "/></a></li>
                    <li><a target="_blank" href="https://github.com/johnvesslyalti" className="flex items-center justify-center gap-5 p-2 bg-gray-500 text-lg rounded-xl"><FaGithub className="text-2xl text-gray-950 "/></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/johnvesslyalti/" className="flex items-center justify-center gap-5 p-2 bg-gray-500 text-lg rounded-xl"><FaLinkedin className="text-2xl text-gray-950 "/></a></li>
                </ul>
            </div>
        </div>
    );
}
