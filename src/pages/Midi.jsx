import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { CardDemo } from '@/components/Card-2'
import SideBar from '@/components/SideBar'
export default function Midi() {
    const cardData = [
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l2.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l3.png",
            title: "Astral lounge  ",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l2.png",
            title: "Bradd web",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l3.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l3.png",
            title: "Bradd web",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l3.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l2.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
    ]
    return (
        <div>
            <NavBar />
            <main className="mx-auto w-full max-w-[1440px] md:px-8 relative">
                <div className='flex md:ml-8 ml-4 mt-5 gap-5  w-100% overflow-x-hidden'>
                    <SideBar />

                    <div className=' w-full'>
                        <h1 className=' text-red-400  font-bold md:ml-60 mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <img src="src/assets/line.png" alt="" className='md:h-300 h-1000  md:ml-15' />

                    </div>


                </div>
                <div className='md:block hidden' >
                    <img src="/src/assets/image86.png" alt="" className='absolute top-25 left-60 w-220' />
                    <img src="/src/assets/f1.png" alt="" className='absolute top-25 left-178 w-103' />
                </div>
                <div className='flex flex-col text-[#5C5C5C] gap-5 absolute md:top-120 top-20 left-25 md:left-70'>
                    <div className='flex gap-6 cursor-pointer '>
                        <TabsLine />
                    </div>
                    <hr className='md:w-230 w-75' />
                    <h1 className='text-xl font-bold text-black'>Packs with MIDI Basslines</h1>
                    <div className='flex flex-col md:flex-row ml-15 flex-wrap gap-2 '>
                        {cardData.map((data, index) => (
                            <CardDemo
                                key={index}
                                src={data.src}
                                title={data.title}
                                packs={data.packs}
                                tags={data.tags}
                                variant="Midi"
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
