import React, { act, useEffect } from 'react'
import NavBar from '@/components/NavHome'
import { Footer2 } from '@/components/footer2'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { TabsLine } from '@/components/Menu'
export default function LandingPage() {
    const [index, setIndex] = useState(0)
    
    const img = [
        {
            src: " /src/assets/Mask group.jpg",
            text: "waleed"
        }
        ,
        {
            src: " /src/assets/p1.png",
            text: "Ali"
        },
        {
            src: " /src/assets/p2.png",
            text: "Abdullah"
        },
        {
            src: " /src/assets/p3.png",
            text: "waleed"
        },


    ]


    return (
        <>
            <NavBar variant="landing" />
            <div className='bg-[#CD4848] w-full h-15'>
                <p className='text-white text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
            </div>


            <div className='relative  mx-auto container max-w-7xl '>

                <div className="relative ">
                    <img
                        src="/src/assets/emoji.png"
                        alt=""

                    />

                    <h1 className="font-poppins font-black absolute animate-typing whitespace-pre-wrap overflow-hidden top-[50px] left-[121px] leading-none text-white text-[55px] w-[370px] h-[183px]">
                        Step into the
                        producer's
                        playground
                    </h1>

                    <p className="font-poppins absolute leading-none top-[250px] left-[121px] text-white text-[20px] w-[512px] h-[65px]">
                        Explore the world's best sample library and an unmatched marketplace of plugins and DAWs.
                    </p>

                    <Link to="/land">
                        <button className="absolute top-75 left-[121px] cursor-pointer bg-[#CD4848] text-white font-bold px-4 py-3 text-sm rounded-sm">
                            Try Free
                        </button>
                    </Link>
                </div>


                <div className='flex'>
                    <div >
                        <img className='absolute right-190 top-160' src="src/assets/headphone.png" alt="" width={550} />
                    </div>
                    <div className=' absolute left-125 top-190'>
                        <p className='mb-3 text-gray-500'>Sound</p>
                        <h1 className='text-3xl font-Poppins font-bold mb-3 '>A catalog so deep, it’s dangerous.</h1>
                        <p className='w-100 text-gray-500'>Expertly created and curated samples in any style imaginable. Start swimming in sound.</p>
                        <button className='absolute  left-[1px] cursor-pointer  bg-black  font-bold pl-4 pr-4 pb-2 pt-2 
                 text-sm  w-auto mt-4 rounded-sm px-1 py-1 text-white ml-1 '>EXPLORE SOUNDS</button>

                    </div>

                </div>
                <div >
                    < img className='top-250 absolute' src="/src/assets/audience.png" alt="" />
                    <img className='top-250 absolute' src="/src/assets/shade.png" alt="" />
                    <div className='top-280 absolute left-50 text-right '>
                        <p className='text-white '>Connected Experience</p>
                        <h1 className='text-white text-2xl py-2'>A Workflow That Actually Flows.</h1>
                        <p className='w-100 text-white text-right'>Preview samples in your track’s key and tempo, drug and drop
                            sounds into your DAW, and organize your
                            favorite samples, MIDI and presets in one place.</p>
                    </div>
                    <img src="/src/assets/whiteCircle.png" alt="" className='top-300 absolute left-221  ' width={380} />
                    <img src="/src/assets/head.png" alt="" className='top-260 absolute left-195 w-105  ' />
                    <img src="/src/assets/blackShade.png" alt="" className='top-370 absolute left-0  ' />
                    <img src="/src/assets/mask.png" alt="" className='top-370 absolute left-0  ' />
                    <img src="/src/assets/lofigirl.png" alt="" className='top-376 absolute left-20  ' width={290} />
                    <div className='top-395 absolute left-120  '>
                        <p className='text-gray-400'>Gear</p>
                        <h1 className='text-white text-2xl py-3'>Build A Drool-Worthy Studio, Affordably.</h1>
                        <p className='w-100 pb-2 text-gray-400'>The industry’s top software, all in one place, on payment plans built to work for you.</p>
                        <button className=' cursor-pointer  bg-red-400 text-white font-bold pl-4 pr-4 pb-2 pt-2 
                 text-sm  w-auto mt-4 rounded-sm px-1 py-1 t ml-1 '>EXPLORE GEAR</button>
                    </div>
                    <img src="/src/assets/cheee.png" alt="" className='top-435 absolute left-250  ' />
                    <img src="/src/assets/boy.png" alt="" className='top-480 absolute left-0  ' />
                    <img src="/src/assets/bluewhale.png" alt="" className='top-480 absolute left-0 h-119 ' />
                    <div className='text-right top-520 absolute left-50 text-white'>
                        <p>Technology</p>
                        <h1 className='text-2xl py-3'>Crate Dig Without he Dust.</h1>
                        <p className='w-100'>Our intelligent search tools help you discover sounds you would normally have to dig
                            to find. Tech breaks the sweat, not you.

                        </p>
                    </div>

                    <div>
                        <div>
                            <img src="/src/assets/Vector.png" alt="" className='text-right top-610 absolute left-30 w-70 h-120' />


                            <h1 className='font-extrabold text-white text-xl top-705 absolute left-57'>{img[index].text}</h1>
                            <p className=' text-white text-[10px] top-712 absolute left-57'>Investor Group Coordinator</p>

                            <img src={img[index].src} alt="" className='text-right top-620 absolute left-60 w-50 h-80' />





                        </div>
                        <div className='text-left top-620 absolute left-160 ' >
                            <p className='text-[#808080]'>What creators are saying about Splice</p>
                            <img src="/src/assets/Quotes.png" alt="" className='pt-10' />
                            <p className='text-red-500 font-extrabold text-4xl'> Awesome <span className='text-[#202020] font-light  font-Poppins'>platform</span></p>
                            <p className='w-100 text-[#808080] pt-5'>I am very impressed with this platform and i love the features. It is very fast. I got the same thing what I expected for.</p>
                            <img src="/src/assets/Quotes.png" alt="" className='pt-20 ml-90' />
                            <div className='flex mt-7 ml-70 gap-3'>

                                {index === 0 ? <button onClick={() => { setIndex(0) }}> <p >1____</p></button> : <button onClick={() => { setIndex(0) }}> <p>1</p></button>}
                                {index === 1 ? <button onClick={() => { setIndex(1) }}> <p>2____</p></button> : <button onClick={() => { setIndex(1) }}> <p>2</p></button>}
                                {index === 2 ? <button onClick={() => { setIndex(2) }}> <p>3____</p></button> : <button onClick={() => { setIndex(2) }}> <p>3</p></button>}
                                {index === 3 ? <button onClick={() => { setIndex(3) }}> <p>4____</p></button> : <button onClick={() => { setIndex(3) }}> <p>4</p></button>}

                            </div>
                        </div>
                    </div>

                    <img src="/src/assets/darkblue.png" alt="" className=' top-740 absolute left-0 h-130 w-400' />
                    <img src="/src/assets/head.png" alt="" className=' top-740 absolute left-0 w-100' />
                    <div className=' top-785 absolute left-125 '>
                        <h1 className='text-[#9EBDE0] text-2xl font-bold'>Try<span className='text-white'>LOGO</span>Today</h1>
                        <button className='cursor-pointer  bg-red-400 text-white font-bold pl-4 pr-4 pb-3 pt-3 
                 text-sm  w-auto mt-4 rounded-sm px-1   ml-1 '>START TRIAL</button>
                    </div>
                </div>

                <div className='className= top-870 absolute left-0 w-full '>
                    <Footer2 />

                </div >

            </div>


        </>
    )
}
