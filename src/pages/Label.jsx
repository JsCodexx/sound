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
            <main className="mx-auto w-full max-w-[1440px] px-8 relative">
                <div className='flex ml-8 mt-5 gap-5  w-100% overflow-x-hidden'>
                    <SideBar />

                    <div className=' w-full'>
                        <h1 className=' text-red-400  font-bold ml-60 mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <img src="src/assets/line.png" alt="" className='h-1120 ml-15' />

                    </div>


                </div>
                <div className='' >
                    <img src="/src/assets/image86.png" alt="" className='absolute top-25 left-60 w-220' />
                    <img src="/src/assets/f1.png" alt="" className='absolute top-25 left-178 w-103' />
                </div>
                <div className='flex flex-col text-[#5C5C5C] gap-5 absolute top-120 left-70'>
                    <div className='flex gap-6 cursor-pointer '>
                        <TabsLine />
                    </div>
                    <hr className='w-230' />
                    <div className='flex flex-wrap gap-2 '>
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
            </main>
        </div>
    )
}
