import React from 'react'
import NavBar from '@/components/NavHome'
import { Link } from 'react-router-dom'
export default function Charts() {
    return (
        <div>
            <NavBar />
            <div className='flex ml-35 mt-5 gap-5 relative w-auto'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-black font-extrabold cursor-pointer '>Sounds</h1>
                    <div>
                        <Link><h1 className='text-black font-bold cursor-pointer'>Browse</h1></Link>
                        <Link to="/Charts"><h1 className='text-black cursor-pointer'>Charts</h1></Link>
                    </div>
                    <div>
                        <h1 className='text-black '>Your Library</h1>
                        <h1 className='text-black cursor-pointer'>Sounds</h1>
                    </div>
                </div>
                <img src="src/assets/line.png" alt="" className='h-950' />
                <div className='flex flex-col gap-4'>
                    <h1 className=' text-red-400  font-bold ml-60'>You are currently viewing company sounds</h1>
                    <hr className='w-240 mr-0' />
                </div>

            </div>

        </div>
    )
}
