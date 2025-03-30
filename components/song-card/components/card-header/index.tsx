import { CardHeader, CardTitle } from "@/components/ui/card"
export const SongName = ({ songName }: { songName: string }) => {
    return <CardHeader className="p-0 my-3">
    <CardTitle className="text-white text-lg truncate">{songName}</CardTitle>
  </CardHeader>
}