import React from 'react'
import NavBar from '@/components/NavHome'
import { FaqSection1 } from '@/components/pro-blocks/landing-page/faq-sections/faq-section-1'
import { Footer2 } from '@/components/footer2'
import { Faq } from '@/api/Sounds/faqs'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { CreateLoaders } from '@/contextApi/context'
import { BlocksWave } from '@/components/ui/Loader'
import { Refresh } from '@/api/auth/refresh'
function Faqs() {
    const [faq, setFaq] = useState()
    const { showloading, hideloading, loading } = useContext(CreateLoaders);
    console.log(faq, "data")

    // refreshapi
    async function handleRefreshToken() {
        const sessionData = sessionStorage.getItem("refresh")
        console.log(sessionData, "token")
        const resRefresh = await Refresh(sessionData)
        console.log(resRefresh)
        const newAccessToken = resRefresh.data.access_token
        localStorage.setItem("token", newAccessToken)
        return newAccessToken
    }

    async function FaqData() {
        try {
            showloading()
            const data = await Faq()
            const sliceData = data.data.items
            setFaq(sliceData)
            console.log(sliceData)
        } catch (error) {
            if (error?.response?.status === 401) {
                try {
                    const data =  handleRefreshToken()
                    console.log(data)
                    const retryData = await Faq()
                    const minRetryData = retryData.data.items
                    setLabel(minRetryData)
                } catch (error) {
                    console.error(error)
                }
            }
        } finally {
            hideloading()
        }

    }
    useEffect(() => {
        FaqData()
    }, [])
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


                    </div>
                    <FaqSection1 faqs={faq} load={loading} />

                    <Footer2 />
                </div>
            </div>

        </>
    )
}

export default Faqs

