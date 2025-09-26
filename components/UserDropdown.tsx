"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import NavItems from "@/components/NavItems"
// import {signOut} from "@/lib/actions/auth.actions";

const UserDropdown = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    // await signOut();
    router.push("/sign-in")
  }

  const user = {
    name: "Aman",
    email: "aman@gmail.com"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="ghost" className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/assets/images/avatar.jpeg" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-neutral-400">{user.name}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="text-neutral-400 bg-neutral-900">
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/assets/images/avatar.jpeg" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-neutral-400">{user.name}</span>
              <span className="text-sm text-neutral-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-600" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-neutral-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2 hidden sm:block text-neutral-500" />
          <span className="text-neutral-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserDropdown
