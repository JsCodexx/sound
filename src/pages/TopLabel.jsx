import React from 'react'
import NavBar from '@/components/NavHome'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PackCard from '@/components/PackCard'
import SideBar from '@/components/SideBar'
import { ComboboxBasic } from '@/components/Combobox'
import { useState } from 'react'
import { useEffect } from 'react'
import { Labeldata } from '@/api/Sounds/labels'
import { CreateLoaders } from '@/contextApi/context'
import { BlocksWave } from '@/components/ui/Loader'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
export default function TopLabel() {

    const [label, setLabel] = useState()
    const { showloading, hideloading, loading } = useContext(CreateLoaders);
    const navigate = useNavigate()
    console.log(label, "labels")
    async function Labels() {
        try {
            showloading()
            const data = await Labeldata()
            const datamin = data.data.items
            setLabel(datamin)
            console.log(datamin, "label")
        } catch (error) {
            if (error?.response?.status === 401) {
                navigate("/login")
            }
        } finally {
            hideloading()
        }

    }
    useEffect(() => {
        Labels()
    }, [])


    return (
        <div>
            <NavBar />
            <div className='mt-5  xl:hidden block'>
                <SideBar variant="mobileSide" className="" />
            </div>
            <main className="mx-auto w-full max-w-[1440px] ">
                <div className='flex mt-5 gap-3 md:gap-0 relative w-auto'>

                    <div className='mt-10 lg:block  hidden'>
                        <SideBar variant="desktop" className="" />
                    </div>
                    <div className='flex flex-col gap-4 ml-5'>
                        <h1 className=' text-red-400  font-bold text-center text-sm mb-10'>You are currently viewing company sounds</h1>
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
                        <ComboboxBasic />
                        <div className='text-sm flex  md:ml-40 justify-between '>
                            <p className='text-[#838383] '>LABEL</p>
                            <p className='text-[#838383] md:pr-50'>GENERES</p>
                            <p className='text-[#838383] pr-10'>TOTAL PACK</p>
                        </div>
                        <div className='w-full'>
                            {loading && <BlocksWave />}
                            {!loading && label?.map((data, index) => (
                                <PackCard
                                    key={index}
                                    id={data.id}

                                    title={data.name}
                                    description={data.genres}


                                    ChangeRow={index % 2 === 1}
                                    variant="label"

                                />
                            ))}

                        </div>
                    </div>
                </div>
            </main>
        </div>)
}
