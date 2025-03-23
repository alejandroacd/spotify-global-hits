
'use client'
import { getTopTracks } from "../services/index"
import { useQuery } from "@tanstack/react-query"
export const useTopTracks = (token: string | null) => {
    return useQuery({
      queryKey: ['topTracks', token],
      queryFn: () => getTopTracks(token!), // Fetch function
      enabled: !!token, // Only run the query if the token is available
    });
  };