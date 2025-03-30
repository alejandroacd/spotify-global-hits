// hooks/useSpotifyLikes.ts
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { checkSavedTracks } from '@/lib/spotify';
import { useAuth } from '@/context/AuthContext';

export const useSpotifyLikes = (trackIds?: string[]) => {
    const { data: session } = useSession();
    const [likedStatus, setLikedStatus] = useState<Record<string, boolean>>({});
    const memoizedTrackIds = useMemo(() => trackIds?.slice(0, 10) || [], [trackIds]);

    // Fetch initial liked status for multiple tracks
    const fetchLikedStatus = useCallback(async (ids: string[]) => {
        if (!session?.accessToken || !ids.length) return;

        try {
            const results = await checkSavedTracks(session.accessToken, ids);
            const newStatus = ids.reduce((acc, id, index) => {
                acc[id] = results[index];
                return acc;
            }, {} as Record<string, boolean>);

            setLikedStatus(prev => ({ ...prev, ...newStatus }));
        } catch (error) {
            console.error('Error fetching liked status:', error);
        }
    }, [session?.accessToken]);

    // Initialize liked status when trackIds or session changes
    useEffect(() => {

        if (trackIds?.length) {
            fetchLikedStatus(memoizedTrackIds);
        }
    }, [JSON.stringify(memoizedTrackIds), fetchLikedStatus]);

    return {
        likedStatus,
        fetchLikedStatus,
        isAuthenticated: !!session
    };
};