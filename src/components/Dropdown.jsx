"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export function DropdownMenuShortcuts() {
  const navigate = useNavigate()

  function goToLogin() {
    navigate("/landingPage")
  }
  return (
    <DropdownMenu classname="bg-black mt-10">
      <DropdownMenuTrigger render={<img src="/src/assets/Ellipse 10.png" alt="" className=' cursor-pointer h-10 mt-0' />} />
      <DropdownMenuContent >
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            Profile
            
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
          
          </DropdownMenuItem>
          <Link to="/settings">
            <DropdownMenuItem>
              Settings
           
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <button onClick={goToLogin}>
          <DropdownMenuItem className="hover:bg-red-400" >
            Log out
           
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
