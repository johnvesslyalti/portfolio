"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sub Trackr — Subscription Manager SaaS",
    description:
      "Track subscriptions with Google OAuth, email reminders, billing cycle logic, interactive dashboards, CSV/PDF export, themes and responsive design.",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "Shadcn UI",
      "Recharts",
      "Auth.js",
    ],
    github: "https://github.com/johnvesslyalti/sub-trackr",
    live: "https://sub-trackr-sigma.vercel.app/",
    image: "/images/sub-trackr.png",
  },
  {
    title: "Fin Sage — Personal Finance Tracker",
    description:
      "PWA for budgets, expenses, spending visualization, offline mode, push notifications and budget alerts.",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Tailwind CSS",
    ],
    github: "https://github.com/johnvesslyalti/fin-sage",
    live: "https://fin-sage-rust.vercel.app/",
    image: "/images/fin-sage.png",
  },
  {
    title: "Cine Scope — Movie Discovery App",
    description:
      "Movie discovery using TMDb API, with watchlist, authentication and lightweight performance optimizations.",
    stack: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Shadcn UI",
      "NextAuth.js",
    ],
    github: "https://github.com/johnvesslyalti/cine-scope",
    live: "https://cine-scope-eosin.vercel.app/",
    image: "/images/cine-scope.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <h3 className="text-2xl font-semibold">Selected Projects</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.06 * i }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
