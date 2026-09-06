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
            <main className="mx-auto w-full max-w-[1440px]  ">
                <div className='flex  mt-5 gap-0  w-100% overflow-x-hidden'>
                    <div className='mt-18'>
                        <SideBar variant="mobileSide" className="md:hidden block" />
                    </div>
                    <div className='mt-11'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>


                    <div className=' w-full'>
                        <h1 className=' text-red-400  font-bold md:ml-60 mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <div className=' w-full h-90 relative md:block hidden' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-5 left-10 md:w-250' />
                            <img src="/src/assets/f1.png" alt="" className='absolute top-5 left-145 md:w-115' />
                        </div>
                        <div className='flex flex-col text-[#5C5C5C] gap-5 md:ml-8'>
                            <div className='flex gap-6 cursor-pointer '>
                                <TabsLine />
                            </div>
                            <hr className='md:w-230 w-0' />
                            <h1 className='text-xl font-bold text-black md:ml-8'>Packs with MIDI Basslines</h1>
                            <div className='flex  md:flex-row  flex-wrap gap-4 md:ml-8 '>
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
                    </div>


                </div>


            </main>
        </div>
    )
}
