import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AuroraText } from "@/components/ui/aurora-text";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

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
      src: "/cinescope.png",
      github: "https://github.com/johnvesslyalti/lift-log",
      live: "https://johnvesslyalti-liftlog.vercel.app",
    },
    {
      name: "Travel Pal",
      src: "/cinescope.png",
      github: "https://github.com/johnvesslyalti/travel-pal",
      live: "https://johnvesslyalti-travelpal.vercel.app",
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
  ];

  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-2xl mx-auto p-6 text-neutral-900 dark:text-neutral-100 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <AuroraText
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          speed={0.6}
          colors={["#000000", "#555555", "#AAAAAA", "#FFFFFF"]}
        >
          Johnvessly Alti
        </AuroraText>

        <Dot className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
        <div>altijohnvessly@gmail.com</div>
        <Dot className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
        <AnimatedThemeToggler />
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
        <h2 className="text-xl font-semibold border-b border-neutral-400 pb-1">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={project.src}
                alt={project.name}
                width={250}
                height={150}
                className="object-contain w-full h-1/2 sm:w-72 sm:h-48"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        {/* <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
          Contact
        </h2> */}
        <div className="flex flex-wrap gap-3">
          {contact.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="text-sm underline hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
