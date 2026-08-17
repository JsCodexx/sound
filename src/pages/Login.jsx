import { Link } from 'react-router-dom'
import React from 'react'
export default function Login() {
    return (
        <>
            <div>
                <div className='flex'>
                    <div className='bg-[#000000]  w-213.5 h-223.5 relative'>
                        <div className='w-[139.56px] absolute h-[209.7px] top-[25.45px] left-[63.96px] bg-[#CD4848]'>
                            <img src="/src/assets/S.png" alt="abc" width={50} className='ml-9 mt-2' />
                        </div>
                        <div className='w-[139.56px] absolute h-[209.7px] top-[25.45px] left-[225.94px] bg-[#CD4848]'>
                            <img src="/src/assets/O.png" alt="abc" width={50} className='ml-9 mt-2' />
                        </div>

                        <img src="/src/assets/Yellow.png" alt="abc" width={50} className='ml-9 mt-2 w-[130.01px] absolute h-[184.4px] top-[17.01px] left-[347.21px]' />

                        <div className='w-[139.56px] absolute h-[209.7px] top-[25.45px] left-[540.48px] bg-[#CD4848]'>
                            <img src="/src/assets/N.png" alt="abc" width={50} className='ml-9 mt-2' />
                        </div>
                        <div className='w-[139.56px] absolute h-[209.7px] top-[25.45px] left-[702.45px] bg-[#CD4848]'>
                            <img src="/src/assets/D.png" alt="abc" width={50} className='ml-9 mt-2' />
                        </div>
                        <div className='absolute top-60 left-70'>
                            <img src="/src/assets/Ellipse1.png" alt="" />
                        </div>
                        <div className='absolute top-44 left-78'>
                            <img src="/src/assets/image2(1).png" alt="" />
                        </div>
                        <div className='absolute top-140 left-58'>
                            <img src="/src/assets/Rectangle2.png" alt="" />
                            <h1 className='text-white text-2xl absolute bottom-8 left-20'>This Content Here Is Dummy</h1>
                            <p className='text-white text-sm  absolute top-10 left-15'>Start for free and get attractive offers from the community</p>
                        </div>
                    </div>
                    <div>
                        <img src="/src/assets/Group11.png" alt="" className='ml-10 mt-20' />
                        <h2 className='ml-10 mt-4 text-2xl font-bold text-gray-700'>Login to your Account</h2>
                        <p className='ml-10 mt-1 text-sm text-gray-700 p-0'>See what is going on with your business</p>
                        <img src="/src/assets/Frame1.png" alt="" className='ml-9 mt-6' />
                        <img src="/src/assets/sign.png" alt="" className='ml-22 mt-6' />
                        <div className='flex flex-col w-90 ml-10 mt-4 text-gray-700'>
                            <label className='text-gray-700' htmlFor="">Email</label>
                            <input type="email" className='border-[0.72px] border-[#D6EAFF] mt-2 ' />
                        </div>
                        <div className='flex flex-col w-90 ml-10 mt-4 text-gray-700'>
                            <label className='text-gray-700' htmlFor="">Password</label>
                            <input type="password" className='border-[0.72px] border-[#D6EAFF] mt-2 ' />
                        </div>
                        <div className='flex justify-evenly mt-5  '>
                            <p> Remember Me</p>
                            <p className='ml-4'> <Link to="/forget"> Forget Password? </Link></p>
                        </div>
                        <Link to="/home"><img src="/src/assets/Frame7.png" alt="" className='ml-10 mt-10 cursor-pointer' /></Link>
                        <p className='ml-22 mt-5 text-gray-500'>Not Registered? <Link to="/register"><span className='text-black  font-bold cursor-pointer' >Create an account</span></Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}
