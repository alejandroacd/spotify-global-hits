"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronUp, LogOut } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

export default function UserBadge() {
  const { user, logout, login } = useAuth();

  return (
    <div className="flex flex-col items-center  justify-center gap-1">
      <div onClick={user?.name ? () => { } : () => login()} className="inline-flex items-center cursor-pointer rounded-full">
        <DropdownMenu>
          <DropdownMenuTrigger aria-label="User menu 1" className="cursor-pointer" asChild >
            <button aria-label="User menu" className="flex items-center bg-zinc-800/85 gap-2 px-3 py-1.5 rounded-full bg-zinc-800  transition-colors">
              <Avatar className="h-6 w-6 ">
                <AvatarImage src={user?.image ? user?.image : "/spotifylogo.svg"} alt={"ad"} />
                <AvatarFallback className="text-xs"></AvatarFallback>
              </Avatar>
              <span className="text-white text-sm font-medium">{user?.name ? user?.name : "Connect your Spotify account"}</span>
              {user?.name && <ChevronUp className="ml-2 h-4 w-4" color="#4ade80" />}
            </button>
          </DropdownMenuTrigger>
          {user?.name && <DropdownMenuContent className="text-white w-59 bg-zinc-800 hover:bg-zinc-900" align="end">
            <DropdownMenuItem aria-label="Logout" onClick={() => logout()} className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4 text-white" color="#4ade80" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>}
        </DropdownMenu>
      </div>
      {!user && <p className="text-xs text-muted-foreground">Connect to like your favorite songs</p>}
    </div>

  )
}

