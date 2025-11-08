"use client";
import { useEffect, useState } from "react";

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
      {/* Dog Mascot */}
      <svg
        width="70"
        height="70"
        viewBox="0 0 200 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="bob-body"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <ellipse cx="100" cy="150" rx="45" ry="55" fill="#fff" />
          <circle cx="100" cy="90" r="35" fill="#fff" />

          <circle cx="88" cy="85" r="4" fill="black" />
          <circle cx="112" cy="85" r="4" fill="black" />

          <path
            d="M90 102 Q100 110 110 102"
            stroke="black"
            stroke-width="4"
            fill="none"
          />

          <path d="M70 75 C50 100 60 120 75 110" fill="#9F6B3F" />
          <path d="M130 75 C150 100 140 120 125 110" fill="#9F6B3F" />

          <line
            x1="85"
            y1="200"
            x2="85"
            y2="250"
            stroke="black"
            stroke-width="6"
          />
          <line
            x1="115"
            y1="200"
            x2="115"
            y2="250"
            stroke="black"
            stroke-width="6"
          />
        </g>
        <g
          id="bob-arm"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform-origin="120px 140px"
        >
          <path d="M120 140 Q145 130 160 150" fill="#fff" />
          <circle
            cx="165"
            cy="150"
            r="8"
            fill="#fff"
            stroke="black"
            stroke-width="4"
          />
        </g>
      </svg>

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
