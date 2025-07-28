'use client';

import "@/styles/Hero.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="typewriter-container text-3xl md:text-6xl font-extrabold text-purple-300 mb-6 drop-shadow-lg"
            >
                <span className="typewriter-text border-b-4 border-purple-400 pb-1 px-2 rounded">
                    Hi! I&apos;m Johnvessly Alti
                </span>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base md:text-xl text-purple-100 max-w-2xl leading-relaxed mb-6"
            >
                Full Stack Developer focused on building modern, performant, and scalable web applications using the latest technologies.
                <br />
                <span className="text-purple-300 font-medium">
                    React · Next.js · TypeScript · Node.js · PostgreSQL · Tailwind
                </span>
            </motion.p>
        </section>
    );
}
