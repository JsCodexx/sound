import React from 'react'
import NavBar from '@/components/NavHome'
import { TabsLine } from '@/components/Menu'
import { CardDemo } from '@/components/Card-2'
import SideBar from '@/components/SideBar'
import { useContext } from 'react'
import { CreateLoaders } from '@/contextApi/context'
import { BlocksWave } from '@/components/ui/Loader'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Labeldata } from '@/api/Sounds/labels'
export default function Label() {
    const { showloading, hideloading, loading } = useContext(CreateLoaders);
    const navigate = useNavigate()
    const [label, setLabel] = useState()


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


    return (
        <div>
            <NavBar />
            <div className='mt-5'>
                <SideBar variant="mobileSide" className="md:hidden block" />
            </div>
            <main className="mx-auto w-full max-w-360  ">
                <div className='flex   mt-5 gap-0  w-100% overflow-x-hidden'>

                    <div className='mt-11'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>

                    <div className=' w-full'>
                        <h1 className=' text-red-400  md:font-bold text-center mb-5'>You are currently viewing company sounds</h1>
                        <hr className='w-1050 absolute  right-0 ' />
                        <div className=' w-full h-90 relative lg:block hidden ' >
                            <img src="/src/assets/image86.png" alt="" className='absolute top-[5%]  left-[2%] w-[93%]' />
                            <p className='absolute top-[50%] left-[10%] text-white font-bold text-4xl'>Vocal Future <span className='font-light'>Electronica</span> </p>
                            <img src="/src/assets/f1.png" alt="" className='absolute top-[5%] left-[53%] w-[43%]' />

                        </div>
                        <div className='flex  flex-col text-[#5C5C5C] gap-5 md:ml-8 '>
                            <div className='flex gap-6 cursor-pointer mb-0'>
                                <TabsLine />
                            </div>
                            <hr className='mx-2' />
                            <div className='flex font-semibold w-250 h-full flex-wrap gap-2 lg:ml-2  justify-center item-center '>
                                {loading && <BlocksWave />}
                                {!loading && label?.map((data) => (
                                    <CardDemo
                                        title={data.name}
                                        packs={data.id}
                                        tags={data.genres}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>


            </main>
        </div>
    )
}
