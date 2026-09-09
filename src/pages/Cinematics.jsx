import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import SideBar from '@/components/SideBar'
import { CarouselSize } from '@/components/Carousel'
export default function Cinematics() {
    return (
        <div className='overflow-x-hidden'>
            <NavBar />
            <div className='mt-5'>
                <SideBar variant="mobileSide" className="md:hidden block" />
            </div>
            <main className="mx-auto w-full max-w-360   ">
                <div className='flex  mt-5 gap-0 w-100% overflow-x-hidden'>

                    <div className='mt-10'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>
                    <div className=' w-full'>
                        <h1 className=' text-red-400 mb-5 text-sm  font-bold text-center'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />

                        <div className=' w-full h-90 relative lg:block hidden ' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-[5%]  left-[2%] w-[93%]' />
                            <img src="/src/assets/f1.png" alt="" className='absolute top-[5%] left-[53%] w-[43%]' />
                        </div>

                        <div className='flex w-full  flex-col text-[#5C5C5C] gap-5 '>
                            <div className='flex ml-8  gap-6 cursor-pointer '>
                                <TabsLine />

                            </div>
                            <hr className='' />
                            <div className='lg:w-205 md:w-150 '>
                                <div className='flex flex-col px-3  '>
                                    <div className='flex flex-col justify-center ml-5 items-center my-2'>
                                        <h1 className=' py-1 text-[#404041] md:text-2xl font-bold'>All Around the Globe</h1>
                                        <p className=' md:text-center text-[#909090] font-semibold  md:w-full text-sm  py-0'>
                                            Take a journey through the Middle East, Caribbean, Taiwan, Europe, Africa, and all places in between as these packs explore ancient instruments and modern techniques from the four corners of the earth.
                                        </p>
                                    </div>
                                    <div className='ml-5  '>
                                        <CarouselSize variant="crouse" />
                                    </div>
                                    <div><p className='text-center cursor-pointer mt-10 text-red-500 font-semibold'>See All </p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    )
}
