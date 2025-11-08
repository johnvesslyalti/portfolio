import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import WakaTimeButton from "@/components/waka-time";
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
      <div className="hidden md:flex md:items-center md:justify-between">
        <div className="flex gap-2">
          <div className="relative flex items-center justify-center w-4 h-4">
            {/* green dot */}
            <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
            <span className="absolute w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-sm font-medium">
            Open to work on exciting projects!
          </span>
        </div>
        <div>
          <WakaTimeButton />
        </div>
      </div>
    </section>
  );
}
