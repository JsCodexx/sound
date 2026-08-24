import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
export default function SideBar() {
    const [current, setCurrent] = useState()
    console.log(current)


    return (
        <div className=''>
            <div className='flex flex-col gap-10 '>
                <h1 className='text-black font-extrabold cursor-pointer '>{current}</h1>
                <div>

                    <NavLink to="/sound" onClick={() => setCurrent("Browse")}>
                        {({ isActive }) => (

                            <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`} >
                                Browse
                            </h1>


                        )}
                    </NavLink>

                    <NavLink to="/Charts" onClick={() => setCurrent("Charts")}>
                        {({ isActive }) => (
                            <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                Charts
                            </h1>
                        )}
                    </NavLink>
                </div>
                <div c>
                    <h1 className='text-black '>Library</h1>
                    <NavLink to="/Sound2" onClick={() => setCurrent("Sound")}>
                        {({ isActive }) => (
                            <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                Sound
                            </h1>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
