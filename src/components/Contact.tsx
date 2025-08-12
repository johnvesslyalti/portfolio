"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { SiX, SiLeetcode } from "react-icons/si"; // for X (Twitter) and LeetCode icons
import Link from "next/link";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "altijohnvessly@gmail.com",
      href: "mailto:altijohnvessly@gmail.com",
      icon: Mail,
      color: "bg-red-100 text-red-500 dark:bg-red-900/40 dark:text-red-400",
    },
    {
      label: "GitHub",
      value: "github.com/johnvesslyalti",
      href: "https://github.com/johnvesslyalti",
      icon: Github,
      color:
        "bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-300",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/johnvesslyalti",
      href: "https://linkedin.com/in/johnvesslyalti",
      icon: Linkedin,
      color:
        "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
    },
    {
      label: "X (Twitter)",
      value: "x.com/johnvesslyalti",
      href: "https://x.com/johnvesslyalti",
      icon: SiX,
      color:
        "bg-black text-white dark:bg-white/10 dark:text-white",
    },
    {
      label: "LeetCode",
      value: "leetcode.com/u/johnvesslyalti",
      href: "https://leetcode.com/u/johnvesslyalti",
      icon: SiLeetcode,
      color:
        "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400",
    },
  ];

  return (
    <section
      id="contact"
      className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg"
    >
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Let’s Connect
      </h3>

      <div className="space-y-4">
        {contacts.map(({ label, value, href, icon: Icon, color }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 
            shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${color} 
              group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {label}
              </p>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {value}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
