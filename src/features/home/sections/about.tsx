"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="border p-5 rounded-lg transition-all duration-500">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        About
      </h2>

      <div className="relative">
        <div 
          className={cn(
            "flex flex-col gap-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 transition-all duration-500 overflow-hidden",
            !isExpanded ? "max-h-32" : "max-h-[1000px]"
          )}
        >
          <p>
            I’m a <span className="text-neutral-900 dark:text-neutral-100 font-medium">Software Engineer</span> driven by system thinking and a deep curiosity for how things actually work under the hood.
          </p>

          <p>
            I focus on building scalable backend systems — not just making things work, but designing them to handle growth, load, and real-world constraints. My work reflects this mindset: from implementing JWT token rotation and rate limiting to designing caching strategies and pull-based feed systems.
          </p>

          <p>
            I’m currently working with <span className="text-neutral-900 dark:text-neutral-100 font-medium">Node.js and TypeScript</span>, but I don’t tie myself to any single stack. I adapt fast, learn continuously, and focus on understanding systems at a fundamental level rather than just tools.
          </p>

          <p>
            I’ve worked on optimizing performance using worker threads (Piscina) for CPU-intensive tasks like hashing, and I design systems that offload heavy operations through background jobs to keep services efficient and responsive.
          </p>

          <p>
            I’m constantly learning, building, and engaging with other engineers to sharpen my thinking. My goal is to work with strong engineering teams, contribute to systems that scale to millions, and keep pushing deeper into distributed systems and architecture.
          </p>
        </div>

        {/* Blur Overlay & Button */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 flex justify-center items-end pb-2 h-24 bg-gradient-to-t from-white/90 via-white/50 to-transparent dark:from-neutral-950/90 dark:via-neutral-950/50 dark:to-transparent pointer-events-none transition-opacity duration-300",
          isExpanded ? "opacity-0 invisible" : "opacity-100 visible"
        )}>
          <button
            onClick={() => setIsExpanded(true)}
            className="pointer-events-auto flex items-center gap-1 text-sm font-semibold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm hover:scale-105 transition active:scale-95"
          >
            Show more <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Show Less Button (only when expanded) */}
        {isExpanded && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-1 text-sm font-semibold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm hover:scale-105 transition active:scale-95"
            >
              Show less <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
