import React from 'react'
import { Footer2 } from '@/components/footer2'
import Content from '@/components/content';

import { useState } from 'react';
import HoverCards from '@/components/HoverCards';
import Pricecompo from '@/components/Pricecompo';
import NavBar from '@/components/NavHome';

function Price() {
    const [isMonthly, setIsMonthly] = useState(true);
    return (
        <>
            <div>
                <NavBar />
                <div className='bg-[#CD4848] w-full h-15'>
                    <p className='text-white text-sm text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
                </div>
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className='text-center text-sm md:text-3xl font-extrabold w-120 md:ml-105 mt-8'>Start your free 14-day trial.
                        Cancel any time.</h1>
                    <div className='flex gap-4'>
                        <div
                            onClick={() => setIsMonthly(!isMonthly)}
                            className='bg-[#151515] w-40 h-10 ml-35 md:ml-135 mt-7 rounded-3xl px-2 py-1 cursor-pointer '
                        >
                            <div className='flex gap-0 items-center'>
                                <div className={`w-20 h-8 rounded-2xl text-sm px-4 text-white py-1.5  duration-300 ${isMonthly ? 'bg-[#D74664]' : 'bg-transparent text-gray-400 py-2'}`}>
                                    Monthly
                                </div>
                                <p className={`text-sm pt-1.5 w-20 h-8 px-2 rounded-2xl  duration-300 ${!isMonthly ? 'bg-[#D74664] font-semibold' : 'text-white'}`}>
                                    Annual
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-red-800 mt-10 text-sm cursor-pointer'>2 months free </p>
                        </div>

                    </div>
                    {/* <img src="/src/assets/Group.png" alt="" className='ml-50 mt-10 cursor-pointer' width={900} /> */}
                    <HoverCards />

                    <div className='bg-[#D971F1] w-100 h-13 md:ml-110 mt-5 rounded-xl text-center pt-3 cursor-pointer text-white font-bold text-2xl'>Start a free trial</div>
                    <h1 className='text-center mt-3 ml-20'>Cancel at any time</h1>
                    <div className='flex md:flex-row flex-col gap-4 mt-20'>
                        <div className='mt-15 ml-10'>
                            <h1 className='text-2xl font-black pb-4 md:ml-30'>How does company work?</h1>
                            <p className='md:w-130  md:ml-30'>Get new credits every month to purchase samples, presets, and MIDI.
                                1 sample = 1 credit. Presets and MIDI cost between 1-3 credits.
                                Unused credits roll over to the next month.</p>
                        </div>
                        <div className='md:ml-25 relative ml-5 '>
                            <img className='h-70' src="/src/assets/pic.png" alt="" width={350} />
                            <img className='md:absolute h-50 md:top-10 right-70 rounded-2xl' src="/src/assets/small.png" alt="" width={120} />
                        </div>

                    </div>
                    <Pricecompo />

                    <div className='flex h-145 mt-10'>
                        <div>
                            <h1 className='text-2xl font-black mt-20 ml-20 w-100'>Limitless inspiration from hundreds of genres</h1>
                            <h3 className='ml-20 w-140 mt-5'>Combine samples from house to cinematic, techno to trap, and EDM to ambient to creat
                                e something unique. We’ve traveled around the world to record inspiring samples—from glaciers in Iceland to
                                abandoned mines in Utah.
                            </h3>
                        </div>
                        <div >
                            <img className='ml-20 relative' src="/src/assets/concert.png" alt="" />
                            <img className='ml-20 md:absolute md:top-450 md:right-15' src="/src/assets/string.png" alt="" />
                            <img className='ml-20 md:absolute md:top-550 md:right-70' src="/src/assets/light.png" alt="" />
                        </div>
                    </div>
                    <Content />
                </div>
                <Footer2 />
            </div>
        </>
    )
}

export default Price
