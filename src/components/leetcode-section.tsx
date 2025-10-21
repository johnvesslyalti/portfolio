"use client";

import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://leetcode-stats-api.herokuapp.com/johnvesslyalti"
        );
        const data = await res.json();

        if (data.status === "error" || !data.totalSolved) {
          console.warn("Invalid LeetCode data:", data);
          setStats(null);
        } else {
          setStats(data);
        }
      } catch (err) {
        console.error("Failed to fetch LeetCode stats:", err);
        setStats(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-4">
          <SiLeetcode className="text-xl text-orange-600 dark:text-orange-400" />
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            Loading LeetCode stats...
          </span>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="mt-4 flex items-center gap-2">
        <SiLeetcode className="text-xl text-neutral-400" />
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          Unable to load stats
        </span>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-4">

      {/* Stats Grid - Matching your existing style */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatCard
          label="Total Solved"
          value={stats.totalSolved}
          highlight
        />
        <StatCard
          label="Easy"
          value={stats.easySolved}
          color="text-green-600 dark:text-green-400"
        />
        <StatCard
          label="Medium"
          value={stats.mediumSolved}
          color="text-yellow-600 dark:text-yellow-400"
        />
        <StatCard
          label="Hard"
          value={stats.hardSolved}
          color="text-red-600 dark:text-red-400"
        />
        <StatCard
          label="Rank"
          value={stats.ranking ? `#${stats.ranking.toLocaleString()}` : "N/A"}
        />
        <StatCard
          label="Points"
          value={stats.contributionPoints.toLocaleString()}
        />
      </div>
    </div>
  );
};

const StatCard = ({
  label,
  value,
  color,
  highlight = false,
}: {
  label: string;
  value: string | number;
  color?: string;
  highlight?: boolean;
}) => (
  <div
    className={`flex flex-col items-center justify-center rounded-lg p-4 border transition-all ${
      highlight
        ? "border-orange-400 dark:border-orange-600 bg-orange-50 dark:bg-orange-950/20"
        : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600"
    }`}
  >
    <span
      className={`text-2xl font-bold ${
        color ? color : highlight ? "text-orange-600 dark:text-orange-400" : ""
      }`}
    >
      {value}
    </span>
    <span className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
      {label}
    </span>
  </div>
);