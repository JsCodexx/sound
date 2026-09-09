import React from 'react'
import Nav from '@/components/Nav'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Register() {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(true)
    }
    function close() {
        setOpen(false)
    }
    return (
        <div className=''>
            <div className='relative ' >
                {/* <Nav /> */}
                <div className='flex w-full'>
                    <div className='relative lg:block hidden w-250'>
                        <img className='h-screen ' src="/src/assets/blue.png" alt="" />
                        <img src="/src/assets/rectangle.png" alt="" className='absolute left-10 top-13' />
                        <img src="/src/assets/beats.png" alt="" className='absolute left-20 top-20' />
                        <img src="/src/assets/c.png" alt="" className='absolute left-38 top-15' />
                        <img src="/src/assets/c.png" alt="" className='absolute left-20 bottom-110' />
                        <img src="/src/assets/girl.png" alt="" className='absolute left-65 top-10' />
                        <img src="/src/assets/Rectangle 2 (2).png" alt="" className='absolute left-70 top-100' />
                        <img src="/src/assets/l.png" alt="" className='absolute left-80 top-110' />

                    </div>
                    <div className='flex flex-col justify-center items-center  w-150 '>
                        <div className='flex flex-col mr-25 justify-start items-start px-3'>
                            <img src="/src/assets/Group11.png" alt="" className=' mt-20' />
                            <h2 className=' mt-4 text-2xl font-bold text-gray-700'>Sign up</h2>
                            <p className=' mt-1 text-sm text-gray-700 p-0'>See what is going on with your business</p>
                        </div>

                        <img src="/src/assets/Frame1.png" alt="" className=' mt-6' />

                        <div className='flex flex-col lg:w-90 mt-4 text-gray-700'>
                            <label className='text-[#909090] font-semibold' htmlFor="">Full Name</label>
                            <input type="text" className="py-1 px-2 border border-[#D6EAFF] rounded-[4px]" />
                        </div>
                        <div className='flex flex-col lg:w-90  mt-4 text-gray-700'>
                            <label className=' text-[#909090] font-semibold' htmlFor="">User Name</label>
                            <input type="text" className="py-1 px-2 border border-[#D6EAFF] rounded-[4px]" />
                        </div>
                        <div className='flex flex-col lg:w-90 mt-4 text-gray-700'>
                            <label className=' text-[#909090] font-semibold' htmlFor="">Email</label>
                            <input type="text" className="py-1 px-2 border border-[#D6EAFF] rounded-[4px]" />
                        </div>
                        <div className='flex flex-col lg:w-90  mt-4 text-gray-700'>
                            <label className=' text-[#909090] font-semibold' htmlFor="">Password</label>
                            <input type="text" className="py-1 px-2 border border-[#D6EAFF] rounded-[4px]" />
                        </div>
                        <div className='flex justify-evenly mt-5'>
                            <p className='text-sm '>By Signing up i Agree the term and conditions</p>
                        </div>
                        <Link to="/login">   <button className='bg-black py-2 w-60 l rounded-[4px] text-center lg:w-90 text-white mt-5 ' >
                            Sign up
                        </button></Link>
                        <p className=' mt-5 text-gray-500'>I already have an account.<span className='text-black  font-bold cursor-pointer' >Signup</span> </p>
                    </div>

                </div>
                {open && <div className='absolute left-40 top-160'><AlertDemo set={close} /></div>}


            </div>
        </div>
    )
}

export default Register
