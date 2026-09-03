import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'


import SideBar from '@/components/SideBar'
import { CarouselSize } from '@/components/Carousel'


function Sound() {

    return (
        <div className='overflow-x-hidden '>
            <NavBar />

            <main className="w-full max-w-[1440px] mx-auto px-4 md:px-8 relative">
                <div className='w-full'>
                    <div className='flex md:ml-8 mt-5 md:gap-5  w-100% overflow-x-hidden'>
                        <SideBar />

                        <div className=' w-full'>
                            <h1 className=' text-red-400  font-bold text-sm ml-10 md:ml-60 mb-5'>You are currently viewing company sounds</h1>
                            <hr className='w-1050 absolute  right-0 ' />
                            <img src="src/assets/line.png" alt="" className='h-1120 ml-6 md:ml-15' />

                        </div>


                    </div>
                    <div className='md:block hidden' >
                        <img src="/src/assets/image86.png" alt="" className='absolute top-25 left-60 w-220' />
                        <img src="/src/assets/f1.png" alt="" className='absolute top-25 left-178 w-103' />
                    </div>
                    <div className='flex flex-col  text-[#5C5C5C] gap-5 absolute top-20 md:top-120 left-27 md:left-60'>
                        <div className='flex mb-5 md:flex-row flex-col gap-6 cursor-pointer '>
                            <TabsLine />
                        </div>
                        <div className='w-auto'>
                            <hr className='md:w-230 w-75 ' />
                            <h1 className='md:ml-50 ml-8 py-4 text-black text-2xl font-bold'>Start Here: Collections</h1>
                            <p className='md:w-100 ml-6 w-70 text-center text-sm md:ml-35 py-0'>
                                No matter what genre of music you make, get instant inspiration from some of our team’s favorite Sounds on Splice.
                            </p>
                            <div className='flex md:gap-4 w-full md:pr-10 h-110'>
                                <div className='mt-8 flex flex-col gap-4 w-175 '>
                                    <div className='flex gap-4'>
                                        <div className='flex gap-2 '>
                                            <CarouselSize />

                                        </div>
                                        <div>

                                        </div>

                                    </div>


                                </div>
                                <div className='flex flex-col gap-4 md:block hidden'>
                                    <div className='flex flex-col gap-3 w-auto '>
                                        <div className='flex gap-6 '>

                                            <h1 className='text-black font-bold'>Top Packs</h1>
                                            <p className='text-sm'>View All</p>
                                        </div>
                                        <div className='w-50'>
                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>1</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>2</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>3</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>
                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>4</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>5</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>6</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>7</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>8</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>9</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>10</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>


                                        </div>

                                    </div>
                                    <div className='flex flex-col gap-3 w-auto '>
                                        <div className='flex gap-6 '>

                                            <h1 className='text-[#404040] text-2xl font-semibold font-Poppins px-4 py-2'>Top Labels</h1>

                                        </div>
                                        <div className='w-50'>
                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>1</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>2</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>3</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>
                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>4</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>5</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>6</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>7</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>8</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/s1.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>9</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>

                                            <div className='relative'>
                                                <img src="/src/assets/i4.png" alt="" />
                                                <div className='flex gap-7 absolute top-0'>

                                                    <img src="/src/assets/s2.png" alt="" className='h-10' />
                                                    <p className='font-bold py-2'>10</p>
                                                    <div className='flex flex-col py-2'>
                                                        <p className='font-bold text-black text-[7px]'>Tape & Vinyl Drums</p>
                                                        <p className='text-gray-400 text-[7px]'>by sample Magic</p>
                                                    </div>

                                                </div>



                                            </div>


                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* section2 */}
                            <h1 className='md:ml-50 ml-10  text-black text-2xl font-bold'>What's New This Week</h1>
                            <p className='md:w-100 w-60 text-center md:text-center text-sm md:ml-35 ml-13 py-3'>
                                Brand new loops and one-shots from newly released sample packs.
                            </p>
                            <div className='ml-4'>
                                <div>
                                    <div className='flex flex-col gap-10 w-auto h-100'>
                                        <div className='mt-8 flex  gap-4 w-158 ml-20 md:ml-0'>
                                            <CarouselSize variant="crouse" />


                                        </div>


                                    </div>
                                </div>

                                {/* section3 */}
                                <h1 className='md:ml-50 ml-10 py-4 text-black text-2xl font-bold mt-10'>All Around the Globe</h1>
                                <p className='md:w-100 w-75 text-center md:text-center text-sm md:ml-35 py-0'>
                                    Take a journey through the Middle East, Caribbean, Taiwan, Europe, Africa, and all places
                                    in between as these packs explore
                                    ancient instruments and modern techniques from the four corners of the earth.
                                </p>
                                <div className='flex gap-155 w-full mt-'>
                                    <div className='mt-8 flex flex-col gap-4 w-auto h-100'>
                                        <div className='flex gap-4'>
                                            <div className='mt-8 flex  gap-4 w-158 ml-20 md:ml-0'>
                                                <CarouselSize variant="crouse" />

                                            </div>

                                        </div>


                                    </div>
                                </div>
                                {/* section4 */}

                                <h1 className='md:ml-32 ml-3 w-74 md:w-full py-4 text-black text-2xl font-bold mt-10'>Celebrate AAPI Creators on Company</h1>
                                <p className='md:w-100 w-75 md:text-center text-sm md:ml-35 py-0'>
                                    Celebrate AAPI month with us as we dive into this
                                    curation of our favorite sample packs by Asian,
                                    Asian-American and Pacific Island creators.
                                </p>
                                <div className='flex gap-155 w-full mt-'>
                                    <div className='mt-8 flex flex-col gap-4 w-auto h-100'>
                                        <div className='flex gap-4 '>
                                            <div className='mt-8 flex  gap-4 w-158 ml-20 md:ml-0'>
                                                <CarouselSize variant="crouse" />

                                            </div>

                                        </div>


                                    </div>
                                </div>

                                {/* section5 */}

                                <h1 className='md:ml-50 ml-8 py-4 text-black text-2xl font-bold mt-10'>In Case You Missed It...</h1>
                                <p className='md:w-100 w-65 ml-5 text-center text-sm md:ml-35 py-0'>
                                    We get it, life's moving fast. So don't worry if you missed something. We got your back.
                                    Get new inspiration from this collection of hidden gems.
                                </p>
                                <div className='flex gap-155 w-full mt-'>
                                    <div className='mt-8 flex flex-col gap-4 w-auto h-100'>
                                        <div className='flex gap-4'>
                                            <div className='mt-8 flex  gap-4 w-158 ml-20 md:ml-0'>
                                                <CarouselSize variant="crouse" />

                                            </div>

                                        </div>


                                    </div>
                                </div>
                                {/* section6 */}

                                <h1 className='md:ml-50 ml-8 py-4 text-black text-2xl font-bold mt-10'>Old Soul, Jazz & Disco</h1>
                                <p className='md:w-100 w-60 ml-10 text-center text-sm md:ml-35 py-0'>
                                    A crate digger’s playground! These are our most classic sounds that represent the 'Golden Age' of music.
                                </p>
                                <div className='  '>
                                    <div className='mt-8 flex flex-col gap-4 w-auto h-100'>
                                        <div className='flex gap-4'>
                                            <div className='mt-8 flex  gap-4 w-158 ml-20 md:ml-0 '>
                                                <CarouselSize variant="crouse" />

                                            </div>

                                        </div>


                                    </div>
                                </div>
                                {/* section6 */}

                                <h1 className='md:ml-60 ml-10 py-4 text-black text-2xl font-bold mt-10'>Recent Releases</h1>
                                <p className='w-100 md:text-center ml-25 text-[#CD4848] text-sm md:ml-35 py-0'>
                                    View All
                                </p>
                                <div className='flex  '>
                                    <div className='mt-0 flex flex-col gap-4 w-auto h-70'>
                                        <div className='flex gap-4'>
                                            <div className='mt-8 flex  gap-4 w-158 ml-20 md:ml-0'>
                                                <CarouselSize variant="crouse" />

                                            </div>

                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>



    )
}

export default Sound
