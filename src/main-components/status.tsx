"use client";

import WakaTimeToday from "@/components/waka-time";
import { useEffect, useState } from "react";
import { FaTerminal } from "react-icons/fa";

type Activity = {
  start: string;
  end: string;
  desc: string;
};

const schedule: Activity[] = [
  { start: "06:00", end: "07:00", desc: "Morning Meditation" },
  { start: "07:00", end: "10:00", desc: "Deep DSA Focus" },
  { start: "10:00", end: "13:00", desc: "Development Work" },
  { start: "13:00", end: "14:00", desc: "Mid-day Recharge" },
  { start: "14:00", end: "17:00", desc: "Dev Continuation" },
  { start: "17:00", end: "18:00", desc: "Workout Session" },
  { start: "18:00", end: "19:00", desc: "Cool Down" },
  { start: "19:00", end: "22:00", desc: "Job Applications" },
  { start: "22:00", end: "06:00", desc: "Sleep" },
];

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function pickCurrentBlock(now: Date): Activity | null {
  const n = now.getHours() * 60 + now.getMinutes();
  for (const block of schedule) {
    const s = toMinutes(block.start);
    const e = toMinutes(block.end);
    if (s < e && n >= s && n < e) return block;
    if (s > e && (n >= s || n < e)) return block;
  }
  return null;
}

function formatRange(block: Activity | null) {
  if (!block) return "";
  return `${block.start}–${block.end}`;
}

export default function Status() {
  const [currentBlock, setCurrentBlock] = useState<Activity | null>(null);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const update = () => setCurrentBlock(pickCurrentBlock(new Date()));
    update();
    const t = setInterval(update, 60_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const full = currentBlock
      ? `${formatRange(currentBlock)}  ${currentBlock.desc}`
      : "Sleep / Offline";

    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      setTyped(full.slice(0, i));
      i++;
      if (i > full.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, [currentBlock]);

  return (
    <section className="border p-4 sm:p-5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 flex-wrap">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-lg sm:text-xl">Status</h2>
          <span className="font-mono text-base">
            <FaTerminal />
          </span>
        </div>

        <div className="text-xs sm:text-sm text-green-400 font-mono font-medium break-words">
          {typed}
          <span className="animate-pulse">|</span>
        </div>
      </div>

      <div className="w-full sm:w-auto">
        <WakaTimeToday />
      </div>
    </section>
  );
}
