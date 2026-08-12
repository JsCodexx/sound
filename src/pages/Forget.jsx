import React from 'react'
import Nav from '@/components/Nav'
import { AlertDemo } from '@/components/Alertpop'
import { useState } from "react"

function Forget() {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(true)
    }
    function close() {
        setOpen(false)
    }
    return (
        <div>
            <Nav />

            <h1 className='text-center mt-10 text-3xl font-bold'>Forget Password?</h1>
            <p className='text-center mt-4 pb-4'>You Can Reset Your Password From Here</p>
            <hr />
            <div className='flex flex-col ml-125 mt-10'>
                <label htmlFor="">Enter Email address </label>
                <input type="email" className='mt-2 w-70 border-[0.72px] border-[#D6EAFF]' />
            </div>
            <button onClick={handleOpen}    >
                <img src="src/assets/Frame7(1).png" alt="" className='mt-10 ml-124 cursor-pointer' width={280} />
            </button>

            {open && <AlertDemo set={close} />}

        </div>
    )
}

export default Forget
