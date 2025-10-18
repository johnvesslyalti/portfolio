'use client';

import { useState } from 'react';
import { FaSpotify } from 'react-icons/fa';

export default function SpotifyAuth() {
  const [clientId, setClientId] = useState('');
  const [redirectUri] = useState('https://johnvesslyalti.vercel.app/callback');

  const handleAuth = () => {
    if (!clientId) {
      alert('Please enter your Client ID');
      return;
    }

    const scope = 'user-read-currently-playing user-read-recently-played';
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-lg">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaSpotify className="text-green-500 text-3xl" />
              <h1 className="text-2xl font-bold">Get Fresh Spotify Token</h1>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              Authorization codes expire after 10 minutes. Get a fresh one here.
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Client ID</label>
              <input
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                placeholder="Your Spotify Client ID"
              />
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important:</h3>
              <ul className="text-sm space-y-1 text-yellow-700 dark:text-yellow-300">
                <li>• Make sure your Spotify app has this redirect URI: <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">{redirectUri}</code></li>
                <li>• You'll be redirected to Spotify to authorize</li>
                <li>• After authorization, you'll get a fresh authorization code</li>
              </ul>
            </div>

            <button
              onClick={handleAuth}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get Fresh Authorization Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
