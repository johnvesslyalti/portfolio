import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Dot } from "lucide-react";
import { TweetCard } from "@/components/ui/tweet-card";
import WakaTimeButton from "@/components/waka-time";
import { BadgeCarousel } from "@/components/badges-carousel";
import Skills from "@/main-components/skills";
import Projects from "@/main-components/projects";
import GitHub from "@/main-components/github";
import Contact from "@/main-components/contact";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-2xl mx-auto p-6 text-neutral-900 dark:text-neutral-100 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2 mt-5">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">
          Johnvessly Alti
        </div>

        <Dot className="w-4 h-4 opacity-0 md:opacity-100 text-neutral-500 dark:text-neutral-400" />
        <div>altijohnvessly@gmail.com</div>
        <Dot className="w-4 h-4 opacity-0 md:opacity-100 text-neutral-500 dark:text-neutral-400" />
        <AnimatedThemeToggler />
      </div>
      <div className="hidden md:flex md:items-center md:justify-between">
        <div className="flex gap-2">
          <div className="relative flex items-center justify-center w-4 h-4">
            {/* green dot */}
            <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
            <span className="absolute w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-sm font-medium">
            Open to work on exciting projects!
          </span>
        </div>
        <div>
          <WakaTimeButton />
        </div>
      </div>

      {/* Intro */}
      <p className="text-lg leading-relaxed">
        Hi 👋 I’m a <span className="font-semibold">Full Stack Developer</span>{" "}
        passionate about building secure, scalable, and user-friendly web
        applications. I specialize in{" "}
        <span className="font-semibold">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        , and I enjoy turning complex problems into intuitive digital
        experiences.
      </p>

      <p className="text-lg leading-relaxed mt-2">
        I love solving challenging problems and turning ideas into real,
        functional applications. I enjoy building things that make a difference
        and continuously learning along the way.
      </p>

      <Skills />
      <Projects />

      {/* Problem Solving & DSA */}
      <section>
        <h2 className="text-xl font-semibold border-b border-neutral-400 mb-3">
          Problem Solving
        </h2>
        <p className="text-lg leading-relaxed">
          I love solving problems and exploring{" "}
          <span className="font-semibold">Data Structures & Algorithms</span>.
          Regular practice on <span className="font-semibold">LeetCode</span>{" "}
          has helped me sharpen my problem-solving skills and improve coding
          efficiency.
        </p>
        <BadgeCarousel />
      </section>

      <GitHub />

      <div className="flex items-center justify-center">
        <TweetCard id="1968877194001723824" />
      </div>

      <Contact />
    </div>
  );
}
