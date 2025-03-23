import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
interface SongCardProps {
    image: string
    songName: string
    artistName: string
}
export const SongCard = ({image, songName, artistName}: SongCardProps) => {
    return (
        <Card className="rounded-md shadow-lg pb-6 gap-0 h-[450px] border-none   bg-zinc-800/70 md:w-[350px] py-0 md:min-h-[550px] md:h-[550px]">
         <Image src={image} alt="card" width={350} height={350}  className="object-fit mx-auto lg:w-full md:w-3/4 rounded-t-md object-center"/>
         <section className="px-3 ">
         <CardHeader className="p-0 my-3">
         <CardTitle>{songName}</CardTitle>
         </CardHeader>
         <CardContent className="p-0">
            <p>{artistName}</p>
         </CardContent>
         </section>
         </Card>
    )
}