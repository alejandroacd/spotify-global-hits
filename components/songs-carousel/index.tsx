'use client'
import { useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import  SongCard  from "../song-card";
import { Track } from "@/types/index";
import { useSpotifyLikes } from "@/hooks/useSpotifyLikes";
export function CarouselSongs({ tracks }: { tracks: Track[] }) {
  const trackIds = useMemo(() => tracks.map(track => track?.track?.id), [tracks]);
  const { likedStatus } = useSpotifyLikes(trackIds);
  return (
    <section className="w-5/6 p-6 md:p-0 flex items-center justify-center min-h-[80vh]  mx-auto">
      <Carousel
        opts={{
          align: "center"
       }}
        className="w-full"
      >
        <CarouselContent className="lg:p-6">
          {tracks?.map((track: Track, index: number) => (
            <CarouselItem
              key={index}
              className="md:basis-3/5 lg:basis-1/3 flex justify-center flex-col items-center">
              <SongCard
                image={track?.track?.album?.images[0]?.url}
                songName={track?.track?.name}
                artistName={track?.track?.artists?.[0]?.name}
                albumName={track?.track?.album?.name}
                link={track?.track?.external_urls?.spotify}
                songDuration={track?.track?.duration_ms}
                trackId={track?.track?.id}
                likedStatus={likedStatus}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-[#4ade80] border-transparent bg-zinc-800/90" />
        <CarouselNext className="text-[#4ade80] border-transparent bg-zinc-800/90" />
      </Carousel>


    </section>
  );
}