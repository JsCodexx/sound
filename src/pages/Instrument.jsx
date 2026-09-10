import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { CardSmall } from '@/components/Card'
import SideBar from '@/components/SideBar'
export default function Instrument() {
    return (
        <div className="w-full overflow-x-hidden">
            <NavBar />
            <div className='mt-5'>
                <SideBar variant="mobileSide" className="md:hidden block" />
            </div>
            <main className="mx-auto w-full max-w-360 ">
                <div className='flex  mt-5   w-100% overflow-x-hidden '>

                    <div className='mt-10'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>
                    <div className=' w-full'>
                        <h1 className=' text-red-400 text-sm  font-bold text-center mb-5'>You are currently viewing company sounds</h1>
                        <hr className='md:w-1050 w-full absolute  right-0  ' />

                        <div className=' w-full h-90 relative lg:block hidden ' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-[5%]  left-[2%] w-[93%]' />
                            <p className='absolute top-[50%] left-[10%] text-white font-bold text-4xl'>Vocal Future <span className='font-light'>Electronica</span> </p>
                            <img src="/src/assets/f1.png" alt="" className='absolute top-[5%] left-[53%] w-[43%]' />

                        </div>
                        <div className="flex flex-col   text-[#5C5C5C] ">
                            <div className="flex gap-6 cursor-pointer pb-5 md:ml-8">
                                <TabsLine />
                            </div>

                            <hr className='mb-8' />

                            <div className="flex gap-5 flex-wrap lg:justify-start lg:ml-8 justify-center items-center ">
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
