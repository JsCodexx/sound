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
                <div className='mt-5'>
                    <SideBar variant="mobileSide" className="md:hidden block" />
                </div>
                <main className="mx-auto w-full max-w-[1440px]   ">
                    <div className='flex  ml-0 mt-5 gap-0 flex-row   w-100% overflow-x-hidden'>

                        <div className='mt-11'>
                            <SideBar variant="desktop" className="md:block  hidden" />
                        </div>


                        <div className=' w-full'>
                            <h1 className=' text-red-400  md:font-bold text-center mb-5'>You are currently viewing company sounds</h1>
                            <hr className='w-1050 absolute  right-0 ' />
                            <div className=' w-full h-90 relative lg:block hidden ' >
                                <img src="/src/assets/image86.png" alt="" className='absolute top-[5%]  left-[2%] w-[93%]' />
                                <p className='absolute top-[50%] left-[10%] text-white font-bold text-4xl'>Vocal Future <span className='font-light'>Electronica</span> </p>
                                <img src="/src/assets/f1.png" alt="" className='absolute top-[5%] left-[53%] w-[43%]' />
                            </div>
                            <div className='flex flex-col text-[#5C5C5C] gap-5 '>
                                <div className='flex gap-6 cursor-pointer pb-4 md:ml-8'>
                                    <TabsLine />

                                </div>
                                <hr />

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
