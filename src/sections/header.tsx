"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Header() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/80 p-8 shadow-xl shadow-neutral-200/40 backdrop-blur dark:border-white/5 dark:bg-neutral-950/60 dark:shadow-neutral-950/60">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(59,130,246,0.08),rgba(16,185,129,0.06),rgba(236,72,153,0.06))]" />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
              Available for collaboration
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Johnvessly Alti
            </h1>
            <p className="max-w-xl text-base text-neutral-600 dark:text-neutral-300 sm:text-lg">
              Software engineer focused on crafting reliable, secure, and elegant
              digital experiences for modern teams.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:altijohnvessly@gmail.com"
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-100"
            >
              Let&apos;s talk
            </a>
            <AnimatedThemeToggler />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Years in product teams", value: "5+" },
            { label: "Projects shipped", value: "20+" },
            { label: "Focus areas", value: "Systems, DX, Performance" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/70 p-4 text-sm text-neutral-600 shadow-sm shadow-neutral-200/30 dark:border-white/5 dark:bg-neutral-900/60 dark:text-neutral-300"
            >
              <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {item.value}
              </div>
              <div className="mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
