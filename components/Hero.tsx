'use client';

import "@/styles/Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="typewriter-container text-2xl md:text-5xl font-extrabold text-purple-300 mb-4 drop-shadow-lg"
            >
                <span className="typewriter-text border-b-4 border-purple-400 pb-1 px-2 rounded">
                    Hi! I'm Johnvessly Alti
                </span>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg md:text-xl text-purple-100 max-w-xl leading-relaxed"
            >
                Full Stack Developer | Modern Tech Stack <br />
                <span className="text-purple-300 font-medium">
                    Building Scalable Web Apps
                </span>
            </motion.p>
        </section>
    );
}
