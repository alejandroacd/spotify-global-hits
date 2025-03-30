import Link from "next/link"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { ExternalLink } from "lucide-react"
export default function LinkButton({ link }: { link: string }) {
    return <TooltipProvider>
        <Tooltip >
            <TooltipTrigger aria-label="Link song" className="hover:text-[#4ade80] text-white transition-all duration-250 ease rounded-full flex items-center justify-center px-2 py-2 hover:bg-black">
                 <Link
                href={link}
                target="_blank"
            >
                <ExternalLink size={20} />
            </Link>
            </TooltipTrigger>
            <TooltipContent>
                <p>Go to song page</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>

}

