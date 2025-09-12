"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <div
        className="flex items-center justify-between gap-6 w-full max-w-6xl px-6 py-3
          rounded-full shadow-lg border border-white/20 dark:border-white/10
          bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
          from-white/40 via-white/20 to-white/10 dark:from-gray-800/60 dark:via-gray-900/50 dark:to-gray-900/30
          backdrop-blur-2xl
          relative overflow-hidden"
      >
        {/* Liquid Shine Overlay */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-20 blur-xl" />
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/30 opacity-20 blur-2xl rotate-12" />
        </div>

        {/* Logo / Profile */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-md ring-2 ring-white/30">
            <Image
              src="/johnvesslyalti.jpg"
              alt="Johnvessly Alti"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Johnvessly Alti</h1>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Nav + Actions */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            <a href="#projects" className="hover:text-indigo-500 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-indigo-500 transition-colors">
              Skills
            </a>
            <a href="#about" className="hover:text-indigo-500 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-indigo-500 transition-colors">
              Contact
            </a>
          </nav>

          {/* Resume Button */}
          <a
            href="/johnvesslyalti-resume.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/50 dark:bg-gray-700/50
              border border-white/30 dark:border-white/20
              backdrop-blur-md
              hover:scale-105 hover:bg-white/70 dark:hover:bg-gray-700/70
              transition-all shadow-sm"
          >
            <Download size={16} /> Resume
          </a>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
