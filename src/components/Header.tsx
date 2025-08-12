"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/johnvesslyalti.png"
            alt="Johnvessly Alti"
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Johnvessly Alti</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <nav className="hidden md:flex gap-4 text-sm text-gray-700 dark:text-gray-200">
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        <a
          href="/johnvesslyalti-resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm hover:scale-105 transition-transform"
        >
          <Download size={16} /> Resume
        </a>

        {/* Replaced old button with ModeToggle */}
        <ModeToggle />
      </div>
    </header>
  );
}
