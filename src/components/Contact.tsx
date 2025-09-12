"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { SiX, SiLeetcode, SiYoutube } from "react-icons/si";
import Link from "next/link";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      href: "mailto:altijohnvessly@gmail.com",
      icon: Mail,
      color: "text-red-500 bg-red-100 dark:bg-red-900/30",
    },
    {
      label: "GitHub",
      href: "https://github.com/johnvesslyalti",
      icon: Github,
      color: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/johnvesslyalti",
      icon: Linkedin,
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
    },
    {
      label: "X",
      href: "https://x.com/johnvesslyalti",
      icon: SiX,
      color: "text-black bg-gray-200 dark:bg-black/30 dark:text-white",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/johnvesslyalti",
      icon: SiLeetcode,
      color: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@johnvesslyalti",
      icon: SiYoutube,
      color: "text-red-600 bg-red-100 dark:bg-red-900/30",
    },
  ];

  return (
    <section id="contact" className="mt-20">
      <h3 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        Let’s Connect
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {contacts.map(({ label, href, icon: Icon, color }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl
              bg-white/70 dark:bg-gray-900/50
              border border-gray-200/40 dark:border-white/10
              backdrop-blur-md
              shadow-sm hover:shadow-xl
              hover:-translate-y-2
              transition-all duration-300 group relative overflow-hidden`}
          >
            {/* Gloss effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-transparent opacity-10 group-hover:opacity-20 transition-opacity" />

            {/* Icon */}
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full ${color} 
              transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md z-10`}
            >
              <Icon className="w-7 h-7" />
            </div>

            {/* Label */}
            <p className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-200 z-10">
              {label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
