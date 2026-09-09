import React from 'react'
import NavBar from '@/components/NavHome'
import { Footer2 } from '@/components/footer2'
import { Link } from 'react-router-dom'
import { AlertDialog } from '@/components/ui/alert-dialog'

import { AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { AlertDialogContent } from '@/components/ui/alert-dialog'
import { AlertDialogCancel } from '@/components/ui/alert-dialog'
import { useState } from 'react'
import { TabsLine } from '@/components/Menu'


function Settings() {
    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(false)
    const [deleteAcount, setDelete] = useState(false)
    const [formData, setFormData] = useState({
        username: "waleed siddiqui",
        email: "waleed siddiqui.py",
        fullName: "waleed siddiqui",

    })
    const [tempData, setTempData] = useState(formData)

    function handleClick() {
        setTempData(formData)
        setEdit(true)
    }
    function changeInput(e) {
        const { name, value } = e.target.value;
        setTempData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    function handleSave() {
        setFormData(tempData)
        setEdit(false)
    }
    function handleCancel() {
        setEdit(false)
    }
    function handleOpen() {
        setOpen(true)
    }
    function close() {
        setOpen(false)
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
        <div className={'bg-transparent'}>
            <NavBar />
            <div className='bg-[#CD4848] text-sm w-full h-15'>
                <p className='text-white text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
            </div>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className='text-center text-4xl font-bold mt-5'>Settings</h1>
                <p className='text-center text-gray-500 mt-3'>Account setting and payment seetting</p>
                <div className=' mt-5 flex gap-8 justify-center items-center mb-5'>

                    <TabsLine variant="setting" />

                </div>
                <hr className='bg-transparent' />
                <div className='flex justify-center items-center gap-50 md:gap-100'>
                    <h1 className=' text-2xl font-bold mt-5 text-[#404041]'>Profile</h1>
                    {!edit ?
                        <button onClick={handleClick}><img src="/src/assets/pencil.png" alt="" className='w-5 h-5 mt-7 cursor-pointer' /></button> :
                        <div className='flex md:flex-row flex-col gap-4'>
                            <button className='bg-[#f1f1f1] text-[#A0A0A0] w-[78px] h-24px h-10 mt-5 rounded-4xl ' onClick={handleCancel}>Cancel</button>
                            <button className='text-[12px] text-white bg-black px-2 md:px-0 py-1 md:font-bold w-[85px] md:w-[95px] h-24px h-10 md:mt-5 rounded-4xl ' onClick={handleSave}>Save Changes</button>

                        </div>
                    }

                </div>
                <div className='flex justify-center items-center md:gap-110 gap-55  mt-5 mb-5'>
                    <h1 className=' text-black font-semibold ml-5 md:text-sm mt-6'>Photo</h1>
                    <img src="/src/assets/Ellipse 10.png" alt="" className='w-10 h-10 mt-4 cursor-pointer' />
                </div>
                <hr className='bg-transparent mx-80  ' />
                <div className='flex justify-center items-center md:gap-100 gap-50 mt-5 mb-5'>
                    {edit ?
                        <div className='flex  md:gap-90 gap-35 '>
                            <h1 className='  md:text-sm mt-6'>Username</h1>

                            <input className='mt-5 border-[#cd4848a2] border-2 w-35 px-2 py-2 rounded-4xl' type="text" value={tempData.username} name='username' onClick={changeInput} />
                        </div> :
                        <>
                            <h1 className=' text-sm mt-6 ml-5 text-black font-semibold'>Username</h1>
                            <p className='mt-5 text-[#909090]'>Waleed </p>
                        </>

                    }

                </div>
                <hr className='bg-transparent mx-80  ' />
                <div className='flex justify-center items-center md:gap-85 gap-40 mt-5 mb-5'>
                    {edit ?
                        <div className='flex md:gap-80 gap-30  '>
                            <h1 className=' text-sm mt-6'>Email Adress</h1>
                            <input className='mt-5 border-[#cd4848a2] border-2 w-45 px-2 py-2 rounded-4xl' type="text" value={tempData.email} name='email' onClick={changeInput} />
                        </div> :
                        <>
                            <h1 className=' text-sm mt-6 ml-5 pl-8 text-black font-semibold'>Email Adress</h1>
                            <p className='mt-5 text-[#909090]'>WaleedSiddiqui.py</p>
                        </>

                    }
                </div>
                <hr className='bg-transparent mx-80  ' />
                <div className='flex justify-center items-center md:gap-90 gap-40 mt-5 mb-5'>
                    {edit ?
                        <div className='flex md:gap-90 gap-40 '>
                            <h1 className=' text-sm mt-6'>Full Name</h1>
                            <input className='mt-5 border-[#cd4848a2] border-2 w-35 px-2 py-2 rounded-4xl' type="text" value={tempData.fullName} name='fullName' onClick={changeInput} />
                        </div> :
                        <>
                            <h1 className=' text-sm mt-6 text-black font-semibold pl-7'>Full Name</h1>
                            <p className='mt-5 text-[#909090] '>Waleed Siddiqui</p>
                        </>

                    }
                </div>
                <hr className='bg-transparent mx-80  ' />
                <div className='flex justify-center items-center md:gap-110 gap-50 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6 text-black font-semibold pl-7'>User Id</h1>
                    <p className='mt-5 text-[#909090]'>123456</p>
                </div>
                <hr className='bg-transparent mx-80  ' />
                <h1 className=' text-2xl font-bold text-[#404041] mt-5 lg:ml-85'>Security</h1>
                <div className='flex justify-center items-center md:gap-90 gap-40 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6 font-semibold pl-8'>Password</h1>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button onClick={handleOpen}><p className='mt-5 text-red-800 font-semibold cursor-pointer' >Change Password</p></button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="">
                            <p className="mb-5 text-red-800 font-semibold">
                                Change password
                            </p>

                            <label>Enter new password</label>
                            <div className="flex gap-5">
                                <input
                                    type="text"
                                    className="w-50 border-2 mb-5"
                                />
                                <p className="text-gray-400">
                                    Case sensitive
                                </p>
                            </div>

                            <label>Confirm new password</label>
                            <div className="flex gap-5">
                                <input
                                    type="text"
                                    className="w-50 border-2 mb-4"
                                />
                                <p className="text-red-800">
                                    Opp! password don't match
                                </p>
                            </div>
                            <AlertDialogCancel className="w-30 bg-white border-0">
                                <button

                                    className="bg-black text-white w-20 rounded-2xl ml-0 py-1 cursor-pointer"
                                >
                                    Done
                                </button>
                            </AlertDialogCancel>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
                <div className='flex justify-center items-center md:gap-90 gap-40 mt-5 mb-5'>
                    <h1 className=' text-sm mt-6 font-semibold pl-10'>Delete  Account</h1>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button > <p className='mt-5 text-[#C5C5C5] font-semibold cursor-pointer hover:text-red-800'>Delete account</p></button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <img
                                src="/src/assets/del.png"
                                width={70}
                                className="md:ml-38 ml-30 mb-5"
                                alt="Delete account"
                            />

                            <p className="mb-5 px-10 ml-5">
                                Are you sure you want to delete your account?
                            </p>
                            <AlertDialogCancel className="w-30 bg-white border-0">
                                <div className="flex md:ml-60 ml-43 gap-8">
                                    <button
                                        className="bg-[#E7E7E7] w-20 h-10 rounded-3xl"

                                    >
                                        Yes
                                    </button>

                                    <button
                                        className="bg-[#CD4848] text-white w-20 h-10 rounded-3xl"

                                    >
                                        No
                                    </button>
                                </div>
                            </AlertDialogCancel>

                        </AlertDialogContent>
                    </AlertDialog>


                </div>
                {/* {open && <MyAlertDialog open={close} />}
                {edit && <MyAlertDialog edit={closeEdit} />}
                {deleteAcount && <MyAlertDialog deleteAcount={closedeletea} />} */}
            </div>
            <Footer2 />
        </div>
    )
}

export default Settings
