import CodeWizard from "@/components/characters/code-wizard";
import CoolAstronaut from "@/components/characters/cool-astronaut";
import Astro from "@/components/characters/cool-astronaut";
import CyberCat from "@/components/characters/cyber-cat";
import CyberNinja from "@/components/characters/cyber-ninja";
import RoboHelper from "@/components/characters/robo-helper";
import AnimatedRobo from "@/components/characters/robo-helper";
import Emoji from "@/components/emoji";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import WakaTimeToday from "@/components/waka-time";
import { Dot } from "lucide-react";

export default function NameSection() {
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

      {/* Status + WakaTime close together */}
      <div className="flex items-center my-5 md:my-0">
        {/* Status Indicator */}
        <div className="flex items-center gap-2 w-1/2">
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
            <span className="absolute w-2.5 h-2.5 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-sm flex font-medium text-neutral-700 dark:text-neutral-300">
            <span>Open to work</span><span className="hidden sm:block ml-1">on exciting projects!</span>
          </span>
        </div>
        <div className="flex items-center justify-center w-1/2 my-5">
          <CodeWizard />
        </div>
      </div>
    </section>
  );
}
