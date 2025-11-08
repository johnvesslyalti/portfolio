"use client";
import { useEffect, useState } from "react";
import BobHello from "./bob-hello";

interface DayStat {
  range: { date: string };
  grand_total: { text: string; total_seconds: number };
}

export default function WakaTimeButton() {
  const [days, setDays] = useState<DayStat[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/wakatime");
        const json = await res.json();

        const sorted = (json.data || []).sort(
          (a: DayStat, b: DayStat) =>
            new Date(b.range.date).getTime() - new Date(a.range.date).getTime()
        );

        setDays(sorted);
      } catch (err) {
        console.error("Error fetching WakaTime:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    setIndex(0);
  }, []);

  const handleClick = () => {
    if (days.length > 0) {
      setIndex((prev) => (prev + 1) % days.length);
    }
  };

  if (loading)
    return (
      <div className="w-[160px] h-[160px] animate-pulse rounded-xl bg-black/40" />
    );

  if (!days.length)
    return (
      <div className="text-red-400 text-sm font-medium">⚠️ No coding data</div>
    );

  const day = days[index];
  const total = day?.grand_total?.text || "0 sec";
  const dateString = day?.range?.date;

  const getReadableDayName = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const normalize = (d: Date) =>
      new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const diffTime = normalize(today).getTime() - normalize(date).getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const label = getReadableDayName(dateString);

  return (
    <div
      onClick={handleClick}
      className="relative w-[170px] cursor-pointer select-none group"
    >
      <BobHello />

      {/* Board Text */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2
          top-[62%] 
          w-[100px]
          bg-black/80 backdrop-blur-md
          text-white text-center text-[12px] font-semibold px-2 py-1
          rounded-md border border-white/20
          shadow-md
        "
      >
        {total} — {label.toLowerCase()}
      </div>
    </div>
  );
}
