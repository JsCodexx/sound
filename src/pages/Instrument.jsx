import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { CardSmall } from '@/components/Card'
import SideBar from '@/components/SideBar'
export default function Instrument() {
    return (
        <div className="w-full overflow-x-hidden">
            <NavBar />

            <main className="mx-auto w-full max-w-360 ">
                <div className='flex  mt-5   w-100% overflow-x-hidden'>
                    <div className='mt-13'>
                        <SideBar variant="mobileSide" className="md:hidden block" />
                    </div>
                    <div className='mt-10'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>


                    <div className=' w-full'>
                        <h1 className=' text-red-400 text-sm  font-bold text-center mb-5'>You are currently viewing company sounds</h1>
                        <hr className='md:w-1050 w-full absolute  right-0  ' />

                        <div className=' w-full h-90 relative md:block hidden' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-5 left-10 md:w-250' />
                            <img src="/src/assets/f1.png" alt="" className='absolute top-5 left-145 md:w-115' />
                        </div>
                        <div className="flex flex-col  text-[#5C5C5C] ">
                            <div className="flex gap-6 cursor-pointer pb-0 md:ml-8">
                                <TabsLine />
                            </div>

                            <hr className="md:w-270 w-0 my-4 ml-4" />

                            <div className="flex gap-5 flex-wrap md:ml-8">
                                <CardSmall />
                                <CardSmall />
                                <CardSmall />
                                <CardSmall />
                                <CardSmall />
                                <CardSmall />
                                <CardSmall />
                                <CardSmall />
                                <CardSmall />
                                <CardSmall />
                            </div>
                        </div>
                    </div>


                </div>



            </main>
        </div>
    );
}
