"use client";

import AutoMech from "@/components/characters/auto-mech";
import CloudOrbiter from "@/components/characters/cloud-orbiter";
import DataHoarder from "@/components/characters/data-hoarder";
import KernelLeviathan from "@/components/characters/kernel-leviathan";
import SyntaxSage from "@/components/characters/syntax-sage";
import SystemTrailblazer from "@/components/characters/system-trailblazer";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";

export default function NameSection() {
  const [randomCharacter, setRandomCharacter] =
    useState<React.ReactElement | null>(null);

  const characters = [
    <AutoMech key={1} />,
    <CloudOrbiter key={2} />,
    <DataHoarder key={3} />,
    <KernelLeviathan key={4} />,
    <SyntaxSage key={5} />,
    <SystemTrailblazer key={6} />
  ];

  useEffect(() => {
    const pick =
      characters[Math.floor(Math.random() * characters.length)];
    setRandomCharacter(pick);
  }, []);

  return (
    <section className="border p-5 rounded-lg">
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

      {/* Status + Character */}
      <div className="flex items-center justify-between mt-6">
        {/* Open to work */}
        <div className="flex justify-center w-1/2">
          <div
            className="
              flex items-center gap-2
              px-4 py-1.5
              rounded-full
              border border-neutral-200 dark:border-neutral-700
              bg-neutral-50/70 dark:bg-neutral-900/50
              backdrop-blur-sm
              hover:border-green-500/40
              transition-colors duration-200
            "
          >
            <div className="relative flex items-center justify-center w-3 h-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
              <span className="absolute w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            </div>

            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
              <span>Open to work</span>
              <span className="hidden sm:inline ml-1">
                on exciting projects!
              </span>
            </span>
          </div>
        </div>

        {/* Character */}
        <div className="flex items-center justify-center w-1/2">
          {randomCharacter}
        </div>
      </div>
    </section>
  );
}
