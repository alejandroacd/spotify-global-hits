import { getTopTracks, getToken } from "@/lib/spotify";
import { CarouselSongs } from "@/components/songs-carousel";
import { Track } from "@/types/index";
export default async function Home() {
  const token: string = await getToken();
  const tracks: Track[] = await getTopTracks(token);
  return (
    <main className="text-white">
      {tracks && <CarouselSongs tracks={tracks} />}
    </main>
  );
}



