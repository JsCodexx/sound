import React from 'react'
import NavBar from '@/components/NavHome'
import SideBar from '@/components/SideBar'
import { NavigationMenuDemo } from '@/components/Arrowtabs'
import PackCard from '@/components/PackCard'
export default function BuyPage() {
    const cardData = [
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/T1.png"

        },
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/t2.png"

        },
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/T1.png"

        },
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/t2.png"

        },
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/T1.png"

        },
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/t2.png"

        },
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/T1.png"

        },
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/t2.png"

        },
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/T1.png"

        },
        {
            src: "/src/assets/small1.png",
            icon: "/src/assets/wave.png",
            title: "os_Do_Kick_in",

            img: "/src/assets/triowave.png",
            time: "0.00",
            keys: "-",
            BPM: "-",
            three: "/src/assets/t2.png"

        },
    ]
    return (
        <div>
            <NavBar />
            <main className="mx-auto w-full max-w-[1440px] px-8 relative">
                <div className=''>
                    <div className='flex md:ml-8 mt-5 gap-1.5 md:gap-10   '>
                        <SideBar />
                        <img src="src/assets/line.png" alt="" className='h-320' />
                        <div>
                            <h1 className=' text-red-600 text-sm  font-bold md:ml-60 mb-7'>You are currently viewing company sounds</h1>
                            <hr className='md:w-250 md:block hidden' />
                            <div className='md:flex gap-6 '>
                                <div className=' mt-5 md:ml-5 w-85 h-65 bg-black rounded-xl'>

                                    <img src="/src/assets/insideblacky.png" alt="" className='pb-5 ml-25 pt-4' />
                                    <img src="/src/assets/Power.png" alt="" className='pb-5 ml-25 ' />
                                    <img src="/src/assets/all.png" alt="" className='ml-13' />
                                </div>
                                <div className='mt-13 ml-2' >
                                    <p className='text-[#A7A7A7]'>Converse Sample Library</p>
                                    <h1 className='text-[#3E3E3E] my-2  md:text-2xl font-bold'>Devonté Hynes - Analog Synth</h1>
                                    <p className='text-[#A7A7A7]'>Indie Dance • 552 Samples</p>
                                    <div className='flex gap-3 mt-8'>
                                        <button className='bg-[#CD4848] w-[115px] h-[35px] rounded-4xl text-white font-semibold'>GET PACK</button>
                                        <button className='border-[#CD4848] border-2 w-[115px] h-[35px] rounded-4xl text-red-700 font-semibold'>PREVIEW</button>
                                        <img src="/src/assets/heart.png" alt="" className='w-5 h-5 mt-2 cursor-pointer' />
                                    </div>
                                </div>
                            </div>

                            <p className='text-[#5F5F5F] md:font-medium mt-5 md:ml-5 ml-3 w-80 md:w-250'>WUNC in Durham, NC during Moogfest to record some samples for the Converse Rubber
                                Tracks Sample Library before his headlining set later that night. Throughout the hour-long
                                session Dev captured sounds from the MiniMoog Model D, Sub 37,
                                Moogerfooger MF-104M delay and Moog Mother-32 analog synthesizer.</p>
                            <h1 className='text-[#000000] text-xl mt-5 ml-5 font-bold'>Samples</h1>
                            <NavigationMenuDemo />
                            <img src="/src/assets/tri.png" alt="" className='mt-4 ml-5' />
                            <p className='text-[#868E96] mt-8 ml-6'>4,45,562 results</p>
                            <div className='bg-[#EAEAEA] w-250 h-10 ml-5 flex gap-62 text-[#868E96] pt-3 text-sm mt-3'>
                                <div className='flex gap-32'>
                                    <p className='pl-4'>Pack</p>
                                    <p>Filename</p>
                                </div>
                                <div className='flex gap-10'>
                                    <p>Time</p>
                                    <p>Key</p>
                                    <p>BPM</p>
                                </div>

                            </div>
                            <div className=' ml-5 mt-0 '>
                                {cardData.map((data, index) => (
                                    <div className=' text-[10px] '>
                                        <PackCard
                                            key={index}
                                            src={data.src}
                                            title={data.title}
                                            img={data.img}
                                            icon={data.icon}
                                            time={data.time}
                                            keys={data.keys}
                                            BPM={data.BPM}
                                            three={data.three}
                                            ChangeColoum={index % 2 === 1}
                                            variant="buy"
                                        />
                                    </div>

                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>

    )

}
