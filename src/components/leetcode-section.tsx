"use client";
import { useEffect, useState } from "react";

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  contributionPoints: number;
  status?: string;
}

export const LeetCodeSection = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://leetcode-stats-api.herokuapp.com/johnvesslyalti"
        );
        const data = await res.json();

        // Check if API returned valid data
        if (data.status === "error" || !data.totalSolved) {
          console.warn("Invalid LeetCode data:", data);
          setStats(null);
        } else {
          setStats(data);
        }
      } catch (err) {
        console.error("Failed to fetch LeetCode stats:", err);
        setStats(null);
      }
    };
    fetchStats();
  }, []);

  if (!stats) {
    return (
      <section>
        <div className="text-center text-neutral-500 mt-6">Loading stats...</div>
      </section>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        <StatCard label="Total Solved" value={stats.totalSolved ?? 0} />
        <StatCard label="Easy" value={stats.easySolved ?? 0} />
        <StatCard label="Medium" value={stats.mediumSolved ?? 0} />
        <StatCard label="Hard" value={stats.hardSolved ?? 0} />
        <StatCard
          label="Global Rank"
          value={stats.ranking ? `#${stats.ranking.toLocaleString()}` : "N/A"}
        />
        <StatCard label="Points" value={stats.contributionPoints ?? 0} />
      </div>
    </section>
  );
};

const StatCard = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="flex flex-col items-center rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 backdrop-blur-sm hover:scale-[1.03] transition">
    <span className="text-lg font-bold">{value}</span>
    <span className="text-sm text-neutral-600 dark:text-neutral-400">{label}</span>
  </div>
);
