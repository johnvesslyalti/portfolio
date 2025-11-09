"use client";
import { useEffect, useState } from "react";
import { IoAlarm } from "react-icons/io5";

interface TodayStat {
  text: string;
  total_seconds: number;
}

export default function WakaTimeToday() {
  const [stat, setStat] = useState<TodayStat | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/wakatime", { cache: "no-store" });
        const json = await res.json();
        setStat(json);
      } catch (err) {
        console.error("Failed to load today's WakaTime", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // 🟡 Skeleton Loader
  if (loading) {
    return (
      <div className="p-3 rounded-xl bg-black/40 space-y-2 animate-pulse w-full max-w-xs sm:max-w-sm md:max-w-none">
        <div className="h-4 w-24 bg-white/20 rounded"></div>
        <div className="h-4 w-40 bg-white/10 rounded"></div>
      </div>
    );
  }

  if (!stat) {
    return (
      <div className="text-red-400 text-sm font-medium p-3 text-center">
        ⚠️ No data today
      </div>
    );
  }

  return (
    <div className="p-3 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-none cursor-default">
      <div className="text-center text-xs sm:text-sm font-semibold tracking-wide">
        Coded Today
      </div>

      <div className="flex items-center justify-center gap-2 mt-1 text-sm sm:text-base font-medium">
        <IoAlarm className="animate-accordion-up text-lg" />
        <span>{stat.text}</span>
      </div>
    </div>
  );
}
