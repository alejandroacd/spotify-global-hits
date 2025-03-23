export const getTopTracks = async (token: string) => {
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
      return data.tracks.items;
}
