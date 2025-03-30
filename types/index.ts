// types.ts (or directly in your component file)
export interface Artist {
    name: string;
    // Add other artist properties if needed
  }
  
  export interface Album {
    images: { url: string }[];
    name: string;
    // Add other album properties if needed
  }
  
  export interface Track {
    track: {
        id: string;
        name: string;
        artists: Artist[];
        album: Album;
        external_urls: {
            spotify: string
        }
        duration_ms: number
      }
    // Add other track properties if needed
  }