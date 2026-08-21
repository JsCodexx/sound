"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import {
    CircleAlertIcon,
    CircleCheckIcon,
    CircleDashedIcon,
} from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export function NavigationMenuDemo({ variant }) {
    return (
        <NavigationMenu >
            <NavigationMenuList className="  mt-3 ml-5">
                <div className="flex gap-55">

                    <div className="flex gap-3">
                        {variant === "present" ?
                            <div className="flex gap-117">
                                <div className="flex gap-4">
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="border-1 border-[#868e9648] rounded-2xl text-[#868E96]">Instruments</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="hidden md:flex">
                                        <NavigationMenuTrigger className="border-1 border-[#868e9648] rounded-2xl text-[#868E96]">Generes</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </div>
                                <div className="flex gap-4">
                                    <NavigationMenuItem>
                                        <div className="border-1 cursor-pointer px-3 py-2 border-[#868e9648] rounded-2xl text-[#868E96]"><img src="/src/assets/shuffle.png" alt="" /></div>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <div className="border-1 cursor-pointer border-[#868e9648] rounded-2xl text-[#868E96] flex gap-1 px-3 py-1">

                                            <h1 className="pt-1">Most Recent</h1>
                                            <img src="/src/assets/r.png" alt="" />
                                        </div>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </div>
                            </div>
                            :
                            <div className="flex gap-55">
                                <div className="flex gap-4">
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="border-1 border-[#868e9648] rounded-2xl text-[#868E96]">Instruments</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="hidden md:flex">
                                        <NavigationMenuTrigger className="border-1 border-[#868e9648] rounded-2xl text-[#868E96]">Generes</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="border-1 border-[#868e9648] rounded-2xl text-[#868E96]">Key</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="border-1 border-[#868e9648] rounded-2xl text-[#868E96]">BPM</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="border-1 border-[#868e9648] rounded-2xl text-[#868E96]">Type</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </div>
                                <div className="flex gap-4">
                                    <NavigationMenuItem>
                                        <div className="border-1 cursor-pointer px-3 py-2 border-[#868e9648] rounded-2xl text-[#868E96]"><img src="/src/assets/shuffle.png" alt="" /></div>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <div className="border-1 cursor-pointer border-[#868e9648] rounded-2xl text-[#868E96] flex gap-1 px-3 py-1">

                                            <h1 className="pt-1">Most Recent</h1>
                                            <img src="/src/assets/r.png" alt="" />
                                        </div>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[200px]">
                                                <li>
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                                                    <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </div>
                            </div>

                        }

                    </div>

                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}


