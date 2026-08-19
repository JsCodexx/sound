import React from 'react'
import NavBar from '@/components/NavHome'
import { Footer2 } from '@/components/footer2'
import { Link } from 'react-router-dom'
import { AlertDemo } from '@/components/Alertpop'
import { useState } from 'react'
import { TabsLine } from '@/components/Menu'

function Settings() {
    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(false)
    const [deleteAcount, setDelete] = useState(false)

    function handleOpen() {
        setOpen(true)
    }
    function close() {
        setOpen(false)
    }

    function handleEdit() {
        setEdit(true)
    }
    function closeEdit() {
        setEdit(false)
    }
    function opendeletea() {
        setDelete(true)
    }
    function closedeletea() {
        setDelete(false)
    }
    return (
        <div className={` ${edit ? 'bg-[#000000C9] ' : 'bg-transparent'}`}>
            <NavBar />
            <div className='bg-[#CD4848] w-full h-15'>
                <p className='text-white text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
            </div>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className='text-center text-4xl font-bold mt-5'>Settings</h1>
                <p className='text-center text-gray-500 mt-3'>Account setting and payment seetting</p>
                <div className=' mt-5 flex gap-8 ml-120 mb-5'>
                    {/* <Link to="/settings"><p className='cursor-pointer'>Account</p></Link>
                    <Link to="/billings"><p className='cursor-pointer'>Billing</p></Link>
                    <Link to="/plans">  <p className='cursor-pointer'>Plans</p></Link>
                    <Link to="/notifications"><p className='cursor-pointer'>Notifications</p></Link> */}
                    <TabsLine variant="setting" />

                </div>
                <hr className={` ${edit ? 'border-[#000000C9] ' : 'bg-transparent'}`} />
                <div className='flex ml-100 gap-100'>
                    <h1 className=' text-2xl font-bold mt-5'>Profile</h1>
                    <button onClick={handleEdit}><img src="/src/assets/pencil.png" alt="" className='w-5 h-5 mt-7 cursor-pointer' /></button>
                </div>
                <div className='flex ml-100 gap-110 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>Photo</h1>
                    <img src="/src/assets/Ellipse 10.png" alt="" className='w-10 h-10 mt-4 cursor-pointer' />
                </div>
                <hr className={` ${edit ? 'border-[#000000C9] ' : 'bg-transparent mx-85'}`} />
                <div className='flex ml-100 gap-90 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>Username</h1>
                    <p className='mt-5 '>Waleed Siddiqui</p>
                </div>
                <hr className={` ${edit ? 'border-[#000000C9] ' : 'bg-transparent mx-85'}`} />
                <div className='flex ml-100 gap-85 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>Email Adress</h1>
                    <p className='mt-5 '>WaleedSiddiqui.py</p>
                </div>
                <hr className={` ${edit ? 'border-[#000000C9] ' : 'bg-transparent mx-85'}`} />
                <div className='flex ml-100 gap-90 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>Full Name</h1>
                    <p className='mt-5 '>Waleed Siddiqui</p>
                </div>
                <hr className={` ${edit ? 'border-[#000000C9] ' : 'bg-transparent mx-85'}`} />
                <div className='flex ml-100 gap-110 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6'>User Id</h1>
                    <p className='mt-5 '>123456</p>
                </div>
                <hr className={` ${edit ? 'border-[#000000C9] ' : 'bg-transparent mx-85'}`} />
                <h1 className=' ml-98 text-2xl font-bold mt-5'>Settings</h1>
                <div className='flex ml-100 gap-90 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6 font-semibold'>Password</h1>

                    <button onClick={handleOpen}><p className='mt-5 text-red-800 font-semibold cursor-pointer' >Change Password</p></button>
                </div>
                <div className='flex ml-100 gap-67 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6 font-semibold'>Delete Company Account</h1>
                    <button onClick={opendeletea}> <p className='mt-5 text-[#C5C5C5] font-semibold cursor-pointer hover:text-red-800'>Delete account</p></button>

                </div>
                {open && <AlertDemo close={close} />}
                {edit && <AlertDemo edit={closeEdit} />}
                {deleteAcount && <AlertDemo del={closedeletea} />}
            </div>
            <Footer2 />
        </div>
    )
}

export default Settings
