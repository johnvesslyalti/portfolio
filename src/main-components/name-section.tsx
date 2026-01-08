"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function NameSection() {
  return (
    <section className="border p-5 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">
          Johnvessly Alti
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            altijohnvessly@gmail.com
          </div>
          <AnimatedThemeToggler />
        </div>
      </div>


    </section>
  );
}
