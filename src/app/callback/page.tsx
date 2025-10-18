'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaSpotify, FaCopy } from 'react-icons/fa';

export default function Callback() {
  const [tokens, setTokens] = useState<{
    access_token: string;
    refresh_token: string;
    expires_in: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const error = urlParams.get('error');

      if (error) {
        setError(`Spotify authorization failed: ${error}`);
        setIsLoading(false);
        return;
      }

      if (!code) {
        setError('No authorization code received');
        setIsLoading(false);
        return;
      }

      // For now, we'll need the user to provide their credentials
      // In a real app, these would be stored securely on the server
      const clientId = prompt('Please enter your Spotify Client ID:');
      const clientSecret = prompt('Please enter your Spotify Client Secret:');
      const redirectUri = window.location.origin + '/callback';

      if (!clientId || !clientSecret) {
        setError('Missing credentials. Please try again.');
        setIsLoading(false);
        return;
      }

      try {
        // Exchange code for tokens
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri,
          }),
        });

        if (!response.ok) {
          const errorData = await response.text();
          throw new Error(`Failed to exchange code for tokens: ${errorData}`);
        }

        const data = await response.json();
        setTokens(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    handleCallback();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateEnvContent = () => {
    if (!tokens) return '';
    
    return `# Spotify API Configuration
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_REFRESH_TOKEN=${tokens.refresh_token}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Processing authorization...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-lg">
            <div className="text-center">
              <div className="text-red-500 text-4xl mb-4">❌</div>
              <h1 className="text-2xl font-bold text-red-600 mb-4">Authorization Failed</h1>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">{error}</p>
              <a
                href="/spotify-setup"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Try Again
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="text-green-500 text-4xl mb-4">✅</div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaSpotify className="text-green-500 text-2xl" />
              <h1 className="text-2xl font-bold">Success!</h1>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              Your Spotify tokens have been generated successfully
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Your Environment Variables</h2>
              <div className="bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg">
                <pre className="text-sm text-neutral-800 dark:text-neutral-200 whitespace-pre-wrap">
                  {generateEnvContent()}
                </pre>
                <button
                  onClick={() => copyToClipboard(generateEnvContent())}
                  className="mt-3 flex items-center gap-2 text-sm bg-neutral-200 dark:bg-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-500 px-3 py-1 rounded transition-colors"
                >
                  <FaCopy />
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Next Steps</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Create a <code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">.env.local</code> file in your project root</li>
                <li>Copy the environment variables above into the file</li>
                <li>Replace <code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">your_client_id_here</code> and <code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">your_client_secret_here</code> with your actual credentials</li>
                <li>Restart your development server</li>
                <li>Your Spotify widget should now work!</li>
              </ol>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Security Note:</h3>
              <p className="text-sm text-green-700 dark:text-green-300">
                Keep your Client Secret and Refresh Token secure. Never commit them to version control.
                The <code className="bg-green-100 dark:bg-green-800 px-1 rounded">.env.local</code> file should be in your <code className="bg-green-100 dark:bg-green-800 px-1 rounded">.gitignore</code>.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Go to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
