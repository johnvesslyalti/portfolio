"use client";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center mt-12 md:mt-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Left content */}
      <div className="md:col-span-2 text-center md:text-left">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-gray-900 dark:text-white"
        >
          Building secure, scalable, and user-friendly web applications.
        </motion.h2>

        <motion.p
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.12 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0"
        >
          I’m a <span className="font-semibold">Full Stack Developer</span>{" "}
          focused on React and Next.js. I build production-ready web apps — from
          authentication and APIs to database design and polished UI. I also
          practice DSA regularly and prepare for technical interviews.
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl font-medium bg-white/10 border border-white/20
              hover:bg-white/20 transition-all duration-300 shadow-md"
          >
            View Projects
          </a>
          <a
            href="/johnvesslyalti-resume.pdf"
            download
            className="px-5 py-2.5 rounded-xl font-medium text-gray-900 dark:text-white bg-white/30 dark:bg-gray-900/30 border border-white/20
              hover:bg-white/40 dark:hover:bg-gray-900/40 transition-all duration-300 shadow-sm"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right card */}
      <aside className="w-full max-w-sm mx-auto md:mx-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18 }}
          className="p-5 sm:p-6 rounded-2xl bg-white/40 dark:bg-gray-900/40
            backdrop-blur-xl border border-white/20 shadow-xl relative overflow-hidden"
        >
          {/* Gloss effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-10 pointer-events-none rounded-2xl" />

          <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
            Hi, I’m Johnvessly Alti
          </div>

          <div className="mt-3 sm:mt-4 text-sm text-gray-800 dark:text-gray-200 relative z-10">
            <p>
              Full Stack Developer with experience in designing, building, and
              deploying web applications using modern tools. I like small,
              focused teams and product-first thinking.
            </p>
            <div className="mt-3 flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/johnvessly-alti"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/johnvessly-alti"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </aside>
    </section>
  );
}
