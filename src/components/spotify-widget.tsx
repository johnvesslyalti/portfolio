'use client';

import { useEffect, useState } from 'react';
import { FaSpotify, FaPlay, FaPause } from 'react-icons/fa';
import Image from 'next/image';

interface Track {
  name: string;
  artists: string;
  album: string;
  image: string;
  url: string;
  isPlaying?: boolean;
  progress?: number;
  playedAt?: string;
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
        const response = await fetch('/api/spotify');
        if (!response.ok) throw new Error('Failed to fetch Spotify data');
        const data = await response.json();
        setSpotifyData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="w-72 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 shadow-lg z-50">
        <div className="flex items-center gap-2 mb-2">
          <FaSpotify className="text-green-500 text-sm" />
          <span className="font-semibold text-xs">Spotify</span>
        </div>
        <div className="animate-pulse">
          <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded mb-1"></div>
          <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (error || !spotifyData) {
    return (
      <div className="fixed bottom-6 right-6 w-72 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 shadow-lg z-50">
        <div className="flex items-center gap-2 mb-2">
          <FaSpotify className="text-green-500 text-sm" />
          <span className="font-semibold text-xs">Spotify</span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Unable to load music data
        </p>
      </div>
    );
  }

  const { currentTrack, recentTracks } = spotifyData;

  // Decide what to display
  const displayTrack =
    currentTrack && currentTrack.isPlaying
      ? currentTrack
      : recentTracks.length > 0
      ? recentTracks[0] // last listened track
      : null;

  return (
    <div className="fixed bottom-6 right-6 w-72 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 shadow-lg z-50">
      <div className="flex items-center gap-2 mb-2">
        <FaSpotify className="text-green-500 text-sm" />
        <span className="font-semibold text-xs">
          {currentTrack && currentTrack.isPlaying ? 'Now Playing' : 'Last Listened'}
        </span>
      </div>

      {displayTrack ? (
        <div className="mb-3 flex items-center gap-2">
          {displayTrack.image && (
            <Image
            width={10}
            height={10}
              src={displayTrack.image}
              alt={displayTrack.album}
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
          {displayTrack.isPlaying !== undefined && (
            <div className="flex items-center gap-1">
              {displayTrack.isPlaying ? (
                <FaPlay className="text-green-500 text-xs" />
              ) : (
                <FaPause className="text-neutral-400 text-xs" />
              )}
            </div>
          )}
        </div>
      ) : (
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          No recent tracks
        </p>
      )}
    </div>
  );
}
