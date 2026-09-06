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
                <main className="mx-auto w-full max-w-[1440px]   ">
                    <div className='flex  ml-0 mt-5 gap-0 flex-row   w-100% overflow-x-hidden'>
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
                            <div className='flex flex-col text-[#5C5C5C] gap-5 '>
                                <div className='flex gap-6 cursor-pointer md:ml-8'>
                                    <TabsLine />

                                </div>
                                <hr className='md:w-230 w-0' />

                                <div className=' md:ml-8 md:px-0 px-2'>


                                    <CardSmall variant="genres" description={genres} />
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>

        </div>
    )
}
