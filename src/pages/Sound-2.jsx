import React from 'react'
import NavBar from '@/components/NavHome'

import { NavLink } from 'react-router-dom'
export default function Sound2() {
    return (
        <div>
            <NavBar />
            <div className='flex ml-35 mt-5 gap-5  w-100% '>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-black font-extrabold cursor-pointer '>Sounds</h1>
                    <div>

                        <NavLink to="/sound">
                            {({ isActive }) => (
                                <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                    Browse
                                </h1>
                            )}
                        </NavLink>

                        <NavLink to="/Charts">
                            {({ isActive }) => (
                                <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                    Charts
                                </h1>
                            )}
                        </NavLink>
                    </div>
                    <div>
                        <h1 className='text-black '>Your Library</h1>
                        <NavLink to="/Sound2">
                            {({ isActive }) => (
                                <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                    Sound
                                </h1>
                            )}
                        </NavLink>
                    </div>
                </div>
                <img src="src/assets/line.png" alt="" className='h-950' />
                <div className='flex flex-col '>
                    <h1 className=' text-red-600 mb-5 font-bold ml-60'>You are currently viewing company sounds</h1>
                    <hr className='w-240' />
                    <div className='mt-10 relative '>
                        <img src="/src/assets/m1.png" alt="" className='px-10 h-45 ' />
                        <div className='absolute top-10 left-70'>
                            <h1 className='font-semibold text-xl text-white mb-5 '>Subscribe to download sounds from 620 Packs</h1>
                            <img src="/src/assets/button.png" alt="" className='ml-30 cursor-pointer' />
                        </div>

                    </div>
                    <div className='  flex gap-3'>
                        <div className=' mt-5 ml-10 w-85 h-60 bg-black rounded-2xl'>

                            <img src="/src/assets/insideblacky.png" alt="" className='pb-5 ml-25 mt-4' />
                            <img src="/src/assets/Power.png" alt="" className='pb-5 ml-25' />
                            <img src="/src/assets/all.png" alt="" className='ml-13' />
                        </div>
                        <div className='mt-5 relative'>
                            <img src="/src/assets/b1.png" alt="" className='w-145 h-60' />
                            <img src="/src/assets/grayshade.png" alt="" className='absolute top-0 h-60' />
                            <div className='absolute top-12 left-5'>
                                <img src="/src/assets/Power.png" alt="" className='pb-5' />
                                <p className='text-white text-sm pr-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
                                    'lorem ipsum' will uncover many web sites still in their infancy.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
