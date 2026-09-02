import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import SideBar from '@/components/SideBar'
import { CarouselSize } from '@/components/Carousel'
export default function Cinematics() {
    return (
        <div className='overflow-x-hidden'>
            <NavBar />
            <main className="mx-auto w-full max-w-[1440px]  md:px-8 relative">
                <div className='flex md:ml-8 ml-4 md:mt-5 mt-3 gap-5  w-100% overflow-x-hidden'>
                    <SideBar />

                    <div className=' w-full'>
                        <h1 className=' text-red-400 text-sm  font-bold md:ml-60 mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <img src="src/assets/line.png" alt="" className='md:h-270 h-170 md:ml-15' />

                    </div>


                </div>
                <div className='' >
                    <img src="/src/assets/image86.png" alt="" className='hidden md:block absolute top-25 left-60 w-220' />
                    <img src="/src/assets/f1.png" alt="" className='hidden md:block absolute top-25 left-178 w-103' />
                </div>
                <div className='flex flex-col text-[#5C5C5C] gap-5 absolute md:top-120 md:left-70 left-25 top-15 md:top-30'>
                    <div className='flex  gap-0 cursor-pointer mb-5'>
                        <TabsLine />

                    </div>
                    <hr className='md:w-220 w-75' />
                    <div className='md:text-center pr-55'>
                        <h1 className='text-2xl font-bold ml-5 md:ml-0 text-black py-2'>All Around the Globe</h1>
                        <p className='text-[#838383] w-75 ml-4 md:ml-0  md:w-full md:px-50'>Take a journey through the Middle East, Caribbean, Taiwan, Europe, Africa, and all places in between as these packs
                        </p>

                    </div>
                    <div className=' ml-20'>
                        <div className='mt-8 flex  gap-4  '>
                            <CarouselSize variant="crouse" />

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
