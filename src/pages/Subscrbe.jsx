import React from 'react'
import Nav from '@/components/Nav'
import { AlertDialog } from '@/components/ui/alert-dialog'

import { AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { AlertDialogContent } from '@/components/ui/alert-dialog'
import { AlertDialogCancel } from '@/components/ui/alert-dialog'

import { useState } from "react"
export default function Subscrbe() {


    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(true)
    }
    function close() {
        setOpen(false)
    }
    return (
        <div className=" h-[100vh]" >
            <Nav />
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <h1 className='text-center mt-10 text-3xl font-bold'>Subscribe</h1>
                <p className='text-center mt-4 pb-4'>After the subscription you will get latest updates</p>
                <hr />
                <div className='flex flex-col ml-125 mt-10'>
                    <label htmlFor="">Enter Email address </label>
                    <input type="email" className='mt-2 w-70 border-[0.72px] border-[#D6EAFF]' />
                </div>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <button     >
                            <img src="src/assets/Frame7(1).png" alt="" className='mt-10 ml-124 cursor-pointer' width={280} />
                        </button>

                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <img className="ml-35 mb-5" src="/src/assets/msg.png" alt="" width={70} />
                        <p className='w-75 ml-10'>
                            You subscribe successfullu Huurahh!
                        </p>
                        <AlertDialogCancel className="w-15 ml-35 bg-gray-400">
                            <button className=" ">OK</button>
                        </AlertDialogCancel>

                    </AlertDialogContent>
                </AlertDialog>



             

            </div>
        </div>
    )


}
