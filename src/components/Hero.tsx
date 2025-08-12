"use client";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-6">
      <div className="md:col-span-2">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Building secure, scalable, and user-friendly web applications.
        </motion.h2>
        <motion.p
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.12 }}
          className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl"
        >
          I’m a Full Stack Developer focused on React and Next.js. I build
          production-ready web apps — from authentication and APIs to database
          design and polished UI. I also practice DSA regularly and prepare for
          technical interviews.
        </motion.p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:shadow-lg transform transition-transform"
          >
            View Projects
          </a>
          <a
            href="/johnvesslyalti-resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm"
          >
            Download Resume
          </a>
        </div>
      </div>

      <aside className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-lg"
        >
          <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
            Hi, I’m Johnvessly Alti
          </div>
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-200">
            <p>
              Full Stack Developer with experience in designing, building, and
              deploying web applications using modern tools. I like small,
              focused teams and product-first thinking.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/johnvessly-alti"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/johnvessly-alti"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </aside>
    </section>
  );
}
