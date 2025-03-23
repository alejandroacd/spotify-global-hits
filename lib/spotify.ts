import { Track } from "@/types/index";
export const getToken = async () => {
        const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

        if (!clientId || !clientSecret) {
            throw new Error('Spotify client ID or secret is missing.');
          }
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
        return data.access_token as string;
    }


export const getTopTracks = async (token: string | Promise<string>) => {
    const response = await fetch(
        'https://api.spotify.com/v1/playlists/008G1BbvK1NQvbAV8MHvDz', 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    
      if (!response.ok) {
        throw new Error('Failed to fetch top tracks');
      }
    
      const data = await response.json();
      return data.tracks.items as Track[];
}
