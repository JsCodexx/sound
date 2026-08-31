import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import SideBar from '@/components/SideBar'
export default function Cinematics() {
    return (
        <div >
            <NavBar />
            <main className="mx-auto w-full max-w-[1440px] px-4 md:px-8 relative">
                <div className='flex ml-8 mt-5 gap-5  w-100% overflow-x-hidden'>
                    <SideBar />

                    <div className=' w-full'>
                        <h1 className=' text-red-400  font-bold ml-60 mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <img src="src/assets/line.png" alt="" className='h-1120 ml-15' />

                    </div>


                </div>
                <div className='' >
                    <img src="/src/assets/image86.png" alt="" className='hidden md:block absolute top-25 left-60 w-220' />
                    <img src="/src/assets/f1.png" alt="" className='hidden md:block absolute top-25 left-178 w-103' />
                </div>
                <div className='flex flex-col text-[#5C5C5C] gap-5 absolute md:top-120 md:left-70 left-25 top-30'>
                    <div className='flex  gap-0 cursor-pointer '>
                        <TabsLine />

                    </div>
                    <hr className='w-220' />
                    <div className='md:text-center pr-55'>
                        <h1 className='text-2xl font-bold text-black'>All Around the Globe</h1>
                        <p className='text-[#838383]  md:w-full md:px-50'>Take a journey through the Middle East, Caribbean, Taiwan, Europe, Africa, and all places in between as these packs
                        </p>

                    </div>
                    <div className='mr-30 '>
                        <img src="/src/assets/combined.png" alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}
