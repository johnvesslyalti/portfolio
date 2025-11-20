"use client";

import CyberCodeWizard from "@/components/characters/code-wizard";
import CoolAstronaut from "@/components/characters/cool-astronaut";
import CyberCat from "@/components/characters/cyber-cat";
import CyberCat2 from "@/components/characters/cyber-cat-2";
import CyberNinjaScene from "@/components/characters/cyber-ninja";
import CyberNinja2 from "@/components/characters/cyber-ninja-2";
import CyberPathfinder from "@/components/characters/cyber-pathfinder";
import CyberSonicArchitect from "@/components/characters/cyber-sonicarchitect";
import RoboHelper from "@/components/characters/robo-helper";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Dot } from "lucide-react";
import { useState, useEffect } from "react";

export default function NameSection() {
  const [randomCharacter, setRandomCharacter] = useState<React.ReactElement | null>(null);

  const characters = [
    <CyberCodeWizard key="1" />,
    <CoolAstronaut key="2" />,
    <RoboHelper key="3" />,
    <CyberCat key="4" />,
    <CyberCat2 key="5" />,
    <CyberNinjaScene key="6" />,
    <CyberNinja2 key="7" />,
    <CyberPathfinder key="8" />,
    <CyberSonicArchitect key="9" />,
  ];

  useEffect(() => {
    const pick = characters[Math.floor(Math.random() * characters.length)];
    setRandomCharacter(pick);
  }, []);

  return (
    <section className="border p-5 rounded-lg">
      <div className="flex items-center justify-between flex-wrap gap-2 mt-5">
        <div className="text-3xl sm:text-4xl font-bold tracking-tight">
          Johnvessly Alti
        </div>

        <Dot className="w-4 h-4 opacity-0 md:opacity-100 text-neutral-500 dark:text-neutral-400" />
        <div>altijohnvessly@gmail.com</div>
        <Dot className="w-4 h-4 opacity-0 md:opacity-100 text-neutral-500 dark:text-neutral-400" />
        <AnimatedThemeToggler />
      </div>

      <div className="flex items-center my-5 md:my-0">
        <div className="flex items-center gap-2 w-1/2">
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
            <span className="absolute w-2.5 h-2.5 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-sm flex font-medium text-neutral-700 dark:text-neutral-300">
            <span>Open to work</span>
            <span className="hidden sm:block ml-1">on exciting projects!</span>
          </span>
        </div>

        <div className="flex items-center justify-center w-1/2 my-2">
          {randomCharacter}
        </div>
      </div>
    </section>
  );
}
