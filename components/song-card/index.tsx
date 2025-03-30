import { Card } from "@/components/ui/card"
import CardImage from "./components/card-image";
import { SongName } from "./components/card-header";
import CardInfoItems from "./components/card-info-items";
import CardButtonsLayout from "./components/card-buttons-layout";
import CardContentLayout from "./components/card-content-layout";

interface SongCardProps {
  image: string
  songName: string
  artistName: string
  albumName: string
  link: string
  songDuration: number,
  trackId: string,
  initialLiked?: boolean
  likedStatus: Record<string, boolean>
}

export default  function SongCard  ({
  image,
  songName,
  artistName,
  link,
  albumName,
  songDuration,
  trackId,
  initialLiked = false,
  likedStatus
}: SongCardProps) {

  return (
    <Card className="hover:translate-y-[-10px] z-20 cursor-pointer transition-all duration-250 hover:border-[#4ade80] ease rounded-xl shadow-lg pb-6 gap-0 h-[520px] border-transparent bg-zinc-800/70 md:w-[350px] py-0 md:min-h-[590px] md:h-[590px]">
      <CardImage image={image} />
      <CardContentLayout>
        <SongName songName={songName} />
        <CardInfoItems artistName={artistName} albumName={albumName} duration={songDuration} />
        <CardButtonsLayout
          link={link}
          likedStatus={likedStatus}
          trackId={trackId}
          initialLiked={initialLiked}
        />
      </CardContentLayout>
    </Card>
  );
};