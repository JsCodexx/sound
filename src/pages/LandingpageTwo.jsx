import React from 'react'
import NavBar from '@/components/NavHome'
import Content from '@/components/Content'
import Pricecompo from '@/components/Pricecompo'
import { CarouselSize } from '@/components/Carousel'
import { Footer2 } from '@/components/footer2'

export default function LandingPageTwo() {
    return (
        <>

            <NavBar variant="landing" />

            <div className='bg-[#CD4848] w-full h-15'>
                <p className='text-white text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
            </div>
            <div className='relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-0'>

                <div className='bg-[#8054f6] h-230 w-full'>
                    <div className='flex w-auto'>
                        <img src="/src/assets/head.png" alt="" width={300} className='pt-10 h-95' />
                        <div className='flex flex-col gap-6 pl-0 pt-10'>
                            <h1 className='w-100 ml-30 font-black leading-[1.58] text-white text-center text-4xl'>The World's Best Sample Library</h1>
                            <button className='w-80 ml-40 h-10 font-medium text-[#8054F6] text-sm bg-white rounded-[5px]'> Try Free For 14 Days</button>
                            <input
                                className="w-155 h-13 mt-5  rounded-full bg-white text-black px-5 p text-sm outline-none"
                                placeholder="Search Any Sounds"
                            />
                            <p className='text-white ml-3 font-semibold'>Browse Genres</p>
                            <div className='flex gap-1 w-180 flex-wrap mb-35'>
                                <button className='w-[113px] h-[40px] text-white rounded-[8px] border-1 border-[##FFFFFF]'>Hip Hop</button>
                                <button className='w-[120px] h-[40px] text-white rounded-[8px] border-1 border-[##FFFFFF]'>Drum & Bass</button>
                                <button className='w-[90px] h-[40px] text-white rounded-[8px] border-1 border-[##FFFFFF]'>Trap</button>
                                <button className='w-[90px] h-[40px] text-white rounded-[8px] border-1 border-[##FFFFFF]'>R&B</button>
                                <button className='w-[120px] h-[40px] text-white rounded-[8px] border-1 border-[##FFFFFF]'>Tech  house</button>
                                <button className='w-[90px] h-[40px] text-white rounded-[8px] border-1 border-[##FFFFFF]'>EDM</button>
                                <button className='w-[90px] h-[40px] text-white rounded-[8px] border-1 border-[##FFFFFF]'>Disco</button>
                                <button className='w-[90px] h-[40px] text-white rounded-[8px] border-1 border-[##FFFFFF]'>Soul</button>
                            </div>
                        </div>
                        <div className='flex '>


                            <img className=' absolute left-235 top-10 ml-0 ' src="/src/assets/sing.png" alt="" width={90} />
                            <img className=' absolute left-265 top-25 ml-0' src="/src/assets/drum.png" alt="" width={90} />
                        </div>
                    </div>
                    <Content variant="trio" />

                </div>
                <div className=''>
                    <Pricecompo />
                    <div className='relative'>
                        <img src="/src/assets/o1.png" alt="" className='mb-5 mt-5' />
                        <p className='text-white w-170 text-center left-75 top-10 absolute  text-4xl font-black'>“Every time we open up Company name, we find the sounds we need. We can’t live without it.”</p>
                    </div>
                    <div className='ml-48 h-100'>
                        <h1 className='ml-75 py-4 text-black text-2xl font-bold mt-10'>Old Soul, Jazz & Disco</h1>
                        <p className='w-100 text-center text-sm ml-59 py-0'>
                            A crate digger’s playground! These are our most classic sounds that represent the 'Golden Age' of music.
                        </p>
                        <div className=''>
                            <div className='mt-8 flex flex-col gap-4 w-auto '>
                                <div className='flex gap-4'>
                                    <div className='mt-8 flex  gap-4 w-full '>
                                        <CarouselSize variant="land" />

                                    </div>
                                    <div >

                                        <img src="/src/assets/boy.png" alt="" className='top-600 absolute left-0 h-99 w-500 ' />

                                        <h1 className='text-white font-black text-6xl  top-650 absolute left-70 '>Try company name today </h1>
                                        <button className='w-60 ml-40 h-10 font-medium text-[#000000] text-sm bg-white rounded-[5px] top-675 absolute left-90'> Try Free For 14 Days</button>
                                    </div>

                                </div>
                                <div className='absolute top-699 right-0 left-0 w-316.3'>
                                    <Footer2 />
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )

}
