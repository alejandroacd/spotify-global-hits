import { toast } from "sonner";
import { CircleCheck, BadgeX } from "lucide-react";
import { toggleSaveTrack } from "@/lib/spotify";
const showSuccessToast = (shouldLike: boolean) => {
    toast(
        <div className="flex items-center gap-2">
          {shouldLike ? (
            <CircleCheck className="h-5 w-5 text-[#4ade80]" />
          ) : (
            <BadgeX className="h-5 w-5 text-[#4ade80]" />
          )}
          <span>{shouldLike ? 'Liked' : 'Removed'}</span>
        </div>,
        {
          unstyled: true,
          description: shouldLike 
            ? 'Added to your liked songs.' 
            : 'Removed from your liked songs.',
          classNames: {
            toast: 'bg-zinc-900 w-[350px] text-sm text-[#4ade80] border-zinc-900 p-4 rounded-md shadow-lg',
            description: 'my-2',
          },
        }
      );
}

export const likeAction = async (accessToken: string, trackId: string, shouldLike: boolean, setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (!accessToken) {
      throw new Error('No access token available');
    }
    setIsProcessing(true);
    try {
      const success = await toggleSaveTrack(
        accessToken,
        trackId,
        !shouldLike // We pass the inverse because the API expects "shouldRemove"
      );

      if (!success) {
        throw new Error('Failed to update like status');
      }

      // Show success toast
     showSuccessToast(shouldLike);

      return success;
    } catch (error) {
      throw error;
    }
    finally {
      setIsProcessing(false);
    }
  };