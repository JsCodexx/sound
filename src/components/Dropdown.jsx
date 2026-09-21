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
import { EllipsisVertical } from 'lucide-react';
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";

export function DropdownMenuShortcuts({ variant }) {
  const navigate = useNavigate()

  function goToLogin() {
    navigate("/login")
  }
  return (
    <>
      {variant === "mobi" ?
        <>
          <DropdownMenu classname="bg-black mt-10">
            <DropdownMenuTrigger render={<EllipsisVertical className="md:hidden block" />} />
            <DropdownMenuContent className="">
              <div className='flex '>
                <div className='flex flex-col gap-5 md:gap-10 mt-0 ml-5  md:ml-15'>

                  <div>

                    <NavLink to="/sound" onClick={() => setCurrent("Browse")}>
                      {({ isActive }) => (

                        <h1 className={`text-black cursor-pointer md:pr-0 pr-1 ${isActive ? 'font-bold' : ''}`} >
                          Browse
                        </h1>


                      )}
                    </NavLink>

                    <NavLink to="/Charts" onClick={() => setCurrent("Charts")}>
                      {({ isActive }) => (
                        <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                          Charts
                        </h1>
                      )}
                    </NavLink>
                  </div>
                  <div c>
                    <h1 className='text-black '>Library</h1>
                    <NavLink to="/Sound2" onClick={() => setCurrent("Sound")}>
                      {({ isActive }) => (
                        <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                          Sound
                        </h1>
                      )}
                    </NavLink>
                  </div>
                </div>
                <div>
                  
                </div>
              </div>


            </DropdownMenuContent>
          </DropdownMenu>
        </> :
        <>
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

        </>
      }

    </>
  )
}
