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
            <div className='overflow-x-hidden'>
                <NavBar />
                <div className='bg-[#CD4848] w-full h-15'>
                    <p className='text-white text-sm text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
                </div>
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className='text-center text-sm md:text-3xl font-extrabold mt-8'>Start your free 14-day trial.
                        <br /> Cancel any time.</h1>
                    <div className='flex md:flex-row flex-col justify-center items-center gap-4'>
                        <div
                            onClick={() => setIsMonthly(!isMonthly)}
                            className='bg-[#151515]  mt-7 rounded-3xl px-2 py-1 cursor-pointer '
                        >
                            <div className='flex gap-0 items-center'>
                                <div className={` h-8 rounded-2xl text-sm px-4 text-white py-1.5  duration-300 ${isMonthly ? 'bg-[#D74664]' : 'bg-transparent text-gray-400 py-2'}`}>
                                    Monthly
                                </div>
                                <p className={`text-sm pt-1.5  h-8 px-2 rounded-2xl  duration-300 ${!isMonthly ? 'bg-[#D74664] font-semibold text-white' : 'text-white'}`}>
                                    Annual
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-red-800 mt-10 text-sm cursor-pointer'>2 months free </p>
                        </div>

                    </div>

                    <HoverCards />

                    <div className='   mt-5 text-center pt-3  text-white font-bold justify-center items-center flex-col flex'> <button className=' cursor-pointer bg-[#D971F1] px-4 py-2 text-center rounded-sm text-2xl'>Start a free trial</button>
                        <h1 className='text-center cursor-pointer mt-3  text-black'>Cancel at any time</h1></div>

                    <div className='flex md:flex-row flex-col gap-3 md:gap-17 mt-20'>
                        <div className='mt-15 '>
                            <h1 className='text-2xl font-black pb-4  md:ml-30'>How does company work?</h1>
                            <p className='md:w-130  md:ml-30'>Get new credits every month to purchase samples, presets, and MIDI.
                                1 sample = 1 credit. Presets and MIDI cost between 1-3 credits.
                                Unused credits roll over to the next month.</p>
                        </div>
                        <div className=' relative '>
                            <img className='h-70 md:mx-0 mx-auto' src="/src/assets/pic.png" alt="" width={350} />
                            <img className='absolute h-50 top-10 right-70 rounded-2xl md:block hidden' src="/src/assets/small.png" alt="" width={120} />
                        </div>

                    </div>
                    <div className='  mt-20 flex md:flex-row flex-col '>
                        <div className=' relative  w-176 h-100 '>
                            <img className='absolute top-0 left-5 md:left-20' src="/src/assets/fatGirl.png" alt="" />
                            <img className=' absolute md:left-55 left-40 md:top-20  ' src="/src/assets/sad.png" alt="" />
                            <img className=' absolute left-90 top-0  md:block hidden' src="/src/assets/sing.png" alt="" />
                            <img className=' absolute left-125 md:top-20 md:block hidden' src="/src/assets/drum.png" alt="" />
                        </div>
                        <div className='  flex flex-col justify-center item-center md:mt-25'>
                            <h1 className='text-2xl font-black '>The highest-quality samples on the market</h1>
                            <p className='md:w-100 mt-5'>Make better music with masterfully-recorded samples—carefully crafted by leading sound designers, breakthrough producers, and established icons like Oliver, KSHMR, and Murda Beatz

                            </p>
                        </div>
                    </div>

                    <div className='flex md:flex-row gap-10 flex-col mt-20 md:mt-80 justify-center item-center'>
                        <div className='flex flex-col justify-center item-center'>
                            <h1 className='text-2xl font-black '>Limitless inspiration from hundreds of genres</h1>
                            <h3 className=' md:w-140 mt-5'>Combine samples from house to cinematic, techno to trap, and EDM to ambient to creat
                                e something unique. We’ve traveled around the world to record inspiring samples—from glaciers in Iceland to
                                abandoned mines in Utah.
                            </h3>
                        </div>
                        <div className='relative '>
                            <img className=' ' src="/src/assets/concert.png" alt="" />
                            <img className='absolute -top-30 left-80 md:block hidden' src="/src/assets/string.png" alt="" />
                            <img className='absolute -bottom-30 right-30  md:block hidden' src="/src/assets/light.png" alt="" />
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col gap-3 md:gap-10 mt-25 justify-center items-center'>
                        <div className='md:w-63 mt-15' >
                            <img src="/src/assets/cup.png" alt="" className='pb-4 ' />
                            <h3 className='pb-4 text-black'>100% royalty-free</h3>
                            <p className='pb-4 text-black'>Use  samples to create anything. They’re cleared for commercial use in new works.</p>
                        </div>
                        <div className='md:w-63 mt-15' >
                            <img src="/src/assets/cross.png" alt="" className='pb-4' />
                            <h3 className='pb-4 text-black'>100% royalty-free</h3>
                            <p className='pb-4 text-black'>Use  samples to create anything. They’re cleared for commercial use in new works.</p>
                        </div>
                        <div className='md:w-63 mt-8.5' >
                            <img src="/src/assets/download.png" alt="" className='pb-4' />
                            <h3 className='pb-4 text-black'>100% royalty-free</h3>
                            <p className='pb-4 text-black'>Use  samples to create anything. They’re cleared for commercial use in new works.</p>
                        </div>
                    </div>

                </div>

                <Footer2 />
            </div>
        </>
    )
}

export default Price
