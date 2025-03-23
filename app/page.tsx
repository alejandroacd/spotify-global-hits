import { getTopTracks, getToken } from "@/lib/spotify";
import { CarouselSongs } from "@/components/songs-carousel";
import Image from "next/image";
export default async function Home() {
  const token: string = await getToken();
  const tracks: any = await getTopTracks(token);
  return (
    <main className="min-h-screen  text-white">
     <header className="flex flex-row p-6  items-center justify-center md:p-6">
      <Image src="/spotifylogo.svg" loading="lazy" alt="logo" className="w-10 h-10 md:w-20 md:h-20" width={50} height={50} />
     <h1 className="text-3xl md:text-5xl  font-semibold tracking-tight gradient-text ">
      00's Global Hits
      </h1>
     </header>
      {tracks && <CarouselSongs tracks={tracks} />}
    </main>
  );
}



