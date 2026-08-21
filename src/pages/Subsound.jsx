import React from 'react'
import NavBar from '@/components/NavHome'
import { NavLink } from 'react-router-dom'
import { TabsDemo } from '@/components/Tab'
import SideBar from '@/components/SideBar'
export default function Subsound() {
    return (
        <div>
            <NavBar />
            <div className='flex ml-35 mt-5 gap-5  w-100% overflow-x-hidden'>
                <SideBar />
                <img src="src/assets/line.png" alt="" className='h-950' />
                <div className='flex flex-col gap-5 '>
                    <h1 className=' text-red-600  font-bold ml-60 '>You are currently viewing company sounds</h1>
                    <hr className='w-240' />
                    <h1 className='font-bold  text-2xl'>Your Sounds</h1>
                    <TabsDemo />

                </div>

            </div>

        </div>
    )
}
