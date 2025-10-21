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
        const data: LeetCodeStats = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch LeetCode stats:", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <section>
      <div>
        {stats ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <StatCard label="Total Solved" value={stats.totalSolved} />
            <StatCard label="Easy" value={stats.easySolved} />
            <StatCard label="Medium" value={stats.mediumSolved} />
            <StatCard label="Hard" value={stats.hardSolved} />
            <StatCard
              label="Global Rank"
              value={`#${stats.ranking.toLocaleString()}`}
            />
            <StatCard label="Points" value={stats.contributionPoints} />
          </div>
        ) : (
          <div className="text-center text-neutral-500 mt-6">
            Loading stats...
          </div>
        )}
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
    <span className="text-sm text-neutral-600 dark:text-neutral-400">
      {label}
    </span>
  </div>
);
