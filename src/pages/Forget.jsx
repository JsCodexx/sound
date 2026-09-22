import React from 'react'
import Nav from '@/components/Nav'
import { AlertDialog } from '@/components/ui/alert-dialog'
import { AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { AlertDialogContent } from '@/components/ui/alert-dialog'
import { AlertDialogCancel } from '@/components/ui/alert-dialog'
import { useState } from "react"
import { useEffect } from 'react'
import { ForgetApi } from '@/api/auth/forget'
import { useContext } from 'react'
import { Createuser } from '@/contextApi/usercontext'

function Forget() {
    const [open, setOpen] = useState(false)
    const [forget, setForget] = useState()
    const { formData, setFormdata } = useContext(Createuser)
    console.log(formData, "email")
    async function forgetres() {
        const data = await ForgetApi(formData)

        console.log(data)
        const minData = data?.data
        console.log(minData)
        setForget(minData)
    }
    function handleOpen() {
        setOpen(true)
    }
    function close() {
        setOpen(false)
    }
    useEffect(() => {
        forgetres()
    }, [])
    return (
        <div className='bg-transparent '>
            <Nav />
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <h1 className='text-center mt-10 text-3xl font-bold'>Forget Password?</h1>
                <p className='text-center mt-4 pb-4'>You Can Reset Your Password From Here</p>
                <hr />
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='flex  flex-col'>
                        <label htmlFor="">Enter Email address </label>
                        <input type="email" onChange={(e) => { setFormdata(e.target.value) }} className='mt-2 w-70 border-[0.72px] border-[#D6EAFF]' />

                    </div>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button onClick={forgetres}>
                                <img src="src/assets/Frame7(1).png" alt="" className='mt-10 cursor-pointer' width={280} />
                            </button>
                        </AlertDialogTrigger>


                        {forget && (
                            <AlertDialogContent className=" flex flex-col justify-center items-center">
                                <img className="mb-5" src="/src/assets/msg.png" alt="" width={70} />
                                <div className='w-full flex flex-col justify-center items-center'>
                                    <p className=''>{forget.message} in your email</p>

                                </div>

                                <AlertDialogCancel asChild className="w-15 bg-gray-400">
                                    <button >OK</button>
                                </AlertDialogCancel>
                            </AlertDialogContent>
                        )}

                    </AlertDialog>


                </div>
            </div>
        </div>
    )
}

export default Forget
