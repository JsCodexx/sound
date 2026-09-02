import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { Cards } from '@/components/box'
import SideBar from '@/components/SideBar'
export default function Present() {
    return (
        <div>
            <NavBar />
            <main className="mx-auto w-full max-w-[1440px] md:px-8 relative">
                <div className='flex md:ml-8 ml-4 mt-5 gap-5  w-100% overflow-x-hidden'>
                    <SideBar />

                    <div className=' w-full'>
                        <h1 className=' text-red-400  font-bold md:ml-60 mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <img src="src/assets/line.png" alt="" className='h-280 md:ml-15' />

                    </div>


                </div>
                <div className='md:block hidden' >
                    <img src="/src/assets/image86.png" alt="" className='absolute top-25 left-60 w-220' />
                    <img src="/src/assets/f1.png" alt="" className='absolute top-25 left-178 w-103' />
                </div>
                <div className='flex flex-col text-[#5C5C5C] gap-5 absolute md:top-120 left-25 top-20 md:left-70'>
                    <div className='flex gap-6 cursor-pointer mb-5'>
                        <TabsLine />
                    </div>
                    <hr className='md:w-230 w-75' />
                    <div className='flex flex-wrap gap-10 ml-0'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </main>
        </div>
    )
}
