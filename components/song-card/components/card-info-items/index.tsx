import { Disc3, Timer, User } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import { formatSongDuration } from "@/lib/utils"
import CardInfoItem from "./CardInfoItem"
export default function CardInfoItems ({artistName, albumName, duration}:
     {artistName: string, albumName: string, duration: number}) {
    return   <CardContent className="p-0 flex flex-col gap-3">
        <CardInfoItem icon={<User size={16} color="#4ade80" />} value={artistName} />
        <CardInfoItem icon={<Disc3 size={16} color="#4ade80" />} value={albumName} />
        <CardInfoItem icon={<Timer size={16} color="#4ade80" />} value={formatSongDuration(duration)} />
  </CardContent>
}