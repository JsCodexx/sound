import React from 'react'
import Nav from '@/components/Nav'
import { AlertDemo } from '@/components/Alertpop'
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
        <div className='relative'>
            {/* <Nav /> */}
            <div className='flex'>
                <div className='relative'>
                    <img className='h-screen w-200' src="/src/assets/blue.png" alt="" />
                    <img src="/src/assets/rectangle.png" alt="" className='absolute left-10 top-13' />
                    <img src="/src/assets/beats.png" alt="" className='absolute left-20 top-20' />
                    <img src="/src/assets/c.png" alt="" className='absolute left-38 top-15' />
                    <img src="/src/assets/c.png" alt="" className='absolute left-20 bottom-110' />
                    <img src="/src/assets/girl.png" alt="" className='absolute left-65 top-10' />
                    <img src="/src/assets/Rectangle 2 (2).png" alt="" className='absolute left-70 top-100' />
                    <img src="/src/assets/l.png" alt="" className='absolute left-80 top-110' />

                </div>
                <div>
                    <img src="/src/assets/Group11.png" alt="" className='ml-10 mt-20' />
                    <h2 className='ml-10 mt-4 text-2xl font-bold text-gray-700'>Sign up</h2>
                    <p className='ml-10 mt-1 text-sm text-gray-700 p-0'>See what is going on with your business</p>
                    <img src="/src/assets/Frame1.png" alt="" className='ml-9 mt-6' />
                    <img src="/src/assets/sign.png" alt="" className='ml-22 mt-6' />
                    <div className='flex flex-col w-90 ml-10 mt-4 text-gray-700'>
                        <label className='text-gray-700' htmlFor="">Full Name</label>
                        <input type="text" className='border-[0.72px] border-[#D6EAFF] mt-2 ' />
                    </div>
                    <div className='flex flex-col w-90 ml-10 mt-4 text-gray-700'>
                        <label className='text-gray-700' htmlFor="">User Name</label>
                        <input type="email" className='border-[0.72px] border-[#D6EAFF] mt-2 ' />
                    </div>
                    <div className='flex flex-col w-90 ml-10 mt-4 text-gray-700'>
                        <label className='text-gray-700' htmlFor="">Email</label>
                        <input type="email" className='border-[0.72px] border-[#D6EAFF] mt-2 ' />
                    </div>
                    <div className='flex flex-col w-90 ml-10 mt-4 text-gray-700'>
                        <label className='text-gray-700' htmlFor="">Password</label>
                        <input type="password" className='border-[0.72px] border-[#D6EAFF] mt-2 ' />
                    </div>
                    <div className='flex justify-evenly mt-5'>
                        <p className='text-sm ml-10'>By Signing up i Agree the term and conditions</p>
                    </div>
                    <img onClick={handleOpen} src="/src/assets/Frame7.png" alt="" className='ml-10 mt-10 cursor-pointer' />
                    <p className='ml-22 mt-5 text-gray-500'>I already have an account<span className='text-black  font-bold cursor-pointer' >Signup</span> </p>
                </div>

            </div>
            {open && <div className='absolute left-40 top-100'><AlertDemo set={close} /></div>}


        </div>
    )
}

export default Register
