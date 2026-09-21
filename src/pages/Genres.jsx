import React from 'react'
import { TabsLine } from '@/components/Menu'
import NavBar from '@/components/NavHome'
import { CardSmall } from '@/components/Card'
import SideBar from '@/components/SideBar'
export default function Genres() {
    const genres = [
        "pop",
        "EDM",
        "Trance",
        "Psytrance",
        "Future House",
        "Fidget House",
        "Tropical House",
    ];
    return (
        <div>
            <div >
                <NavBar />
                <main className="mx-auto w-full max-w-[1440px]  md:px-8 relative">
                    <div className='flex md:ml-8 ml-5 mt-5 gap-5 flex-row   w-100% overflow-x-hidden'>
                        <SideBar />

                        <div className=' w-full'>
                            <h1 className=' text-red-400  font-bold md:ml-60 mb-5'>You are currently viewing company sounds</h1>
                            <hr className='w-1050 absolute  right-0 ' />
                            <img src="src/assets/line.png" alt="" className='md:h-320 h-600  md:ml-15' />

                        </div>


                    </div>
                    <div className='hidden md:block' >
                        <img src="/src/assets/image86.png" alt="" className='absolute top-25 left-60 w-220' />
                        <img src="/src/assets/f1.png" alt="" className='absolute top-25 left-178 w-103' />
                    </div>
                    <div className='flex flex-col text-[#5C5C5C] gap-5 absolute top-20 left-25 md:top-120 md:left-70'>
                        <div className='flex gap-6 cursor-pointer '>
                            <TabsLine />

                        </div>
                        <hr className='md:w-230 w-75 mt-5' />

                        <div className=' '>


                            <CardSmall variant="genres" description={genres} />
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}
