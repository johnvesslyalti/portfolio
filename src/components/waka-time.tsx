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

        // Sort the days so that the most recent day (today) is first
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

    // Reset index to 0 (today) whenever page refreshes
    setIndex(0);
  }, []);

  const handleClick = () => {
    if (days.length > 0) {
      setIndex((prev) => (prev + 1) % days.length);
    }
  };

  if (loading)
    return (
      <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-gray-800 text-gray-400 shadow">
        ⏳ Loading week stats...
      </div>
    );

  if (!days.length)
    return (
      <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-red-700 text-white shadow">
        ⚠️ No data found
      </div>
    );

  const day = days[index];
  const dateString = day?.range?.date;
  const total = day?.grand_total?.text || "0 sec";

  const getReadableDayName = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();

    const normalize = (d: Date) =>
      new Date(d.getFullYear(), d.getMonth(), d.getDate());

    const diffTime =
      normalize(today).getTime() - normalize(date).getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";

    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const label = getReadableDayName(dateString);

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center gap-2 px-5 py-2
        rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600
        text-white font-semibold shadow-md hover:scale-[1.04]
        transition-transform select-none
      "
    >
      💻 {label}: {total}
    </button>
  );
}
