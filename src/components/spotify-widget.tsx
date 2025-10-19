"use client";

import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import Image from "next/image";

interface Track {
  name: string;
  artists: string;
  album: string;
  image: string;
  url: string;
  isPlaying?: boolean;
}

interface SpotifyData {
  currentTrack: Track | null;
  recentTracks: Track[];
}

export function SpotifyWidget() {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) throw new Error("Failed to fetch Spotify data");
        const data = await response.json();
        setSpotifyData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading)
    return (
      <div className="w-50 animate-pulse">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-4 h-4 bg-green-500/30 rounded-full" />
          <div className="h-3 w-20 bg-neutral-300 dark:bg-neutral-700 rounded" />
        </div>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neutral-300 dark:bg-neutral-700 rounded" />
          <div className="flex flex-col gap-1 flex-1">
            <div className="h-3 w-24 bg-neutral-300 dark:bg-neutral-700 rounded" />
            <div className="h-3 w-16 bg-neutral-300 dark:bg-neutral-700 rounded" />
          </div>
          <div className="flex items-end justify-end h-4 gap-0.5">
            <div className="w-1 h-2 bg-green-500/30 rounded" />
            <div className="w-1 h-3 bg-green-500/30 rounded" />
            <div className="w-1 h-2 bg-green-500/30 rounded" />
          </div>
        </div>
      </div>
    );
  if (error || !spotifyData) {
    const now = new Date();
    const DOB = new Date(2003, 5, 20); // Month is 0-indexed
    let age = now.getFullYear() - DOB.getFullYear();
    const m = now.getMonth() - DOB.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < DOB.getDate())) age--;

    return <p>Made with ❤️ by Johnvessly Alti - {age}</p>;
  }

  const { currentTrack, recentTracks } = spotifyData;

  const displayTrack =
    currentTrack && currentTrack.isPlaying
      ? currentTrack
      : recentTracks.length > 0
      ? recentTracks[0]
      : null;

  return (
    <div className="w-50">
      <div className="flex items-center justify-between gap-2 mb-2">
        <FaSpotify className="text-green-500 text-sm" />
        <div className="font-semibold text-xs">Johnvessly Alti</div>
        <span className="font-semibold text-xs">
          {currentTrack?.isPlaying ? "Now Playing" : "Last Listened"}
        </span>
      </div>

      {displayTrack ? (
        <div className="flex items-center gap-2">
          {displayTrack.image && (
            <Image
              src={displayTrack.image}
              alt={displayTrack.album}
              width={40}
              height={40}
              className="w-10 h-10 rounded object-cover"
            />
          )}

          <div className="flex-1 min-w-0">
            <a
              href={displayTrack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              <p className="text-xs font-medium truncate text-neutral-900 dark:text-neutral-100">
                {displayTrack.name}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                {displayTrack.artists}
              </p>
            </a>
          </div>

          {/* Animated bars */}
          <div className="flex items-end justify-end h-4 gap-0.5">
            {[0, 1, 2].map((i) => {
              const heights = [0.5, 1, 0.5];
              return (
                <span
                  key={i}
                  className="block w-1 rounded bg-green-500"
                  style={{
                    height: currentTrack?.isPlaying
                      ? `${heights[i]}rem`
                      : "0.5rem",
                    animation: currentTrack?.isPlaying
                      ? `bounce ${0.8 + i * 0.1}s ${
                          i * 0.1
                        }s infinite ease-in-out`
                      : "none",
                  }}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          No recent tracks
        </p>
      )}
    </div>
  );
}
