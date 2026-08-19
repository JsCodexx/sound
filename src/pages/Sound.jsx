import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { Link } from 'react-router-dom'
function Sound() {
    return (
        <div >
            <NavBar />
            <div className='flex ml-35 mt-5 gap-5 relative w-auto'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-black font-extrabold cursor-pointer '>Sounds</h1>
                    <div>
                        <Link><h1 className='text-black font-bold cursor-pointer'>Browse</h1></Link>
                        <Link to="/Charts"><h1 className='text-black cursor-pointer'>Charts</h1></Link>
                    </div>
                    <div>
                        <h1 className='text-black '>Your Library</h1>
                        <h1 className='text-black cursor-pointer'>Sounds</h1>
                    </div>
                </div>
                <img src="src/assets/line.png" alt="" className='h-950' />
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
                <div className='w-auto'>
                    <hr />
                    <h1 className='ml-50 py-4 text-black text-2xl font-bold'>Start Here: Collections</h1>
                    <p className='w-100 text-center text-sm ml-35 py-0'>
                        No matter what genre of music you make, get instant inspiration from some of our team’s favorite Sounds on Splice.
                    </p>
                    <div className='flex gap-155 w-full'>
                        <div className='mt-8 flex flex-col gap-4 w-[25%]'>
                            <div className='flex gap-4'>
                                <img src="/src/assets/i1.png" alt="" />
                                <img src="/src/assets/i2.png" alt="" />
                                <img src="/src/assets/i1.png" alt="" />
                                <img src="/src/assets/i2.png" alt="" />
                                <img src="/src/assets/i3.png" alt="" />
                            </div>
                            <div className='relative '>
                                <div className='absolute flex gap-3 left-90 top-10 w-40'>
                                    <img src="src/assets/left.png" alt="" />
                                    <img src="src/assets/right.png" alt="" />
                                </div>

                            </div>

                        </div>
                        <div className='flex flex-col gap-3 w-[35%]'>
                            <div className='flex gap-6 '>

                                <h1 className='text-black font-bold'>Top Packs</h1>
                                <p className='text-sm'>View All</p>
                            </div>
                            <div className='w-[100%]'>
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
                    {/* section2 */}
                    <h1 className='ml-50 py-4 text-black text-2xl font-bold'>What's New This Week</h1>
                    <p className='w-100 text-center text-sm ml-35 py-0'>
                        Brand new loops and one-shots from newly released sample packs.
                    </p>
                    <div className='flex gap-155 w-full'>
                        <div className='mt-8 flex flex-col gap-4 w-[75%]'>
                            <div className='flex gap-4'>
                                <div className='relative'>
                                    <img src="/src/assets/w1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w2.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w3.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='mt-[-32px]'>
                                    <img src="/src/assets/half.png" alt="" className='' />

                                </div>

                            </div>
                            <div className='relative '>
                                <div className='absolute flex gap-3 left-90 top-0 w-40'>
                                    <img src="src/assets/left.png" alt="" />
                                    <img src="src/assets/right.png" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* section3 */}
                    <h1 className='ml-50 py-4 text-black text-2xl font-bold mt-10'>All Around the Globe</h1>
                    <p className='w-100 text-center text-sm ml-35 py-0'>
                        Take a journey through the Middle East, Caribbean, Taiwan, Europe, Africa, and all places
                        in between as these packs explore
                        ancient instruments and modern techniques from the four corners of the earth.
                    </p>
                    <div className='flex gap-155 w-full mt-'>
                        <div className='mt-8 flex flex-col gap-4 w-[75%]'>
                            <div className='flex gap-4'>
                                <div className='relative'>
                                    <img src="/src/assets/n1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/n2.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w3.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='mt-[-32px]'>
                                    <img src="/src/assets/half.png" alt="" className='' />

                                </div>

                            </div>
                            <div className='relative '>
                                <div className='absolute flex gap-3 left-90 top-0 w-40'>
                                    <img src="src/assets/left.png" alt="" />
                                    <img src="src/assets/right.png" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* section4 */}

                    <h1 className='ml-50 py-4 text-black text-2xl font-bold mt-10'>Celebrate AAPI Creators on Company</h1>
                    <p className='w-100 text-center text-sm ml-35 py-0'>
                        Celebrate AAPI month with us as we dive into this
                        curation of our favorite sample packs by Asian,
                        Asian-American and Pacific Island creators.
                    </p>
                    <div className='flex gap-155 w-full mt-'>
                        <div className='mt-8 flex flex-col gap-4 w-[75%]'>
                            <div className='flex gap-4'>
                                <div className='relative'>
                                    <img src="/src/assets/h1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/h2.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w3.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='mt-[-32px]'>
                                    <img src="/src/assets/half.png" alt="" className='' />

                                </div>

                            </div>
                            <div className='relative '>
                                <div className='absolute flex gap-3 left-90 top-0 w-40'>
                                    <img src="src/assets/left.png" alt="" />
                                    <img src="src/assets/right.png" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* section5 */}

                    <h1 className='ml-50 py-4 text-black text-2xl font-bold mt-10'>In Case You Missed It...</h1>
                    <p className='w-100 text-center text-sm ml-35 py-0'>
                        We get it, life's moving fast. So don't worry if you missed something. We got your back.
                        Get new inspiration from this collection of hidden gems.
                    </p>
                    <div className='flex gap-155 w-full mt-'>
                        <div className='mt-8 flex flex-col gap-4 w-[75%]'>
                            <div className='flex gap-4'>
                                <div className='relative'>
                                    <img src="/src/assets/n1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w2.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w3.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='mt-[-32px]'>
                                    <img src="/src/assets/half.png" alt="" className='' />

                                </div>

                            </div>
                            <div className='relative '>
                                <div className='absolute flex gap-3 left-90 top-0 w-40'>
                                    <img src="src/assets/left.png" alt="" />
                                    <img src="src/assets/right.png" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* section6 */}

                    <h1 className='ml-50 py-4 text-black text-2xl font-bold mt-10'>Old Soul, Jazz & Disco</h1>
                    <p className='w-100 text-center text-sm ml-35 py-0'>
                        A crate digger’s playground! These are our most classic sounds that represent the 'Golden Age' of music.
                    </p>
                    <div className='flex gap-155 w-full mt-'>
                        <div className='mt-8 flex flex-col gap-4 w-[75%]'>
                            <div className='flex gap-4'>
                                <div className='relative'>
                                    <img src="/src/assets/n1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w2.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w3.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='mt-[-32px]'>
                                    <img src="/src/assets/half.png" alt="" className='' />

                                </div>

                            </div>
                            <div className='relative '>
                                <div className='absolute flex gap-3 left-90 top-0 w-40'>
                                    <img src="src/assets/left.png" alt="" />
                                    <img src="src/assets/right.png" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* section6 */}

                    <h1 className='ml-60 py-4 text-black text-2xl font-bold mt-10'>Recent Releases</h1>
                    <p className='w-100 text-center text-[#CD4848] text-sm ml-35 py-0'>
                        View All
                    </p>
                    <div className='flex gap-155 w-full mt-'>
                        <div className='mt-8 flex flex-col gap-4 w-[75%]'>
                            <div className='flex gap-4'>
                                <div className='relative'>
                                    <img src="/src/assets/n1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w2.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w3.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='relative'>
                                    <img src="/src/assets/w1.png" alt="" />
                                    <img src="/src/assets/play.png" alt="" className='absolute top-15 left-15' />
                                </div>
                                <div className='mt-[-32px]'>
                                    <img src="/src/assets/half.png" alt="" className='' />

                                </div>

                            </div>
                            <div className='relative '>
                                <div className='absolute flex gap-3 left-90 top-0 w-40'>
                                    <img src="src/assets/left.png" alt="" />
                                    <img src="src/assets/right.png" alt="" />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default Sound
