"use client";
import { useEffect, useState } from "react";

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
        setStat(json); // directly store returned data
      } catch (err) {
        console.error("Failed to load today's WakaTime", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="w-[160px] h-[160px] animate-pulse rounded-xl bg-black/40" />
    );
  }

  if (!stat) {
    return (
      <div className="text-red-400 text-sm font-medium">⚠️ No data today</div>
    );
  }

  return (
    <div className="relative text-sm cursor-default select-none border p-2 rounded-full">
      {stat.text} — today
    </div>
  );
}
