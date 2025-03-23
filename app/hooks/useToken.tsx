'use client'
import { useEffect, useState } from 'react';
export const useSpotifyToken = () => {
    const [token, setToken] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getToken = async () => {
            setLoading(true);
            try {
                // Replace with your Spotify API credentials
                const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
                const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

                // Encode client ID and secret for Basic Auth
                const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

                // Request a token using the Client Credentials flow
                const response = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: `Basic ${authHeader}`,
                    },
                    body: 'grant_type=client_credentials',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch Spotify token');
                }

                const data = await response.json();
                setToken(data.access_token);
            } catch (err) {
                setError('Failed to fetch Spotify token');
                console.error(err);
            }
            finally {
                setLoading(false);
            }
        };

        getToken();
    }, []);

    return { token, error, loading };
};

