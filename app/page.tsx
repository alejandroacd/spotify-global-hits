import { getTopTracks, getToken } from "@/lib/spotify";
import { CarouselSongs } from "@/components/songs-carousel";
import Image from "next/image";
export default async function Home() {
  const token: string = await getToken();
  const tracks: any = await getTopTracks(token);
  return (
    <main className="text-white">
      {tracks && <CarouselSongs tracks={tracks} />}
    </main>
  );
}



