import React from 'react'

export default function Pricecompo() {
    return (
        <div>

            <div className=' h-100 mt-20   '>
                <div className='flex relative '>
                    <img className='absolute top-0 ml-20' src="/src/assets/fatGirl.png" alt="" />
                    <img className=' absolute left-55 top-20 ml-0 ' src="/src/assets/sad.png" alt="" />
                    <img className=' absolute left-90 top-0 ml-0 ' src="/src/assets/sing.png" alt="" />
                    <img className=' absolute left-125 top-20 ml-0 ' src="/src/assets/drum.png" alt="" />
                </div>
                <div className=' ml-165 '>
                    <h1 className='text-2xl font-black mt-40'>The highest-quality samples on the market</h1>
                    <p className='w-100 mt-5'>Make better music with masterfully-recorded samples—carefully crafted by leading sound designers, breakthrough producers, and established icons like Oliver, KSHMR, and Murda Beatz

                    </p>
                </div>
            </div>
        </div>
    )
}
