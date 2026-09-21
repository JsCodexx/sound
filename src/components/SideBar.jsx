import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { DropdownMenuShortcuts } from './Dropdown'
export default function SideBar({ variant }) {
    const [current, setCurrent] = useState()
    console.log(current)


    return (
        <>
            {variant === "mobileSide" ?
                <>

                    <div className=''>
                        <DropdownMenuShortcuts variant="mobi" />
                    </div>


                </> :
                variant === "desktop" ?

                    <div className='md:block hidden'>
                        <div className='flex '>
                            <div className='flex flex-col gap-5 md:gap-10 mt-0 ml-5  md:ml-15'>
                                <h1 className='text-black font-extrabold cursor-pointer '>{current}</h1>
                                <div>

                                    <NavLink to="/sound" onClick={() => setCurrent("Browse")}>
                                        {({ isActive }) => (

                                            <h1 className={`text-[#909090] font-semibold cursor-pointer md:pr-0 pr-1 ${isActive ? 'font-bold text-black' : ''}`} >
                                                Browse
                                            </h1>


                                        )}
                                    </NavLink>

                                    <NavLink to="/Charts" onClick={() => setCurrent("Charts")}>
                                        {({ isActive }) => (
                                            <h1 className={`text-[#909090] font-semibold cursor-pointer ${isActive ? 'font-bold text-black' : ''}`}>
                                                Charts
                                            </h1>
                                        )}
                                    </NavLink>
                                </div>
                                <div >
                                    <h1 className='text-[#909090] font-semibold mb-4'> Library</h1>
                                    <NavLink to="/Sound2" onClick={() => setCurrent("Sound")}>
                                        {({ isActive }) => (
                                            <h1 className={`text-[#909090] font-semibold cursor-pointer ${isActive ? 'font-bold text-black' : ''}`}>
                                                Sounds
                                            </h1>
                                        )}
                                    </NavLink>
                                </div>
                            </div>
                            <div>
                                <img src="src/assets/line.png" alt="" className='h-650 md:ml-15 ' />
                            </div>
                        </div>
                    </div> : ""
            }

        </>
    )
}
