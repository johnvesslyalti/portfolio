import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="min-h-screen p-10">
            <h1 className="text-3xl text-center font-bold text-gray-300">My Projects</h1>
            <p className="text-center mt-5 font-bold text-xl text-gray-500">
                A showcase of my web development journey, featuring full-stack<br />
                applications, mini projects, and landing pages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                <motion.a
                    href="https://task-master-lime.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className="bg-gray-500 h-50 rounded-xl overflow-hidden relative group cursor-pointer">
                        <img
                            src="/images/task-master.png"
                            alt="Task Master Project Screenshot"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 backdrop-blur-xs bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-gray-300 text-xl font-bold">Task Manager App 🔗</p>
                        </div>
                    </div>
                </motion.a>

                {/* Add more projects here using the same pattern */}
            </div>
        </div>
    );
}
