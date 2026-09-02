import { Check } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react';

export default function HoverCards() {
    return (
        <div className='flex gap-6 mt-12 mb-15 cursor-pointer ml-50'>
            <div className='bg-black hover:bg-[#D74664]  w-67 h-125  rounded-lg transition-all duration-100 ease-in-out hover:-translate-y-2 hover:scale-[1.1]'>
                <div className='text-white ml-8 pt-7 flex flex-col group gap-5'>
                    <h1 className='text-2xl'>Sounds+</h1>
                    <p className='text-4xl text-[#FFFFFF] font-[Manrope] font-semibold'>$35 <span className='text-sm text-gray-300 font-light'>/Month</span></p>
                    <Link to="/billings"><button className='w-51 h-8 group-hover:text-[#D74664] rounded-[5px] bg-white text-black font-semibold'>Get Started Now</button></Link>
                    <div className='flex flex-col gap-5 group'>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 group'>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <X className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* card-2 */}
            <div className='bg-black hover:bg-[#D74664] group w-67 h-125  rounded-lg transition-all duration-100 ease-in-out hover:-translate-y-2 hover:scale-[1.1]'>
                <div className='text-white ml-8 pt-7 flex flex-col gap-5'>
                    <h1 className='text-2xl'>Creator+</h1>
                    <p className='text-4xl text-[#FFFFFF] font-[Manrope] font-semibold'>$45 <span className='text-sm text-gray-300 font-light'>/Month</span></p>
                    <Link to="/billings"><button className='w-51 h-8 rounded-[5px] bg-white text-black group-hover:text-[#D74664] font-semibold'>Get Started Now</button></Link>
                    <div className='flex flex-col gap-5 group'>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 group'>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <X className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* card-3 */}
            <div className='bg-black hover:bg-[#D74664] group w-67 h-125  rounded-lg transition-all duration-100 ease-in-out hover:-translate-y-2 hover:scale-[1.1]'>
                <div className='text-white ml-8 pt-7 flex flex-col gap-5'>
                    <h1 className='text-2xl'>Creator+</h1>
                    <p className='text-4xl text-[#FFFFFF] font-[Manrope] font-semibold'>$35 <span className='text-sm text-gray-300 font-light'>/Month</span></p>
                    <Link to="/billings"><button className='w-51 group-hover:text-[#D74664] h-8 rounded-[5px] bg-white text-black font-semibold'>Get Started Now</button></Link>
                    <div className='flex flex-col gap-5 group '>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 '>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <Check className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>
                        <div className='flex gap-5 group'>
                            <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                <X className='text-black group-hover:text-[#D74664]' />
                            </div>
                            <p className='text-white text-[11.5px]'>Lorem ipsum dolor sit amet .</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
