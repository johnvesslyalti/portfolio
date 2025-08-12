import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <h3 className="text-2xl font-semibold">Technical Skills</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <SkillCard title="Languages" content="TypeScript • JavaScript • Python • HTML • CSS" />
        <SkillCard title="Frontend" content="React, Next.js (App Router + Server Actions), Tailwind CSS, Zustand, Shadcn UI" />
        <SkillCard title="Backend & DB" content="Node.js, Express, Next.js API Routes, PostgreSQL, MongoDB, Prisma ORM" />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard title="Auth & Infra" content="NextAuth.js, JWT, bcrypt, Vercel, Git, GitHub, Postman" />
        <SkillCard title="Tools" content="Recharts, PWA, CSV/PDF Export, VS Code" />
      </div>
    </section>
  );
}
