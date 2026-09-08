import { Link } from 'react-router-dom'
import React from 'react'
export default function Login() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-360  max-w-360 h-screen'>
                <div className='flex w-full justify-center items-center'>
                    <div className='bg-[#000000] md:block hidden  w-[60%] h-screen '>
                        <div className='flex gap-8 mt-[5%]'>

                            <div className=' flex justify-center items-center bg-[#CD4848] h-[209px] w-[139px]'>
                                <img src="/src/assets/S.png" alt="abc" className='h-[171.49px] w-[72.08px]' />
                            </div>
                            <div className='flex justify-center items-center  bg-[#CD4848] h-[209px] w-[139px]'>
                                <img src="/src/assets/O.png" alt="abc" className=' h-[171.49px] w-[72.08px]' />

                            </div>

                            <img src="/src/assets/Yellow.png" alt="abc" className='h-[184.49px] w-[130.08px]' />

                            <div className='flex justify-center items-center  bg-[#CD4848] h-[209px] w-[139px]'>
                                <img src="/src/assets/N.png" alt="abc" className=' h-[171.49px] w-[72.08px]' />
                            </div>
                            <div className='flex justify-center items-center  bg-[#CD4848] h-[209px] w-[139px]'>
                                <img src="/src/assets/D.png" alt="abc" className=' h-[171.49px] w-[72.08px]' />
                            </div>
                        </div>
                        <div className='flex w-full justify-center items-start'>
                            <div className='w-full flex justify-center items-center h-[50vh]' >
                                <img src="/src/assets/lines.png" alt="" />
                            </div>
                            <div className='w-full h-[70vh] relative'>
                                <div className='absolute z-40  w-full left-[-250px] top-[-50px]' >
                                    <div className='absolute z-10 left-[30%]'>
                                        <img src="/src/assets/Ellipse1.png" alt="" />
                                    </div>
                                    <div className='absolute left-[35%] z-20 top-[-5%]'>
                                        <img src="/src/assets/image2(1).png" alt="" />
                                    </div>
                                </div>
                                <div className=' absolute top-[34%] left-[-30%]' style={{ backgroundImage: "url(/src/assets/Rectangle2.png)" }}>
                                    <h1 className='text-white font-bold text-2xl  '>This Content Here Is Dummy</h1>
                                    <p className='text-white text-sm   '>Start for free and get attractive offers from the community</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:w-[40%] max-w-[90%] flex flex-col justify-center items-center h-screen mx-8 py-8 '>
                        <img src="/src/assets/Group11.png" alt="" />
                        <h2 className=' mt-4 text-2xl font-bold text-gray-700'>Login to your Account</h2>
                        <p className=' mt-1 text-sm text-gray-700 p-0'>See what is going on with your business</p>
                        <img src="/src/assets/Frame1.png" alt="" className=' mt-6' />

                        <div className='flex flex-col w-full mt-4 text-gray-700'>
                            <label className='text-gray-700' htmlFor="">Email</label>
                            <input type="email" placeholder='waleed.py@gmail' className='border-[0.72px] border-[#D6EAFF] mt-2 px-3 py-1 w-full max-w-md' />
                        </div>
                        <div className='flex flex-col w-full mt-4 text-gray-700'>
                            <label className='text-gray-700' htmlFor="">Password</label>
                            <input type="password" placeholder='' className='border-[0.72px] border-[#D6EAFF] mt-2 px-3 py-1' />
                        </div>
                        <div className='flex justify-center items-center sm:gap-15 gap-2  mt-5 sm:flex-row  flex-col '>
                            <div className='flex gap-3'>
                                <p> Remember Me</p>
                                <input type="checkbox" id="subscribe" name="" value="" ></input>
                            </div>

                            <p className='ml-4'> <Link to="/forget"> Forget Password? </Link></p>
                        </div>
                        <Link to="/home" className='w-full'>   <button className='bg-black w-full max-w-lg h-7 text-center text-white mt-5 ' >
                            Login
                        </button></Link>
                        <p className=' mt-5 text-gray-500'>Not Registered? <Link to="/register"><span className='text-black  font-bold cursor-pointer' >Create an account</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
