import React from 'react'
import NavBar from '@/components/NavHome'
import { Link } from 'react-router-dom'
import { Footer2 } from '@/components/footer2'
import { TabsLine } from '@/components/Menu'
function Plan() {
    return (
        <div>
            <NavBar />

            <div className='bg-[#CD4848] text-sm w-full h-15'>
                <p className='text-white text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
            </div>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className='text-center text-4xl font-bold mt-5'>Settings</h1>
                <p className='text-center text-gray-500 mt-3'>Account setting and payment seetting</p>
                <div className=' mt-5 flex gap-8 justify-center items-center mb-5'>

                    <TabsLine variant="setting" />

                </div>
                <hr />
                <h1 className='text-2xl lg:ml-70 md:ml-0 mt-5 font-bold'>Plans</h1>
                <div className='flex flex-col justify-center items-center'>
                    <img src="/src/assets/hello.png" alt="" className='mt-20 ' />
                    <h1 className='text-cenetr md:text-xl text-[#404041] font-bold mt-5 '>New to Company name? Welcome. Let's get started.</h1>
                    <p className='md:w-135 text-sm text-cenetr  text-gray-400 mt-10 '>Bring your musical ideas to life with Splice. Browse millions of royalty-free sounds and presets, learn new sound
                        design tactics from the pros, make a beat with Beatmaker, or
                        grab that synth you've been 👀 for a low monthly price.
                    </p>
                    <button className='rounded-4xl bg-[#CD4848] text-white text-center m mt-10 text-sm mb-10 py-3 px-4 cursor-pointer hover:bg-red-800'>Choose A Plan</button>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Plan
