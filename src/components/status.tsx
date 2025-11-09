"use client";

import { useEffect, useState } from "react";
import { FaTerminal } from "react-icons/fa";

type Activity = {
  start: string; // "HH:MM"
  end: string; // "HH:MM"
  desc: string;
};

const schedule: Activity[] = [
  { start: "06:00", end: "07:00", desc: "Morning Reset / Meditation" },
  { start: "07:00", end: "10:00", desc: "Deep DSA Focus" },
  { start: "10:00", end: "13:00", desc: "Development Work" },
  { start: "13:00", end: "14:00", desc: "Mid-day Recharge" },
  { start: "14:00", end: "17:00", desc: "Dev Continuation" },
  { start: "17:00", end: "18:00", desc: "Workout Session" },
  { start: "18:00", end: "19:00", desc: "Cool Down / Reset" },
  { start: "19:00", end: "22:00", desc: "Job Applications & Portfolio Work" },
  { start: "22:00", end: "06:00", desc: "😴 Sleep / Offline" }, // overnight
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

    // normal block
    if (s < e && n >= s && n < e) return block;

    // overnight block (start > end)
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

  // update current block every minute
  useEffect(() => {
    const update = () => setCurrentBlock(pickCurrentBlock(new Date()));
    update();
    const t = setInterval(update, 60_000);
    return () => clearInterval(t);
  }, []);

  // typing effect when block changes
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
    <section className="flex items-center gap-5 border p-5 rounded-lg">
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-xl">Status</h2>
        <span className="font-mono">
          <FaTerminal />
        </span>
      </div>
      <p className="text-sm text-green-400 font-mono font-medium">
        {typed}
        <span className="animate-pulse">|</span>
      </p>
    </section>
  );
}
