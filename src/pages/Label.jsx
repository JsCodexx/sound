import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { CardDemo } from '@/components/Card-2'
import SideBar from '@/components/SideBar'
export default function Label() {
    const cardData = [
        {
            src: "/src/assets/c1.png",
            title: "Art House",
            packs: "956 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c1.png",
            title: "Audio Lab",
            packs: "56 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c2.png",
            title: "Power Tone",
            packs: "256 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c3.png",
            title: "Art house",
            packs: "56 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c1.png",
            title: "Power Tone",
            packs: "956 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c2.png",
            title: "Art House",
            packs: "96 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c1.png",
            title: "Art Waleed",
            packs: "9 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c3.png",
            title: "Art House",
            packs: "956 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c1.png",
            title: "Art House",
            packs: "956 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c3.png",
            title: "Art House",
            packs: "96 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c1.png",
            title: "Art House",
            packs: "956 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
        {
            src: "/src/assets/c2.png",
            title: "Art House",
            packs: "956 Packs",
            tags: ["Edm", "Vocals", "Future "]
        },
    ]

    return (
        <div>
            <NavBar />
            <main className="mx-auto w-full max-w-[1440px]  relative">
                <div className='flex  mt-5 gap-0  w-100% overflow-x-hidden'>
                    <div className='mt-18'>
                        <SideBar variant="mobileSide" className="md:hidden block" />
                    </div>
                    <div className='mt-11'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>


                    <div className=' w-full'>
                        <h1 className=' text-red-400  md:font-bold text-center mb-0'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <div className=' w-full h-90 relative md:block hidden' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-5 left-10 md:w-250' />
                            <img src="/src/assets/f1.png" alt="" className='absolute top-5 left-145 md:w-115' />
                        </div>
                        <div className='flex flex-col text-[#5C5C5C] gap-5 md:ml-8 '>
                            <div className='flex gap-6 cursor-pointer '>
                                <TabsLine />
                            </div>
                            <hr className='md:w-230 w-0' />
                            <div className='flex flex-wrap gap-2 md:ml-8 px-auto '>
                                {cardData.map((data, index) => (
                                    <CardDemo
                                        key={index}
                                        src={data.src}
                                        title={data.title}
                                        packs={data.packs}
                                        tags={data.tags}
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
