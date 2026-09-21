import React from 'react'
import NavBar from '@/components/NavHome'
import { Footer2 } from '@/components/footer2'
import Content from '@/components/Content'
import { useNavigate } from 'react-router-dom'
import { CardDemo } from '@/components/Card-2'
import { useState } from 'react'
import { useEffect } from 'react'
import { Songs } from '@/api/Sounds/songs'
import { useContext } from 'react'
import { CreateLoaders } from '@/contextApi/context'
import { BlocksWave } from '@/components/ui/Loader'
import { Createuser } from '@/contextApi/usercontext'



function Home() {
    const [song, setSong] = useState()
    const navigateLogin = useNavigate()
    const { showloading, hideloading, loading } = useContext(CreateLoaders);
    const { formData } = useContext(Createuser)





    // song api
    async function songData() {
        try {
            showloading()

            const datasong = await Songs()
            const minData = datasong.data.items
            console.log(datasong)
            setSong(minData)


        } catch (error) {
            if (error?.response?.status === 401) {
                navigateLogin("/login")

            }

        } finally {
            hideloading()
        }

    }
    useEffect(() => {
        songData()
    }, [])
    const navigate = useNavigate()

    function handlePricePage() {
        navigate("/price")
    }

    return (
        <div className=' '>
            <NavBar />

            <div className='bg-[#CD4848]  h-15'>
                <p className='text-white text-sm text-center pt-5 font-bold'>For a limited time, subscribe to here and get Live music lite for free.   <span className='text-yellow-500 cursor-pointer font-bold underline'>Get started</span> </p>
            </div>
            <div className='overflow-x-hidden flex flex-col justify-center items-center'>
                <div className=" w-100%  ">
                    <div className='text-center mt-5'>
                        <h1 className='font-bold text-3xl text-[#3A3A3A]'>Welcome <span className='text-green-500'>{formData.fullname}</span> </h1>
                        <p className='text-[#909090]'>Dive into the Splice subscription.</p>
                    </div>
                    <div className='mt-10 flex md:flex-row flex-col justify-center items-center gap-3'>
                        <div className='border-black border-1 bg-[#EEEEEE]  rounded-sm w-76 h-23  flex justify-evenly items-center'>
                            <div><img src="/src/assets/sign.png" alt="" /></div>
                            <div>
                                <h1 className='font-bold text-xl'>Sounds</h1>
                                <p className='text-gray-400 '>Royality-Free Samples</p>
                            </div>
                            <div><img src="/src/assets/arrowUp.png" alt="" /></div>
                        </div>
                        <div className='border-black border bg-[#EEEEEE] rounded-sm w-76 h-23  flex justify-evenly items-center'>
                            <div><img src="/src/assets/dollar.png" alt="" /></div>
                            <div>
                                <h1 className='font-bold text-xl'>Pricing</h1>
                                <p className='text-gray-400 '>Premium Sounds</p>
                            </div>
                            <div><img src="/src/assets/arrowUp.png" alt="" /></div>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col justify-center items-center px-2 gap-5'>
                        <div className=' mt-20 '>
                            <h1 className='md:text-2xl text-[#3A3A3A] font-bold mb-3'>How company name </h1>
                            <p className='mb-4 text-[#909090] font-semibold'>See what Splice is all about in this short video.</p>
                            <div className='relative'>
                                <img className='absolute top-0' src="/src/assets/black.png" alt="" width={500} />
                                <img src="/src/assets/pic.png" alt="" width={500} />
                                <img className='absolute top-15 md:top-25 md:left-50 left-25 ' src="/src/assets/play.png" alt="" width={80} />
                            </div>
                        </div>
                        <div className=' mt-20 '>
                            <h1 className='md:text-2xl text-[#3A3A3A] font-bold mb-3'>Find Your Plan</h1>
                            <p className='mb-4 text-[#909090] font-semibold'>See what Splice is all about in this short video.</p>
                            <div className='relative '>
                                <img className='absolute top-0' src="/src/assets/black.png" alt="" width={500} />
                                <img src="/src/assets/square.png" alt="" width={500} />
                                <img className='absolute top-15 md:top-25 md:left-50 left-25' src="/src/assets/play.png" alt="" width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className='flex flex-col justify-center items-center gap-3 mt-25'>
                            <h1 className='font-bold text-4xl text-[#3A3A3A]'>Sound</h1>
                            <p className='text-black font-medium'>What's New</p>
                            <p className='  text-[#909090] font-semibold'>What's new
                                Splice comes with access to millions of the freshest samples, one-shots, loops, MIDI and presets. Here’s the latest.</p>
                        </div>

                        <div className='flex flex-wrap w-full  gap-2 md:gap-6 justify-center items-center  '>
                            {loading && <BlocksWave />}
                            {!loading && song?.map((data, index) => (
                                <CardDemo
                                    key={index}

                                    title={data.title}
                                    packs={data.key}
                                    tags={data.pack_id}
                                    variant="Midi"
                                />
                            ))}
                        </div>

                    </div>
                    <div className='flex  justify-center items-center gap-3 '>
                        <img src="/src/assets/left.png" alt="" />
                        <img src="/src/assets/right.png" alt="" />
                    </div>
                    <div className='px-3'>
                        <div className='flex flex-col justify-center items-center gap-3 mt-25'>
                            <h1 className='font-bold text-4xl text-[#3A3A3A]'>What's Free</h1>
                            <p className='text-black font-medium'>What's New</p>
                            <p className=' text-[#909090] font-semibold '>What's new
                                Splice comes with access to millions of the freshest samples, one-shots, loops, MIDI and presets. Here’s the latest.</p>
                        </div>

                        <div className='flex flex-wrap w-full   gap-2 md:gap-6 justify-center items-center  ' key="100">
                            {loading && <BlocksWave />}
                            {!loading && song?.map((data, index) => (
                                <CardDemo


                                    title={data.title}
                                    packs={data.key}
                                    tags={data.pack_id}
                                    free={data.free}
                                    variant="Midi"
                                />
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4 '>
                        <img src="/src/assets/left.png" alt="" />
                        <img src="/src/assets/right.png" alt="" />
                    </div>
                    <div className='relative  mt-25 w-full'>
                        <img src="/src/assets/song.png" alt="" />
                        <div className='absolute top-0 lg:top-18 flex  flex-col text-center justify-center items-center w-full  '>
                            <h1 className='text-white md:text-3xl md:font-bold md:pb-3 '>Start Your Free Trial Today</h1>

                            <p className='text-white text-sm  md:pb-5 '>Get full access to Splice tools, skills, and free sounds.</p>
                            <button onClick={handlePricePage} className=' md:block hidden lg:block font-bold text-white text-sm  bg-[#CD4848] px-5 py-1 lg:px-10 lg:py-2 rounded-4xl '>Start Your Free Trial</button>
                            <p className='text-white text-sm  md:mt-3'>Try risk-free for 14 days.</p>
                        </div>

                    </div>
                </div>
                <Content />


            </div >
            <Footer2 />
        </div>
    )
}

export default Home
