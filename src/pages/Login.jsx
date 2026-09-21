import { Link } from 'react-router-dom'
import React from 'react'
export default function Login() {
    return (
        <div className=' flex justify-center items-center'>
            <div className='w-360   h-screen'>
                <div className='flex  '>
                    <div className='bg-[#000000] lg:block hidden  w-200 h-screen '>
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
                        <div className='flex w-full justify-center items-start '>
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
                    <div className='flex flex-col justify-start items-center lg:w-120  w-full  '>
                        <div className='flex flex-col lg:mr-20 justify-center items-center lg:justify-start lg:items-start px-3'>
                            <img src="/src/assets/Group11.png" alt="" className=' mt-20' />
                            <h2 className=' mt-4 text-3xl font-medium text-[#404041] '>Login your Account</h2>
                            <p className=' mt-1 text-sm text-[#909090]  p-0'>See what is going on with your business</p>
                        </div>

                        <img src="/src/assets/Frame1.png" alt="" className=' mt-6 lg:w-90 w-60' />
                        <p p className='mt-5 text-[#909090]'>---------or Sign in with Email----------</p>

                        <div className='flex flex-col lg:w-90 mt-4 text-gray-700'>
                            <label className=' text-[#909090] ' htmlFor="">Email</label>
                            <input type="text" placeholder='waleed@gamil.com' className="py-1 px-2 border placeholder-[#EBEBEB] border-[#D6EAFF] rounded-[4px]" />
                        </div>
                        <div className='flex flex-col lg:w-90  mt-4 text-gray-700'>
                            <label className=' text-[#909090] ' htmlFor="">Password</label>
                            <input type="text" placeholder='*********' className="py-1 px-2 border placeholder-[#EBEBEB] border-[#D6EAFF] rounded-[4px]" />
                        </div>
                        <div className='flex justify-center items-center lg:gap-20 gap-3 mt-5 w-full'>
                            <div className='flex  gap-2'>
                                <input type="checkbox" className='accent-[#404041] w-3' />
                                <label htmlFor="abc" className='text-[#909090]'>Remember Me</label>
                            </div>
                            <div>
                                <Link to="/Forget"> <p className='text-[#404041]'>Forget Password?</p></Link>
                            </div>
                        </div>
                        <Link to="/home">   <button className='bg-black py-2 w-60 l rounded-[4px] text-center lg:w-90 text-white mt-5 ' >
                            Log In
                        </button></Link>
                        <Link to="/Register"><p className=' mt-5 text-gray-500'>Not Resgister Yet?<span className='text-black  font-bold cursor-pointer' > Create an account</span> </p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
