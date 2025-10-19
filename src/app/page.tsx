import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Badge } from "@/components/ui/badge";
import { SpotifyWidget } from "@/components/spotify-widget";
import { Dot } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";

export default function Page() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js (App Router + Server Actions)",
    "Tailwind CSS",
    "Zustand",
    "Shadcn UI",
    "Node.js",
    "Express.js",
    "Next.js API Routes",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "NextAuth.js",
    "JWT",
    "bcrypt",
    "Git",
    "GitHub",
    "Vercel",
    "Recharts",
    "Postman",
    "VS Code",
    "PWA",
    "CSV/PDF Export",
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
      live: "https://sub-trackr-sigma.vercel.app",
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
        icon: <FaYoutube />
    },
    {
      name: "discord",
      link: "https://discord.gg/T99fCZVh",
      icon: <FaDiscord />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-2xl mx-auto p-6 text-neutral-900 dark:text-neutral-100 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2 mt-5">
        <div
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Johnvessly Alti
        </div>

        <Dot className="w-4 h-4 opacity-0 md:opacity-100 text-neutral-500 dark:text-neutral-400" />
        <div>altijohnvessly@gmail.com</div>
        <Dot className="w-4 h-4 opacity-0 md:opacity-100 text-neutral-500 dark:text-neutral-400" />
        <AnimatedThemeToggler />
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center w-4 h-4">
          {/* green dot */}
          <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
          <span className="absolute w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-sm font-medium">
          Open to work on exciting projects!
        </span>
      </div>

      {/* Intro */}
      <p className="text-lg leading-relaxed">
        Hi 👋 I’m a <span className="font-semibold">Software Engineer</span>{" "}
        passionate about building secure, scalable, and user-friendly web
        applications.
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
              className="border-neutral-400 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
            >
              {skill}
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
              <Badge className="flex text-white dark:bg-black/50 items-center gap-5">
                <div className="font-bold tracking-tight">
                  {project.name}
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-2 p-1">
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

      {/* Contact */}
      <section className="flex justify-between items-center">
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
