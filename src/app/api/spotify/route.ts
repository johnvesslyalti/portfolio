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

interface RecentTrack {
  track: SpotifyTrack;
  played_at: string;
}

interface RecentTracksResponse {
  items: RecentTrack[];
}

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
    throw new Error('Failed to refresh access token');
  }

  const data = await response.json();
  return data.access_token;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    // Fetch current playing track and recent tracks in parallel
    const [currentPlayingResponse, recentTracksResponse] = await Promise.all([
      fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }),
      fetch('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }),
    ]);

    let currentTrack = null;
    let recentTracks: Array<{
      name: string;
      artists: string;
      album: string;
      image: string;
      url: string;
      playedAt: string;
    }> = [];

    if (currentPlayingResponse.ok) {
      const currentData: SpotifyResponse = await currentPlayingResponse.json();
      if (currentData && currentData.item) {
        currentTrack = {
          name: currentData.item.name,
          artists: currentData.item.artists.map(artist => artist.name).join(', '),
          album: currentData.item.album.name,
          image: currentData.item.album.images[0]?.url || '',
          url: currentData.item.external_urls.spotify,
          isPlaying: currentData.is_playing,
          progress: currentData.progress_ms,
        };
      }
    }

    if (recentTracksResponse.ok) {
      const recentData: RecentTracksResponse = await recentTracksResponse.json();
      recentTracks = recentData.items.map(item => ({
        name: item.track.name,
        artists: item.track.artists.map(artist => artist.name).join(', '),
        album: item.track.album.name,
        image: item.track.album.images[0]?.url || '',
        url: item.track.external_urls.spotify,
        playedAt: item.played_at,
      }));
    }

    return NextResponse.json({
      currentTrack,
      recentTracks,
    });
  } catch (error) {
    console.error('Spotify API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Spotify data' },
      { status: 500 }
    );
  }
}
