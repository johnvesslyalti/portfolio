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
    return <div className="animate-pulse rounded-xl bg-black/40" />;
  }

  if (!stat) {
    return (
      <div className="text-red-400 text-sm font-medium">⚠️ No data today</div>
    );
  }

  return (
    <div className="text-sm cursor-default p-2">
      <div className="text-center font-semibold">Coded Today</div>
      <div className="flex items-center gap-2">
        <IoAlarm className="animate-accordion-up" />
        {stat.text}
      </div>
    </div>
  );
}
