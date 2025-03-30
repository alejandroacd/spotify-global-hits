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
    }, [likedStatus[trackId], trackId]);

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
                <TooltipTrigger> <div
                    className={`${isLiked ? 'text-[#4ade80]' : 'text-white'} rounded-full px-2 py-2 hover:bg-black hover:text-[#4ade80] transition-all duration-250 ease`}
                    onClick={handleLikeClick}
                    aria-label={isLiked ? 'Unlike song' : 'Like song'}
                >
                    <Heart
                        fill={isLiked ? '#4ade80' : 'none'}
                        size={20}
                    />
                </div></TooltipTrigger>
                <TooltipContent>
                    <p>Add to your library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}


