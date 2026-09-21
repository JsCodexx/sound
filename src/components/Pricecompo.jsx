import React from 'react'

export default function Pricecompo() {
    return (
        <div>

            <div className='  mt-20 flex md:flex-row flex-col '>
                <div className=' relative w-175  '>
                    <img className='absolute top-0 left-20' src="/src/assets/fatGirl.png" alt="" />
                    <img className=' absolute left-55 top-20 m ' src="/src/assets/sad.png" alt="" />
                    <img className=' absolute left-90 top-0 ' src="/src/assets/sing.png" alt="" />
                    <img className=' absolute left-125 top-20 ' src="/src/assets/drum.png" alt="" />
                </div>
                <div className='  flex flex-col justify-center item-center mt-25'>
                    <h1 className='text-2xl font-black '>The highest-quality samples on the market</h1>
                    <p className='w-100 mt-5'>Make better music with masterfully-recorded samples—carefully crafted by leading sound designers, breakthrough producers, and established icons like Oliver, KSHMR, and Murda Beatz

                    </p>
                </div>
            </div>
        </div>
    )
}
