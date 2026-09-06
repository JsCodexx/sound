import React from 'react'
import NavBar from '@/components/NavHome'
import { FaqSection1 } from '@/components/pro-blocks/landing-page/faq-sections/faq-section-1'
import { Footer2 } from '@/components/footer2'
function Faqs() {
    return (
        <>
            <div >
                <div className=' overflow-x-hidden '>
                    <NavBar />
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 " >
                        <h1 className='text-center mt-6 pb-4 text-4xl font-bold' >FAQs</h1>
                        <div className='relative w-full'>
                            <img src="/src/assets/guitar.png" alt="" className='' />

                            <p className='text-center mt-6 pb-4 text-sm  md:text-2xl font-bold text-white absolute   top-0 md:top-15 left-20 md:left-120'>Frequently Asked questions</p>
                        </div>

                        <FaqSection1 />
                    </div>
                    <Footer2 />
                </div>
            </div>

        </>
    )
}

export default Faqs

