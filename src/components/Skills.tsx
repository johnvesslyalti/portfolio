import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="mt-20 px-4 md:px-8">
      {/* Section Header */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Technical Skills
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl">
          A snapshot of the technologies and tools I work with to build modern web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <SkillCard
          title="Languages"
          content="TypeScript • JavaScript • Python • HTML • CSS"
        />
        <SkillCard
          title="Frontend"
          content="React, Next.js (App Router + Server Actions), Tailwind CSS, Zustand, Shadcn UI"
        />
        <SkillCard
          title="Backend & DB"
          content="Node.js, Express, Next.js API Routes, PostgreSQL, MongoDB, Prisma ORM"
        />
        <SkillCard
          title="Auth & Infra"
          content="NextAuth.js, JWT, bcrypt, Vercel, Git, GitHub, Postman"
        />
        <SkillCard
          title="Tools"
          content="Recharts, PWA, CSV/PDF Export, VS Code"
        />
      </div>
    </section>
  );
}
