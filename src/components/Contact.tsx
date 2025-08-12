"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { SiX, SiLeetcode, SiYoutube } from "react-icons/si"; // added SiYoutube
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
      color: "text-gray-100 bg-gray-100 dark:bg-gray-800",
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
      color: "text-black bg-gray-200 dark:bg-black/20 dark:text-white",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/johnvesslyalti",
      icon: SiLeetcode,
      color: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      label: "YouTube", // New YouTube entry
      href: "https://youtube.com/@johnvesslyalti", // replace with your actual channel URL
      icon: SiYoutube,
      color: "text-red-600 bg-red-100 dark:bg-red-900/30",
    },
  ];

  return (
    <section id="contact" className="mt-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Let’s Connect
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {contacts.map(({ label, href, icon: Icon, color }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl shadow-md bg-white/80 dark:bg-gray-900/60 
              backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group`}
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full ${color} 
              transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}
            >
              <Icon className="w-7 h-7" />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-200">
              {label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
