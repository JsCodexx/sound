import React from 'react'
import NavBar from '@/components/NavHome'
import { FaqSection1 } from '@/components/pro-blocks/landing-page/faq-sections/faq-section-1'
import { Footer2 } from '@/components/footer2'
function Faqs() {
    return (
        <>
            <div >
                <div className='relative overflow-x-hidden'>
                    <NavBar />
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                        <h1 className='text-center mt-6 pb-4 text-4xl font-bold' >FAQs</h1>
                        <img src="/src/assets/guitar.png" alt="" />
                        <p className='text-center mt-6 pb-4 text-2xl font-bold text-white absolute top-50 left-120'>Frequently Asked questions</p>
                        <FaqSection1 />
                    </div>
                    <Footer2 />
                </div>
            </div>

        </>
    )
}

export default Faqs

