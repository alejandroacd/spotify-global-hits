import { Track } from "@/types/index";
export const getToken = async () => {
        const clientId = process.env.SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

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

export const toggleSaveTrack = async (token: string, trackId: string, isCurrentlySaved: boolean) => {
  try {
    const method = isCurrentlySaved ? 'delete' : 'put';
    const response = await fetch(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`, {
      method,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.ok;
  } catch (error) {
    console.error('Error toggling track save:', error);
    throw new Error('Failed to toggle track save');
  }
};

export const checkSavedTracks = async (token: string, trackIds: string[]) => {
  try {
    const url = new URL('https://api.spotify.com/v1/me/tracks/contains');
    url.searchParams.append('ids', trackIds.slice(0, 50).join(',')); 

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json() as boolean[];
  } catch (error) {
    console.error('Error checking saved tracks:', error);
    throw new Error('Failed to check saved tracks');
  }
};
