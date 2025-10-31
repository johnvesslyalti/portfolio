import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Badge } from "@/components/ui/badge";
import { SpotifyWidget } from "@/components/spotify-widget";
import { Dot } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  SiBetterstack,
  SiExpress,
  SiLeetcode,
  SiPostman,
  SiPrisma,
  SiShadcnui,
  SiZulip,
} from "react-icons/si";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaDiscord, FaLinux, FaYoutube } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { LuFileJson, LuSquareChartGantt } from "react-icons/lu";
import { MdNoEncryptionGmailerrorred } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import GitHubCalendar from "react-github-calendar";
import { TweetCard } from "@/components/ui/tweet-card";
import WakaTimeButton from "@/components/waka-time";
import { BadgeCarousel } from "@/components/badges-carousel";

export default function Page() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js (App Router + Server Actions)", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Next.js API Routes", icon: <SiNextdotjs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Prisma ORM", icon: <SiPrisma /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "linux", icon: <FaLinux /> },
    { name: "Zustand", icon: <SiZulip /> },
    { name: "Shadcn UI", icon: <SiShadcnui /> },
    { name: "Better-auth", icon: <SiBetterstack /> },
    { name: "JWT", icon: <LuFileJson /> },
    { name: "bcrypt", icon: <MdNoEncryptionGmailerrorred /> },
    { name: "Vercel", icon: <IoLogoVercel /> },
    { name: "Recharts", icon: <LuSquareChartGantt /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "VS Code", icon: <VscVscode /> },
  ];

  const projects = [
    {
      name: "Lift Log",
      src: "/liftlog.png",
      github: "https://github.com/johnvesslyalti/lift-log",
      live: "https://johnvesslyalti-liftlog.vercel.app",
    },
    {
      name: "Sub Trakr",
      src: "/subtrackr.png",
      github: "https://github.com/johnvesslyalti/sub-trackr",
      live: "https://johnvesslyalti-subtrackr.vercel.app",
    },
    {
      name: "Cine Scope",
      src: "/cinescope.png",
      github: "https://github.com/johnvesslyalti/cine-scope",
      live: "https://johnvesslyalti-cinescope.vercel.app",
    },
  ];

  const contact = [
    { name: "x", link: "https://x.com/johnvesslyalti", icon: <FaXTwitter /> },
    {
      name: "linkedin",
      link: "https://linkedin.com/in/johnvesslyalti",
      icon: <FaLinkedin />,
    },
    {
      name: "github",
      link: "https://github.com/johnvesslyalti",
      icon: <FaGithub />,
    },
    {
      name: "leetcode",
      link: "https://leetcode.com/johnvesslyalti",
      icon: <SiLeetcode />,
    },
    {
      name: "youtube",
      link: "https://youtube.com/@johnvesslyalti",
      icon: <FaYoutube />,
    },
    {
      name: "discord",
      link: "https://discord.com/users/johnvesslyalti",
      icon: <FaDiscord />,
    },
  ];

//   const stats = [
//     { title: "Problems", number: "128" },
//     { title: "Streak", number: "53" },
//     { title: "Hard", number: "14" },
//   ];

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

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-neutral-400 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition flex items-center gap-2"
            >
              {/* Render icon if it exists */}
              {skill.icon && <span className="text-lg">{skill.icon}</span>}
              <span>{skill.name}</span>
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects - only images */}
      <section>
        <h2 className="text-xl font-semibold border-b border-neutral-400 mb-3">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 rounded-lg"
            >
              <Image
                src={project.src}
                alt={project.name}
                width={500} // larger width for responsive scaling
                height={300} // proportional height
                className="object-contain w-full h-48 sm:h-56 md:h-64"
              />
              <Badge className="w-full flex justify-between text-white dark:bg-black/50 items-center gap-5">
                <div className="font-bold tracking-tight">{project.name}</div>
                <div className="flex items-center gap-2 p-1">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-xs text-white flex items-center hover:text-neutral-700 dark:hover:text-neutral-300"
                  >
                    <FaGithub className="inline mr-1" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-xs text-white flex items-center hover:text-neutral-700 dark:hover:text-neutral-300"
                  >
                    <LiaExternalLinkAltSolid className="inline mr-1" />
                    <span>Live</span>
                  </a>
                </div>
              </Badge>
            </div>
          ))}
        </div>
      </section>

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

        {/* <div className="flex justify-center items-center gap-10">
          {stats.map((stat, i) => (
            <div className="flex flex-col items-center p-5" key={i}>
              <div className="">{stat.title}</div>
              <div className="text-xl font-bold">{stat.number}</div>
            </div>
          ))}
        </div> */}
        <BadgeCarousel />
      </section>

      {/* GitHub Contributions */}
      <section>
        <h2 className="text-xl font-semibold border-b border-neutral-400 mb-3">
          GitHub Contributions
        </h2>

        <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
          Track of my GitHub contributions and open-source activity over the
          past year.
        </p>
        <div className="github-calendar-wrapper w-full">
          <GitHubCalendar
            username="johnvesslyalti"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </section>

      <div className="flex items-center justify-center">
        <TweetCard id="1968877194001723824" />
      </div>

      {/* Contact */}
      <section className="flex flex-col gap-5 sm:flex-row sm:justify-between items-center">
        <div className="flex flex-wrap gap-3">
          {contact.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="text-xl underline hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <SpotifyWidget />
      </section>
    </div>
  );
}
