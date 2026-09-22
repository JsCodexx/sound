import React from 'react'
import NavBar from '@/components/NavHome'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PackCard from '@/components/PackCard'
import SideBar from '@/components/SideBar'
import { ComboboxBasic } from '@/components/Combobox'
import { Packdata } from '@/api/Sounds/packs'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { CreateLoaders } from '@/contextApi/context'
import { BlocksWave } from '@/components/ui/Loader'
import { useNavigate } from 'react-router-dom'
export default function Charts() {
    const [chartpack, setChartpack] = useState()
    const { showloading, hideloading, loading } = useContext(CreateLoaders);
    const navigate = useNavigate()
    console.log(chartpack)
    async function chart() {
        try {
            showloading()
            const data = await Packdata()
            const datamin = data.data.items
            setChartpack(datamin)
            console.log(datamin, "charts")
        } catch (error) {
            {
                if (error?.response?.status === 401) {
                    navigate("/login")
                }
            }
        } finally {
            hideloading()
        }

    }


    useEffect(() => {
        chart()
    }, [])

    return (
        <div>

            <main className="mx-auto w-full max-w-360  ">

                <div className='w-full'>
                    <NavBar />
                    <div className='mt-5 xl:hidden block'>
                        <SideBar variant="mobileSide" className="" />
                    </div>
                    <div className='flex  mt-5 md:gap-0 gap-3 relative w-auto'>

                        <div className='mt-10 lg:block  hidden'>
                            <SideBar variant="desktop" className="" />
                        </div>

                        <div className='flex flex-col gap-4 ml-3'>
                            <h1 className=' text-red-400  font-bold text-sm text-center mb-10'>You are currently viewing company sounds</h1>
                            <hr className='md:w-1050 w-0 absolute  right-0 top-10 ' />
                            <div className='flex gap-10 ml-3'>
                                <NavLink to="/Charts">
                                    {({ isActive }) => (
                                        <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                            Weekly top packs
                                        </h1>
                                    )}
                                </NavLink>

                                <NavLink to="/top labels">
                                    {({ isActive }) => (
                                        <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                            Weekly top labels
                                        </h1>
                                    )}
                                </NavLink>
                            </div>
                            <div className='border-none '>
                                <ComboboxBasic />
                            </div>

                            <div className='text-sm flex md:justify-between pr-25'>
                                <p className='text-[#838383]'>PACKS</p>
                                <p className='text-[#838383]'>CONTENTS</p>
                            </div>
                            <div className='w-full flex flex-col  px-3'>
                                {loading && <BlocksWave />}
                                {!loading && chartpack?.map((data, index) => (
                                    <PackCard
                                        key={index}
                                        id={data.id}

                                        title={data.title}
                                        description={data.status}
                                        img={data.img}
                                        num={data.num}
                                        num1={data.price}
                                        ChangeRow={index % 2 === 1}
                                        showArrow={data.price}
                                        variant="chart"
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
