import { TweetCard } from "@/components/ui/tweet-card";
import Skills from "@/main-components/skills";
import Projects from "@/main-components/projects";
import GitHub from "@/main-components/github";
import Contact from "@/main-components/contact";
import NameSection from "@/main-components/name";
import ProblemSolving from "@/main-components/problem-solving";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-2xl mx-auto p-6 text-neutral-900 dark:text-neutral-100 transition-colors">
        <NameSection />
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

      <ProblemSolving />
      <GitHub />

      <div className="flex items-center justify-center">
        <TweetCard id="1968877194001723824" />
      </div>

      <Contact />
    </div>
  );
}
