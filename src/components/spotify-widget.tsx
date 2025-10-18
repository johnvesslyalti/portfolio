'use client';

import { useEffect, useState } from 'react';
import { FaSpotify } from 'react-icons/fa';
import Image from 'next/image';

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
    const interval = setInterval(fetchSpotifyData, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <p>Loading Spotify...</p>;
  if (error || !spotifyData) return <p>Unable to load Spotify data.</p>;

  const { currentTrack, recentTracks } = spotifyData;

  // Show current track if playing, otherwise show last listened
  const displayTrack =
    currentTrack && currentTrack.isPlaying
      ? currentTrack
      : recentTracks.length > 0
      ? recentTracks[0]
      : null;

  return (
    <div className="fixed bottom-6 right-6 w-72 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 shadow-lg z-50">
      <div className="flex items-center gap-2 mb-2">
        <FaSpotify className="text-green-500 text-sm" />
        <span className="font-semibold text-xs">
          {currentTrack?.isPlaying ? 'Now Playing' : 'Last Listened'}
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
          <div className="flex flex-col justify-end h-4 gap-0.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-1 rounded bg-green-500 ${
                  currentTrack?.isPlaying ? `animate-bounce${i}` : 'h-2'
                }`}
              />
            ))}
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
