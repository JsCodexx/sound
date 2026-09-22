import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import PackCard from '@/components/PackCard'
import { Labeldata } from '@/api/Sounds/labels'
import SideBar from '@/components/SideBar'
import { CarouselSize } from '@/components/Carousel'
import { useState } from 'react'
import { useEffect } from 'react'
import { Packdata } from '@/api/Sounds/packs'
import { useContext } from 'react'
import { CreateLoaders } from '@/contextApi/context'
import { BlocksWave } from '@/components/ui/Loader'
import { useNavigate } from 'react-router-dom'



function Sound() {
    const { showloading, hideloading, loading } = useContext(CreateLoaders);
    const navigate = useNavigate()
    const [label, setLabel] = useState()
    const [pack, setPack] = useState()


    // labeldata
    async function resdata() {
        try {
            showloading()
            const labelData = await Labeldata()
            const dataRemaing = labelData.data.items
            setLabel(dataRemaing)
            console.log(dataRemaing, "label")

        } catch (error) {
            if (error?.response?.status === 401) {
                navigate("/login")
            }
        } finally {
            hideloading()
        }
    }
    useEffect(() => {
        resdata()

    }, [])

    // packsdata
    async function datapack() {
        try {
            showloading()
            const labelData = await Packdata()
            const dataRemaing = labelData.data.items
            setPack(dataRemaing)
            console.log(dataRemaing, "pack")

        } catch (error) {
            if (error?.response?.status === 401) {
                navigate("/login")
            }
        } finally {
            hideloading()
        }

    }
    useEffect(() => {
        datapack()

    }, [])

    return (
        <>
            <NavBar />
            <div className='mt-5'>
                <SideBar variant="mobileSide" className="md:hidden block" />
            </div>
            <div className=' flex flex-col justify-center items-center'  >

                <div className='w-full max-w-360 '>

                    <h1 className=' text-red-600   text-center my-2 font-bold'>You Are Currently Viewing Company Sounds</h1>
                    <hr />
                    <div className='flex md:gap-0 h-10'>

                        <div>
                            <SideBar variant="desktop" className="md:block  hidden" />
                        </div>
                        <div className='w-full '>
                            <div className=' w-full h-90 relative lg:block hidden ' >
                                <img src="/src/assets/image86.png" alt="" className='absolute top-[5%]  left-[2%] w-[93%]' />
                                <p className='absolute top-[50%] left-[10%] text-white font-bold text-4xl'>Vocal Future <span className='font-light'>Electronica</span> </p>
                                <img src="/src/assets/f1.png" alt="" className='absolute top-[5%] left-[53%] w-[43%]' />
                            </div>
                            <div className='flex  my-2  md:ml-10'>
                                <TabsLine />
                            </div>
                            <hr />

                            <div className='w-full lg:flex-row    flex-col flex gap-0'>
                                {/* section 1 */}
                                <div className='lg:w-205 md:w-150'>
                                    <div className='flex flex-col  justify-center items-center px-3 '>
                                        <div className='flex flex-col  justify-center  items-center my-5'>
                                            <h1 className=' md:py-4 text-[#404041] md:text-2xl font-semibold'>Start Here: Collections</h1>
                                            <p className=' text-center text-[#909090] font-semibold text-sm  py-0'>
                                                No matter what genre of music you make, get instant inspiration from some of our team’s favorite Sounds on Splice.
                                            </p>
                                        </div>

                                        <div className='  flex justify-center item-center'>
                                            {loading && <BlocksWave />}
                                            {!loading && <CarouselSize packs={pack} />}

                                        </div>
                                    </div>

                                    <div className='flex flex-col px-3'>
                                        <div className='flex flex-col justify-center ml-5 md:items-center my-5'>
                                            <h1 className=' py-4 text-[#404041]  md:text-2xl font-semibold'>Spotlight: Sample Magic</h1>
                                            <p className=' md:text-center text-sm text-[#909090] font-semibold  py-0'>
                                                As one of the world's leading providers of pro-audio loops and samples, Sample Magic puts the world of electronic music at your finger tips.
                                            </p>
                                        </div>
                                        <div className='flex ml-0 justify-center item-center'>
                                            {loading && <BlocksWave />}
                                            {!loading && <CarouselSize variant="crouse" packs={pack} />}
                                        </div>
                                    </div>
                                    <div className='flex flex-col px-3'>
                                        <div className='flex flex-col justify-center ml-5 md:items-center my-5'>
                                            <h1 className=' py-4 text-[#404041] md:text-2xl font-semibold'>All Around the Globe</h1>
                                            <p className=' md:text-center  md:w-full text-[#909090] font-semibold text-sm  py-0'>
                                                Take a journey through the Middle East, Caribbean, Taiwan, Europe, Africa, and all places in between as these packs explore ancient instruments and modern techniques from the four corners of the earth.
                                            </p>
                                        </div>
                                        <div className='flex ml-0 justify-center item-center'>
                                            {loading && <BlocksWave />}
                                            {!loading && <CarouselSize variant="crouse" packs={pack} />}
                                        </div>
                                    </div>
                                    <div className='flex flex-col px-3'>
                                        <div className='flex flex-col justify-center ml-5 md:items-center my-5'>
                                            <h1 className=' py-4 text-[#404041] md:text-2xl font-semibold'>Celebrate AAPI Creators </h1>
                                            <p className='  md:text-center  md:w-full text-sm text-[#909090] font-semibold py-0'>
                                                Celebrate AAPI month with us as we dive into this curation of our favorite sample packs by Asian, Asian-American and Pacific Island creators.
                                            </p>
                                        </div>
                                        <div className='flex ml-0 justify-center item-center'>
                                            {loading && <BlocksWave />}
                                            {!loading && <CarouselSize variant="crouse" packs={pack} />}
                                        </div>
                                    </div>
                                    <div className='flex flex-col px-3'>
                                        <div className='flex flex-col justify-center ml-5 md:items-center my-5'>
                                            <h1 className=' py-4 text-[#404041] md:text-2xl font-semibold'>In Case You Missed It...</h1>
                                            <p className=' md:text-center text-[#909090] font-semibold  md:w-full text-sm  py-0'>
                                                We get it, life's moving fast. So don't worry if you missed something. We got your back. Get new inspiration from this collection of hidden gems.        </p>
                                        </div>
                                        <div className='flex ml-0 justify-center item-center '>
                                            {loading && <BlocksWave />}
                                            {!loading && <CarouselSize variant="crouse" packs={pack} />}
                                        </div>
                                    </div>
                                    <div className='flex flex-col px-3'>
                                        <div className='flex flex-col justify-center ml-5 md:items-center my-5'>
                                            <h1 className=' py-4 text-[#404041] md:text-2xl font-semibold'>Old Soul, Jazz & Disco</h1>
                                            <p className='  md:text-center text-sm text-[#909090] font-semibold  md:w-full  py-0'>
                                                A crate digger’s playground! These are our most classic sounds that represent the 'Golden Age' of music.    </p>
                                        </div>
                                        <div className='flex ml-0 justify-center item-center'>
                                            {loading && <BlocksWave />}
                                            {!loading && <CarouselSize variant="crouse" packs={pack} />}
                                        </div>
                                    </div>
                                    <div className='flex flex-col px-3'>
                                        <div className='flex flex-col justify-center ml-5 md:items-center my-5'>
                                            <h1 className=' py-4 text-[#404041] md:text-2xl font-semibold'>Start Here: Collections</h1>
                                            <p className='  md:text-center text-sm text-[#909090] font-semibold md:w-full  py-0'>
                                                No matter what genre of music you make, get instant inspiration from some of our team’s favorite Sounds on Splice.
                                            </p>
                                        </div>
                                        <div className='flex ml-0 justify-center item-center'>
                                            {loading && <BlocksWave />}
                                            {!loading && <CarouselSize variant="crouse" packs={pack} />}
                                        </div>
                                    </div>
                                    <div className='flex flex-col px-3'>
                                        <div className='flex flex-col text-center my-5'>
                                            <h1 className=' py-4 text-[#404041] md:text-2xl font-semibold'>Recent Releases</h1>
                                            <p className='  md:text-center text-sm text-[#909090] font-semibold py-0'>
                                                View All
                                            </p>
                                        </div>
                                        <div className='flex md:ml-0 justify-center item-center'>
                                            {loading && <BlocksWave />}
                                            {!loading && <CarouselSize variant="crouse" packs={pack} />}
                                        </div>
                                    </div>
                                </div>
                                {/* section2 */}
                                <div className='lg:w-60 px-3 '>
                                    <div className='flex justify-between mt-25 mx-3'>
                                        <h1 className='font-semibold text-[#404041] md:text-xl'>Top Packs</h1>
                                        <p className='text-sm text-[#909090] font-semibold pt-1'>View All</p>
                                    </div>
                                    <div className='  mt-5 flex gap-3 flex-col '>
                                        {loading && <BlocksWave />}

                                        {!loading && pack?.map((data, index) => (
                                            <div className=' text-[10px] '>
                                                <PackCard
                                                    key={index}

                                                    title={data.title}
                                                    pack={data.status}
                                                    id={data.id}
                                                    ChangeColoum={Math.floor(index / 1) % 2 == 0}
                                                    variant="small"
                                                />
                                            </div>

                                        ))}
                                    </div>
                                    <div className='flex justify-between mt-7 mx-3'>
                                        <h1 className='bold md:text-xl text-[#404041] font-semibold'>Top Labels</h1>

                                    </div>
                                    <div>

                                        {loading && <BlocksWave />}

                                        {!loading && label?.map((data, index) => (
                                            <div className=' text-[10px] '>
                                                <PackCard
                                                    key={index}
                                                    title={data.name}
                                                    pack={data.verified}
                                                    id={data.id}
                                                    ChangeColoum={Math.floor(index / 1) % 2 == 0}
                                                    variant="small"
                                                />
                                            </div>

                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>



    )
}

export default Sound
