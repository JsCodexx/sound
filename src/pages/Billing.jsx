import React from 'react'
import NavBar from '@/components/NavHome'
import { Link } from 'react-router-dom'
import { Footer2 } from '@/components/footer2'
import { useState } from 'react'
import { AlertDemo } from '@/components/Alertpop'
import { TabsLine } from '@/components/Menu'

function Billing() {
    const [bill, setBill] = useState(false)

    function openBill() {
        setBill(true)
    }
    function closeBill() {
        setBill(false)
    }
    return (
        <div className={` ${bill ? 'bg-[#000000C9]' : 'bg-transparent'}`}>
            <NavBar />
            <div className='bg-[#CD4848] w-full h-15'>
                <p className='text-white text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
            </div>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <h1 className='text-center text-4xl font-bold mt-5'>Settings</h1>
                <p className='text-center text-gray-500 mt-3'>Account setting and payment seetting</p>
                <div className=' mt-5 flex gap-8 ml-115 mb-5'>
                    {/* <Link to="/settings"><p className='cursor-pointer font-semibold'>Account</p></Link>
                    <Link to="/billings"><p className='cursor-pointer font-semibold'>Billing</p></Link>
                    <Link to="/plans">  <p className='cursor-pointer font-semibold'>Plans</p></Link>
                    <Link to="/notifications"><p className='cursor-pointer font-semibold'>Notifications</p></Link> */}
                    <TabsLine variant="setting" />

                </div>
                <hr className={` ${bill ? 'border-[#000000C9]' : 'bg-transparent'}`} />
                <h1 className='text-2xl ml-70 mt-5 font-bold' >Payment Method</h1>
                <img src="/src/assets/atm.png" alt="" className='mt-20 ml-145' />
                <h1 className='text-center mt-10 ml-110 text-gray-400 w-90'>Add your payment method for all purchases Made on Company name.</h1>
                <button onClick={openBill} className='rounded-4xl bg-[#CD4848] text-white text-center ml-135 mt-10 text-sm py-3 px-4 cursor-pointer hover:bg-red-800'>Add Payment Method</button>

                {bill && <AlertDemo bill={closeBill} />}

                <h1 className='text-2xl ml-70 mt-15 font-bold'>Transaction history</h1>

                <h1 className='text-center mt-15 ml-110 text-gray-400 w-90'>Add your payment method for all purchases Made on Company name.</h1>
                <button className='rounded-4xl mb-15 bg-[#8054F6] text-white text-center ml-135 mt-10 text-sm py-3 px-10 cursor-pointer hover:bg-purple-800'>Browse plans</button>
            </div>
            <Footer2 />
        </div>
    )
}

export default Billing
