import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { CardDemo } from '@/components/Card-2'
import SideBar from '@/components/SideBar'
import { useState } from 'react'
import { useEffect } from 'react'
import { Songs } from '@/api/Sounds/songs'
import { useContext } from 'react'
import { CreateLoaders } from '@/contextApi/context'
import { BlocksWave } from '@/components/ui/Loader'
import { Createuser } from '@/contextApi/usercontext'
import { useNavigate } from 'react-router-dom'
export default function Midi() {
    const [song, setSong] = useState()
    const navigate = useNavigate()
    const { showloading, hideloading, loading } = useContext(CreateLoaders);
    const { fullname } = useContext(Createuser);
    console.log(fullname)




    // song api
    async function songData() {
        try {
            showloading()

            const datasong = await Songs()
            const minData = datasong.data.items
            setSong(minData)
            console.log(datasong)
        } catch (error) {
            if (error?.response?.status === 401) {
                navigate("/login")
            }

        } finally {
            hideloading()
        }

    }
    useEffect(() => {
        songData()
    }, [])

    return (
        <div>
            <NavBar />
            <div className='mt-5'>
                <SideBar variant="mobileSide" className="md:hidden block" />
            </div>
            <main className="mx-auto w-full max-w-[1440px]  ">
                <div className='flex  mt-5 gap-0  w-100% overflow-x-hidden'>

                    <div className='mt-11'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>


                    <div className=' w-full'>
                        <h1 className=' text-red-400  font-bold text-center mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <div className=' w-full h-90 relative lg:block hidden ' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-[5%]  left-[2%] w-[93%]' />
                            <p className='absolute top-[47%] left-[8%] text-white font-bold text-4xl'>Vocal Future <span className='font-light'>Electronica</span> </p>
                            <img src="/src/assets/f1.png" alt="" className='absolute top-[5%] left-[53%] w-[43%]' />
                        </div>
                        <div className=' flex flex-col text-[#5C5C5C] gap-5 '>
                            <div className='flex gap-6 cursor-pointer pt-3'>
                                <TabsLine />
                            </div>
                            <hr />
                            <div className='px-3 '>
                                <div className=' mt-2 mb-2 text-center lg:text-start '>
                                    <h1 className='font-bold text-xl'>Packs With MIDI Baselines</h1>

                                </div>

                                <div className='flex flex-wrap md:w-150 lg:w-full   gap-2 justify-center items-center  '>
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
                        </div>
                    </div>


                </div>


            </main>
        </div>
    )
}
