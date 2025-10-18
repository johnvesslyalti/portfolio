'use client';

import { useState } from 'react';
import { FaSpotify } from 'react-icons/fa';

export default function SpotifySetup() {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [redirectUri, setRedirectUri] = useState('https://johnvesslyalti.vercel.app/callback');
  const [isLoading] = useState(false);

  const handleGetTokens = () => {
    if (!clientId || !clientSecret) {
      alert('Please enter your Client ID and Client Secret');
      return;
    }

    // Store credentials temporarily in localStorage for the callback
    localStorage.setItem('spotify_client_id', clientId);
    localStorage.setItem('spotify_client_secret', clientSecret);
    localStorage.setItem('spotify_redirect_uri', redirectUri);

    // Redirect to Spotify authorization
    const scope = 'user-read-currently-playing user-read-recently-played';
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <FaSpotify className="text-green-500 text-2xl" />
            <h1 className="text-2xl font-bold">Spotify API Setup</h1>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Step 1: Get Spotify Credentials</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Go to <a href="https://developer.spotify.com/dashboard" target="_blank" className="text-green-500 hover:underline">Spotify Developer Dashboard</a></li>
                <li>Click &quot;Create an App&quot;</li>
                <li>Fill in app name and description</li>
                <li>Copy your <strong>Client ID</strong> and <strong>Client Secret</strong></li>
              </ol>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Step 2: Enter Your Credentials</h2>
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
                <div>
                  <label className="block text-sm font-medium mb-2">Client Secret</label>
                  <input
                    type="password"
                    value={clientSecret}
                    onChange={(e) => setClientSecret(e.target.value)}
                    className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                    placeholder="Your Spotify Client Secret"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Redirect URI</label>
                  <input
                    type="text"
                    value={redirectUri}
                    onChange={(e) => setRedirectUri(e.target.value)}
                    className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                    placeholder="http://localhost:3000/spotify-setup/callback"
                  />
                  <p className="text-xs text-neutral-500 mt-1">
                    Make sure this URI is added to your Spotify app settings. Spotify requires HTTPS for production.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Step 3: Get Your Tokens</h2>
              <button
                onClick={handleGetTokens}
                disabled={isLoading}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-neutral-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {isLoading ? 'Redirecting...' : 'Get Spotify Tokens'}
              </button>
            </div>

            <div className="bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Important:</h3>
              <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                <li>• Make sure to add the redirect URI to your Spotify app settings</li>
                <li>• You&apos;ll be redirected to Spotify to authorize the app</li>
                <li>• After authorization, you&apos;ll get your refresh token</li>
                <li>• Keep your Client Secret secure and never share it publicly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
