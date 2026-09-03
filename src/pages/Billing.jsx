import React from 'react'
import NavBar from '@/components/NavHome'
import { AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Link } from 'react-router-dom'
import { Footer2 } from '@/components/footer2'
import { AlertDialog } from '@/components/ui/alert-dialog'
import { useState } from 'react'

import { TabsLine } from '@/components/Menu'
import { AlertDialogContent } from '@/components/ui/alert-dialog'

import { AlertDialogCancel } from '@/components/ui/alert-dialog'

function Billing() {
    const [bill, setBill] = useState(false)

    function openBill() {
        setBill(true)
    }
    function closeBill() {
        setBill(false)

    }
    return (
        <div className='bg-transparent'>
            <NavBar />
            <div className='bg-[#CD4848] w-full h-15'>
                <p className='text-white text-sm text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
            </div>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <h1 className='text-center text-4xl font-bold mt-5'>Settings</h1>
                <p className='text-center text-gray-500 mt-3'>Account setting and payment seetting</p>
                <div className=' mt-5 flex gap-8 ml-13 md:ml-115 mb-5'>

                    <TabsLine variant="setting" />

                </div>
                <hr className='bg-transparent' />
                <h1 className='text-2xl ml-10 md:ml-70 mt-5 font-bold' >Payment Method</h1>
                <img src="/src/assets/atm.png" alt="" className='mt-20 ml-40 md:ml-145' />
                <h1 className='text-center mt-10 md:ml-110 text-gray-400 w-90'>Add your payment method for all purchases Made on Company name.</h1>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <button className='rounded-4xl bg-[#CD4848] text-white ml-25 text-center md:ml-135 mt-10 text-sm py-3 px-4 cursor-pointer hover:bg-red-800'>Add Payment Method</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <div className="flex gap-30 mb-3">
                            <h1 className="ml-0 w-65 text-xl font-bold w">Update Payment Method</h1>

                        </div>
                        <hr className="mx-0" />

                        <p className="text-gray-400 w-60 mt-4 text-[15px] mb-5">Updates will apply to all purchases made on company.</p>
                        <img src="/src/assets/cards.png" alt="" />
                        <div className="flex gap-5 ml-6">
                            <button className="border-2 border-red-700 text-[#4A4A4A] w-40 h-10 mt-8 text-xl text-center py-0 px-3">Debit/Credit</button>
                            <button className="border-2 border-[#E1E1E1] text-[#4A4A4A] w-40 h-10 mt-8 px-5"><img src="/src/assets/paypal.png" alt="" /></button>
                        </div>
                        <div className="flex flex-col mt-10 ml-5">
                            <label className="mb-5 font-semibold">Account Holder</label>
                            <input type="text" placeholder="Account Holder Name " className="border-2 border-[#CACACA] w-60 pl-4 h-10" />
                        </div>
                        <div className="flex flex-col mt-5 ml-5">
                            <label className="mb-5 font-semibold">Card Number</label>
                            <input type="text" placeholder="4569-1234-1239" className="border-2 border-[#CACACA] w-60 pl-4 h-10" />
                        </div>
                        <div className="flex">
                            <div className="flex flex-col mt-5 ml-5">
                                <label className="mb-5 font-semibold">Expiry</label>
                                <input type="text" placeholder="MM/YY" className="border-2 border-[#CACACA] w-20 pl-4 h-10" />
                            </div>
                            <div className="flex flex-col mt-5 ml-5">
                                <label className="mb-5 font-semibold">CVV</label>
                                <input type="text" placeholder="780" className="border-2 border-[#CACACA] w-20 pl-4 h-10" />
                            </div>
                        </div>

                        <div className="flex gap-5 ml-6">
                            <AlertDialogCancel
                                className="border-2 text-sm bg-red-800 text-white font-semibold border-red-700 w-25 h-10 mt-8 px-5"

                            >
                                Cancel
                            </AlertDialogCancel>

                            <AlertDialogCancel
                                className="border-2 text-sm bg-red-800 text-white font-semibold border-red-700 w-25 h-10 mt-8 px-5"

                            >
                                Update
                            </AlertDialogCancel>
                        </div>

                    </AlertDialogContent>
                </AlertDialog>
                {/* {bill && <MyAlertDialog bill={closeBill} />} */}

                <h1 className='text-2xl ml-10 md:ml-70 mt-15 font-bold'>Transaction history</h1>

                <h1 className='text-center mt-15 md:ml-110 text-gray-400 w-90'>Add your payment method for all purchases Made on Company name.</h1>
                <button className='rounded-4xl mb-15 bg-[#8054F6] text-white text-center ml-25 md:ml-135 mt-10 text-sm py-3 px-10 cursor-pointer hover:bg-purple-800'>Browse plans</button>
            </div>
            <Footer2 />
        </div>
    )
}

export default Billing
