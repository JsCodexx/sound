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
            <div className='mt-5'>
                <SideBar variant="mobileSide" className="md:hidden block" />
            </div>
            <main className="mx-auto w-full max-w-360  ">
                <div className='flex   mt-5 gap-0  w-100% overflow-x-hidden'>

                    <div className='mt-11'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>

                    <div className=' w-full'>
                        <h1 className=' text-red-400  md:font-bold text-center mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <div className=' w-full h-90 relative lg:block hidden ' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-[5%]  left-[2%] w-[93%]' />
                            <img src="/src/assets/f1.png" alt="" className='absolute top-[5%] left-[53%] w-[43%]' />
                        </div>
                        <div className='flex  flex-col text-[#5C5C5C] gap-5 md:ml-8 '>
                            <div className='flex gap-6 cursor-pointer mb-0'>
                                <TabsLine />
                            </div>
                            <hr className='mx-2' />
                            <div className='flex font-semibold flex-wrap gap-2 lg:ml-2 lg:justify-start  justify-center item-center '>
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
