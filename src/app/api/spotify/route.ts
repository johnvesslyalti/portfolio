import { NextResponse } from 'next/server';

interface SpotifyTrack {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string; height: number; width: number }>;
  };
  external_urls: {
    spotify: string;
  };
}

interface SpotifyResponse {
  item: SpotifyTrack;
  is_playing: boolean;
  progress_ms: number;
}

interface TrackInfo {
  name: string;
  artists: string;
  album: string;
  image: string;
  url: string;
}

interface CurrentTrack extends TrackInfo {
  isPlaying: boolean;
  progress: number;
}

interface CachedTrack {
  track: TrackInfo;
  timestamp: number;
}

// Module-level cache with timestamp
let lastTrack: CachedTrack | null = null;

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Spotify credentials');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Token refresh failed:', errorData);
    throw new Error('Failed to refresh access token');
  }

  const data = await response.json();
  return data.access_token;
}

function extractTrackInfo(item: SpotifyTrack): TrackInfo {
  return {
    name: item.name,
    artists: item.artists.map(a => a.name).join(', '),
    album: item.album.name,
    image: item.album.images[0]?.url || '',
    url: item.external_urls.spotify,
  };
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { 'Authorization': `Bearer ${accessToken}` },
    });

    // Handle authentication errors
    if (response.status === 401 || response.status === 403) {
      return NextResponse.json(
        { error: 'Spotify authentication failed', recentlyListened: lastTrack },
        { status: 401 }
      );
    }

    let currentTrack: CurrentTrack | null = null;
    let recentlyListened: CachedTrack | null = null;

    // If nothing is playing (204) or successful response with data
    if (response.status !== 204 && response.ok) {
      const data: SpotifyResponse = await response.json();
      
      if (data && data.item) {
        const trackInfo = extractTrackInfo(data.item);
        
        currentTrack = {
          ...trackInfo,
          isPlaying: data.is_playing,
          progress: data.progress_ms,
        };

        // Store previous track before updating
        const previousTrack = lastTrack;

        // Update cache when track is playing
        if (data.is_playing) {
          // Check if it's a different track
          const isDifferentTrack = !previousTrack || 
            previousTrack.track.name !== trackInfo.name ||
            previousTrack.track.artists !== trackInfo.artists;

          if (isDifferentTrack && previousTrack) {
            // Set the previous track as recently listened
            recentlyListened = previousTrack;
          }

          // Update the cache with current track
          lastTrack = {
            track: trackInfo,
            timestamp: Date.now(),
          };
        } else {
          // Track is paused, show last track as recently listened
          recentlyListened = lastTrack;
        }
      }
    } else {
      // Nothing playing, show last cached track
      recentlyListened = lastTrack;
    }

    return NextResponse.json({ 
      currentTrack, 
      recentlyListened: recentlyListened ? recentlyListened.track : null 
    });
    
  } catch (error) {
    console.error('Spotify API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch Spotify data',
        recentlyListened: lastTrack ? lastTrack.track : null 
      },
      { status: 500 }
    );
  }
}