import LinkButton from "./link-button"
import { LikeButton } from "./like-button"
import { useAuth } from "@/context/AuthContext"
interface CardButtonProps {
    link: string
    likedStatus: Record<string, boolean>
    trackId: string
    initialLiked?: boolean
}
export default function CardButtonsLayout({ link,  likedStatus, trackId, initialLiked }: CardButtonProps) {
    const { user } = useAuth();
    return (
        <section className="absolute bottom-5 right-5 cursor-pointer flex flex-row gap-1">
            <LinkButton link={link} />
            {user?.name && <LikeButton trackId={trackId} likedStatus={likedStatus} initialLiked={initialLiked} />}
        </section>
    )
}