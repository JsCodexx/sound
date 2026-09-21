import React from 'react'
import NavBar from '@/components/NavHome'
import { NavLink } from 'react-router-dom'
import { TabsDemo } from '@/components/Tab'
import SideBar from '@/components/SideBar'
export default function Subsound() {
    return (
        <div>
            <NavBar />
            <div className='flex  mt-5    w-100% '>
                <div className='mt-0'>
                    <SideBar variant="mobileSide" className="md:hidden block" />
                </div>
                <div className='mt-10'>
                    <SideBar variant="desktop" className="md:block  hidden" />
                </div>


                <div className='flex flex-col gap-0 relative ml-5'>
                    <h1 className=' text-red-600  font-bold text-center '>You are currently viewing company sounds</h1>
                    <hr className='md:w-1050 w-0 absolute  right-0  top-10 ' />
                    <h1 className='font-bold  text-2xl mt-10'>Your Sounds</h1>
                    <TabsDemo />

                </div>

            </div>

        </div>
    )
}
