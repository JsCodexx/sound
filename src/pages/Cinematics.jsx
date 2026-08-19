import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
export default function Cinematics() {
    return (
        <div >
            <NavBar />
            <div className='flex ml-35 mt-5 gap-5 relative w-auto'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-black font-extrabold '>Sounds</h1>
                    <div>
                        <h1 className='text-black font-bold '>Browse</h1>
                        <h1 className='text-black '>Charts</h1>
                    </div>
                    <div>
                        <h1 className='text-black '>Your Library</h1>
                        <h1 className='text-black '>Sounds</h1>
                    </div>
                </div>
                <img src="src/assets/line.png" alt="" className='h-230' />
                <h1 className=' text-red-400  font-bold ml-60'>You are currently viewing company sounds</h1>

            </div>
            <div className='' >
                <img src="/src/assets/image86.png" alt="" className='absolute top-35 left-70 w-230' />
                <img src="/src/assets/f1.png" alt="" className='absolute top-35 left-190 w-110' />
            </div>
            <div className='flex flex-col text-[#5C5C5C] gap-5 absolute top-120 left-70'>
                <div className='flex gap-6 cursor-pointer '>
                    <TabsLine />

                </div>
                <hr className='w-230' />
                <div className='text-center'>
                    <h1 className='text-2xl font-bold text-black'>All Around the Globe</h1>
                    <p className='text-[#838383] px-50'>Take a journey through the Middle East, Caribbean, Taiwan, Europe, Africa, and all places in between as these packs
                        explore ancient instruments and modern techniques from the four corners of the earth.</p>

                </div>
                <div className='mr-10'>
                    <img src="/src/assets/combined.png" alt="" />
                </div>
            </div>
        </div>
    )
}
