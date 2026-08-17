import React from 'react'
import Nav from '@/components/Nav'
import { InputGroupInlineStart } from '@/components/Text'
import { Footer2 } from '@/components/footer2'
import { Link } from 'react-router-dom'

function Help() {
    return (
        <div>
            <Nav />
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className='bg-[#CD4848] w-full h-15'>
                    <p className='text-white text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
                </div>
                <div className='flex'>
                    <InputGroupInlineStart />
                    <Link to="/Submit"><button className='ml-130 text-sm bg-black text-white px-2 mt-5 rounded-xl cursor-pointer py-2'>Click for Request</button></Link>

                </div>

                <img className='mt-5 px-85 ml-2 h-50 ' src="/src/assets/song.png" alt="" />
                <div className='mt-10  ml-85 mr-80'>
                    <h1 className='font-bold text-2xl mb-10'>How do Sounds credits work?
                    </h1>
                    <p className='mb-10'>TION ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS IS EXPRESSLY EXCLUDED FROM THIS AGREEMENT AND SHALL NOT APPLY IN ANY INSTA,N,CE.</p>

                    <p className='mb-10'>   Introduction and Eligibility</p>

                    <p className='mb-50'>  Please read these Terms carefully before using the Service. Your use of, and
                        participation in, the Service may be subject to additional terms for specific
                        Splice products, including, without limitation, Splice Studio, or tools such as
                        Splice Plug-Ins, as further described below ("Supplemental Terms"), such as, b
                        ut not limited to, the terms and conditions set forth in the Splice Studio
                        & Community Terms of Use. Such Supplemental Terms will either be listed in these Terms or
                        will be presented to you for your acceptance when you sign up to use the supplemental
                        features of the Service. Without limiting the foregoing, certain materials, tools, or
                        components of the Service made available through the Service
                        (including premium add-ons and Plug-Ins)
                        may be subject to
                        license terms and conditions that are different
                        from those set forth herein. Any such terms and conditions
                        will be identified for such materials, tools, or components of the Service,
                        and by downloading
                        same, you agree to be bound by and comply with such Supplemental Terms.
                    </p>


                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Help
