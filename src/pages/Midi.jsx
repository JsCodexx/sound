import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { CardDemo } from '@/components/Card-2'
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
            <div className='flex ml-35 mt-5 gap-5 relative w-auto'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-black font-extrabold '>Sounds</h1>
                    <div>
                        <h1 className='text-black font-bold '>Browse</h1>
                        <h1 className='text-black '>Charts</h1>
                    </div>
                    <div>
                        <h1 className='text-black '>Your Library</h1>
                        <h1 className='text-black '>Sounds</h1>
                    </div>
                </div>
                <img src="src/assets/line.png" alt="" className='h-230' />
                <h1 className=' text-red-400  font-bold ml-60'>You are currently viewing company sounds</h1>

            </div>
            <div className='' >
                <img src="/src/assets/image86.png" alt="" className='absolute top-35 left-70 w-230' />
                <img src="/src/assets/f1.png" alt="" className='absolute top-35 left-190 w-110' />
            </div>
            <div className='flex flex-col text-[#5C5C5C] gap-5 absolute top-120 left-70'>
                <div className='flex gap-6 cursor-pointer '>
                    <TabsLine />
                </div>
                <hr className='w-230' />
                <h1 className='text-xl font-bold text-black'>Packs with MIDI Basslines</h1>
                <div className='flex flex-wrap gap-2 '>
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
    )
}
