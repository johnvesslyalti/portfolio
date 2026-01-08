"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Dot } from "lucide-react";

export default function NameSection() {
  return (
    <section className="border p-5 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">
          Johnvessly Alti
        </div>

        <Dot className="w-4 h-4 opacity-0 md:opacity-100 text-neutral-500 dark:text-neutral-400" />
        <div>altijohnvessly@gmail.com</div>
        <Dot className="w-4 h-4 opacity-0 md:opacity-100 text-neutral-500 dark:text-neutral-400" />
        <AnimatedThemeToggler />
      </div>


    </section>
  );
}
