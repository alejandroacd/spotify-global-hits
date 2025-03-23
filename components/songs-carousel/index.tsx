import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SongCard } from "../song-card";
import { Track } from "@/types/index";
export function CarouselSongs ({tracks}: {tracks: Track[]})  {
    return (
      <section className="p-3 w-4/5 flex items-center justify-center min-h-[80vh] mx-auto">
        <Carousel opts={{
            align: "center",
          }}
            className="w-full">
            <CarouselContent>
              {tracks?.map((track: Track, index: number) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3  gap-3 flex justify-center flex-col items-center" >
                  <SongCard
                    image={track?.track?.album?.images[0]?.url}
                    songName={track?.track?.name}
                    artistName={track?.track?.artists?.[0]?.name}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-black"/>
            <CarouselNext className="text-black"/>
          </Carousel>
      </section>
    )
}