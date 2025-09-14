"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { SiX, SiLeetcode, SiYoutube } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      href: "mailto:altijohnvessly@gmail.com",
      icon: Mail,
      color: "from-red-400 to-red-600",
    },
    {
      label: "GitHub",
      href: "https://github.com/johnvesslyalti",
      icon: Github,
      color: "from-gray-700 to-gray-900",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/johnvesslyalti",
      icon: Linkedin,
      color: "from-blue-500 to-blue-700",
    },
    {
      label: "X",
      href: "https://x.com/johnvesslyalti",
      icon: SiX,
      color: "from-gray-800 to-black",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/johnvesslyalti",
      icon: SiLeetcode,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@johnvesslyalti",
      icon: SiYoutube,
      color: "from-red-500 to-red-700",
    },
  ];

  return (
    <section id="contact" className="mt-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-14"
      >
        Let’s Connect
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {contacts.map(({ label, href, icon: Icon, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl
                bg-white/70 dark:bg-gray-900/40
                border border-gray-200/40 dark:border-white/10
                backdrop-blur-xl
                shadow-lg hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-500 overflow-hidden"
            >
              {/* Animated gradient glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 blur-xl transition duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${color} 
                text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl relative z-10`}
              >
                <Icon className="w-8 h-8" />
              </div>

              {/* Label */}
              <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-100 z-10 group-hover:text-primary transition">
                {label}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
