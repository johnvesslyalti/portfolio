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
import { FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { LuFileJson, LuSquareChartGantt } from "react-icons/lu";
import { MdNoEncryptionGmailerrorred } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import {
  SiBetterstack,
  SiExpress,
  SiPostman,
  SiPrisma,
  SiShadcnui,
  SiZulip,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
export default function Skills() {
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

  return (
    <section className="border p-5 rounded-lg">
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
  );
}
