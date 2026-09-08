import React from 'react'
import NavBar from '@/components/NavHome'
import { Link } from 'react-router-dom'
import { CheckboxInvalid } from '@/components/Checkbox'
import { Footer2 } from '@/components/footer2'
import { TabsLine } from '@/components/Menu'
export default function Noification() {
    return (
        <div>
            <NavBar />
            <div className='bg-[#CD4848] w-full h-15'>
                <p className='text-white text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
            </div>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className='text-center text-4xl font-bold mt-5'>Settings</h1>
                <p className='text-center text-gray-500 mt-3'>Account setting and payment seetting</p>
                <div className=' mt-5 flex gap-8 ml-13 md:ml-115 mb-5'>

                    <TabsLine variant="setting" />

                </div>
                <hr />
                <h1 className='md:ml-93 ml-15 text-2xl  mt-5 font-bold'>Notifications</h1>


                <div className='flex justify-center item-center gap-60 md:gap-85 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>Photo</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <div className='flex justify-center item-center md:gap-79 gap-54 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>Username</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <div className='flex justify-center item-center md:gap-75 gap-60 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>Email Adress</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <div className='flex justify-center item-center md:gap-80 gap-62 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>Full Name</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <div className='flex justify-center item-center md:gap-85 gap-64 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>User Id</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                {/* ... */}
                <div className='flex justify-center item-center md:gap-85 gap-64 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>User Id</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <div className='flex justify-center item-center md:gap-85 gap-64 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>User Id</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <h1 className=' md:ml-90 ml-15 text-sm mt-5 mb-5 font-semibold'>From Anyone</h1>
                <hr className='md:mx-85' />
                <div className='flex justify-center item-center md:gap-85 gap-64 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>User Id</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <h1 className=' md:ml-90 ml-15 text-sm mt-5 mb-5 font-semibold'>From Company Name</h1>
                <hr className='md:mx-85' />
                <div className='flex justify-center item-center md:gap-85 gap-64 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>User Id</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <div className='flex justify-center item-center md:gap-85 gap-64 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>User Id</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <div className='flex justify-center item-center md:gap-85 gap-64 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>User Id</h1>
                    <input type="checkbox" className='mt-7  accent-red-500 w-20 ' />
                </div>
                <hr className='md:mx-90' />
                <button className='rounded-4xl bg-[#CD4848] text-white text-center md:ml-125 ml-35 mt-10 text-sm mb-10 py-3 px-10 cursor-pointer hover:bg-red-800'>Update</button>
            </div>
            <Footer2 />


        </div>
    )
}
