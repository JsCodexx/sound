import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { Cards } from '@/components/box'
import SideBar from '@/components/SideBar'
export default function Present() {
    return (
        <div>
            <NavBar />
            <main className="mx-auto w-full max-w-[1440px] px-8 relative">
                <div className='flex ml-25 mt-5 gap-5  w-100% overflow-x-hidden'>
                    <SideBar />
                    <img src="src/assets/line.png" alt="" className='h-950' />
                    <h1 className=' text-red-400  font-bold ml-60'>You are currently viewing company sounds</h1>

                </div>
                <div className='' >
                    <img src="/src/assets/image86.png" alt="" className='absolute top-25 left-60 w-220' />
                    <img src="/src/assets/f1.png" alt="" className='absolute top-25 left-178 w-103' />
                </div>
                <div className='flex flex-col text-[#5C5C5C] gap-5 absolute top-120 left-70'>
                    <div className='flex gap-6 cursor-pointer '>
                        <TabsLine />
                    </div>
                    <hr className='w-230' />
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
