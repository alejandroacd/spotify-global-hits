import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState, useEffect } from "react";
import { Heart } from "lucide-react"
import { likeAction } from "@/components/song-card/utils";
import { useAuth } from "@/context/AuthContext";

interface LikeButtonProps {
    trackId: string;
    likedStatus: Record<string, boolean>;
    initialLiked?: boolean;
}
export const LikeButton = ({ trackId, likedStatus, initialLiked }: LikeButtonProps) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [optimisticLiked, setOptimisticLiked] = useState<boolean | null>(null);
    const isLiked = optimisticLiked !== null ? optimisticLiked : likedStatus[trackId] ?? initialLiked;
    const { user } = useAuth();

    useEffect(() => {
        if (likedStatus[trackId] !== undefined) {
            setOptimisticLiked(null);
        }
    }, [likedStatus, trackId]);

    const handleLikeClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isProcessing) return;

        const newLikedState = !isLiked;
        setOptimisticLiked(newLikedState);

        // If already authenticated, perform the action immediately
        try {
            await likeAction(user?.accessToken, trackId, newLikedState, setIsProcessing);
        } catch (error) {
            setOptimisticLiked(isLiked);
            console.error('Failed to like track:', error);
        }
    };

    return (
        <TooltipProvider>
    <Tooltip>
        <TooltipTrigger>
            <div
                role="button"
                onClick={handleLikeClick}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleLikeClick(e as unknown as React.MouseEvent);
                    }
                }}
                tabIndex={0}  // Hace que el div sea focoable
                aria-label={isLiked ? 'Unlike song' : 'Like song'}
                className={`${isLiked ? 'text-[#4ade80]' : 'text-white'} rounded-full px-2 py-2 hover:bg-black hover:text-[#4ade80] transition-all duration-250 ease`}
            >
                <Heart fill={isLiked ? '#4ade80' : 'none'} size={20} />
            </div>
        </TooltipTrigger>
        <TooltipContent>
            <p>{isLiked ? 'Unlike' : 'Like'}</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>


    )
}


