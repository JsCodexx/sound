import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import SideBar from '@/components/SideBar'
import { CarouselSize } from '@/components/Carousel'
export default function Cinematics() {
    return (
        <div className='overflow-x-hidden'>
            <NavBar />
            <main className="mx-auto w-full max-w-[1440px]   ">
                <div className='flex  mt-5 gap-0 w-100% overflow-x-hidden'>
                    <div className='mt-12'>
                        <SideBar variant="mobileSide" className="md:hidden block" />
                    </div>
                    <div className='mt-10'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>
                    <div className=' w-full'>
                        <h1 className=' text-red-400 text-sm  font-bold md:ml-60 mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />

                        <div className=' w-full h-90 relative md:block hidden' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-5 left-10 md:w-250' />
                            <img src="/src/assets/f1.png" alt="" className='absolute top-5 left-145 md:w-115' />
                        </div>

                        <div className='flex flex-col text-[#5C5C5C] gap-5 md:ml-8'>
                            <div className='flex  gap-6 cursor-pointer '>
                                <TabsLine />

                            </div>
                            <hr className='md:w-220 w-0' />
                            <div className='md:text-center pr-55'>
                                <h1 className='md:text-2xl w-full font-bold ml-5 md:ml-0 text-black py-2'>All Around the Globe</h1>
                                <p className='text-[#838383] w-50 ml-4 md:ml-0  md:w-full md:px-50'>Take a journey through the Middle East, Caribbean, Taiwan, Europe, Africa, and all places in between as these packs
                                </p>

                            </div>
                            <div className=' md:ml-20'>
                                <div className='mt-8 flex  gap-4  '>
                                    <CarouselSize variant="crouse" />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    )
}
