import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { Cards } from '@/components/box'
import SideBar from '@/components/SideBar'
export default function Present() {
    return (
        <div>
            <NavBar />
            <div className='mt-5'>
                <SideBar variant="mobileSide" className="md:hidden block" />
            </div>
            <main className="mx-auto w-full max-w-360  ">
                <div className='flex   mt-5 gap-0  w-100% overflow-x-hidden'>

                    <div className='mt-11'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>


                    <div className=' w-full'>
                        <h1 className=' text-red-400  font-bold text-center'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <div className=' w-full h-90 relative lg:block hidden mb-5' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-[5%]  left-[2%] w-[93%]' />
                            <img src="/src/assets/f1.png" alt="" className='absolute top-[5%] left-[53%] w-[43%]' />
                        </div>

                        <div className='flex flex-col text-[#5C5C5C] gap-5 md:ml-8 '>
                            <div className='flex gap-6 cursor-pointer mb-3'>
                                <TabsLine />
                            </div>
                            <hr />
                            <div className='flex font-semibold flex-wrap lg:justify-start justify-center items-center px-3 gap-10  '>
                                <Cards />
                                <Cards />
                                <Cards />
                                <Cards />
                            </div>
                        </div>
                    </div>


                </div>

            </main>
        </div>
    )
}
