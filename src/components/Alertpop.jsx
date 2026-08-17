import { CheckCircle2Icon } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo({ set, close, edit, del, bill }) {

    return (
        <>
            <div className="relative  ">
                {bill ? <>
                    <div className="grid w-100 max-w-md items-start gap-4  absolute left-110  top-[-520px]   ">

                        <Alert className="flex flex-col pl-10 w-110  bg-white h-180 py-5 px-5" >
                            {edit ? (
                                <>
                                    <p className="mb-5 text-red-800 font-semibold">Change password</p>
                                    <label>Enter new password</label>
                                    <div className="flex gap-5">
                                        <input type="text" className="w-50 border-2 mb-5" />
                                        <p className="text-gray-400">Case sensitive</p>
                                    </div>

                                    <label>Confirm new password</label>
                                    <div className="flex gap-5">
                                        <input type="text" className="w-50 border-2 mb-4" />
                                        <p className="text-red-800">Opp! password don't match</p>
                                    </div>
                                    <button onClick={edit} className="bg-black text-white w-20  rounded-2xl ml-0 py-1 cursor-pointer  ">Done</button>
                                </>
                            ) : (
                                ""
                            )}
                            {del ?
                                <>
                                    <img src="/src/assets/del.png" width={70} className="ml-38 mb-5" />
                                    <p className="mb-5 px-10 ml-5">
                                        Are you sure you want to delete
                                        your account?
                                    </p>
                                    <div className="flex ml-25 gap-8">
                                        <button className="bg-[#E7E7E7] w-20 h-10 rounded-3xl" onClick={del}>Yes</button>
                                        <button className="bg-[#CD4848] text-white w-20 h-10 rounded-3xl" onClick={del}>No</button>
                                    </div>

                                </> :
                                ""
                            }
                            {bill ? <>
                                <div className="flex gap-30 mb-3">
                                    <h1 className="ml-0 w-65 text-xl font-bold w">Update Payment Method</h1>
                                    <button onClick={bill}><p className="text-2xl text-gray-400">X</p></button>
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
                                    <button className="border-2 bg-[#F1F1F1] border-[#E1E1E1] text-[#4A4A4A] w-25 h-10 mt-8 text-xl text-center py-0 px-3">Cancel</button>
                                    <button className="border-2 text-sm bg-red-800 text-white font-semibold  border-red-700  w-25 h-10 mt-8 px-5">Update</button>
                                </div>

                            </> : ""}

                            <AlertDescription className="mb-5 px-10 ml-5">
                                {close ? <> <img className="ml-40 mb-5" src="/src/assets/msg.png" alt="" width={70} /> <p>Verify your email address by clicking the link
                                    sent in your email address and Change your password</p> </> : ""}
                            </AlertDescription>
                            {close ? <button onClick={close} className="bg-gray-400 w-20 rounded-2xl ml-38 py-1 cursor-pointer">OK</button> : ""}
                            {set ? <button onClick={set} className="bg-gray-400 w-20 rounded-2xl ml-38 py-1 cursor-pointer  ">OK</button> : ""}

                        </Alert>
                    </div>
                </> : <>
                    <div className="grid w-100 max-w-md items-start gap-4  absolute left-110  top-[-350px]   ">

                        <Alert className="flex flex-col pl-10  bg-white h-60 py-5 px-5" >
                            {edit ? (
                                <>
                                    <p className="mb-5 text-red-800 font-semibold">Change password</p>
                                    <label>Enter new password</label>
                                    <div className="flex gap-5">
                                        <input type="text" className="w-50 border-2 mb-5" />
                                        <p className="text-gray-400">Case sensitive</p>
                                    </div>

                                    <label>Confirm new password</label>
                                    <div className="flex gap-5">
                                        <input type="text" className="w-50 border-2 mb-4" />
                                        <p className="text-red-800">Opp! password don't match</p>
                                    </div>
                                    <button onClick={edit} className="bg-black text-white w-20  rounded-2xl ml-0 py-1 cursor-pointer  ">Done</button>
                                </>
                            ) : (
                                ""
                            )}
                            {del ?
                                <>
                                    <img src="/src/assets/del.png" width={70} className="ml-38 mb-5" />
                                    <p className="mb-5 px-10 ml-5">
                                        Are you sure you want to delete
                                        your account?
                                    </p>
                                    <div className="flex ml-25 gap-8">
                                        <button className="bg-[#E7E7E7] w-20 h-10 rounded-3xl" onClick={del}>Yes</button>
                                        <button className="bg-[#CD4848] text-white w-20 h-10 rounded-3xl" onClick={del}>No</button>
                                    </div>

                                </> :
                                ""
                            }
                            {bill ? <>
                                <div className="flex gap-30 mb-3">
                                    <h1 className="ml-0 w-65 text-xl font-bold w">Update Payment Method</h1>
                                    <button onClick={bill}><p className="text-2xl text-gray-400">X</p></button>
                                </div>
                                <hr className="mx-0" />
                                <p className="text-gray-400 w-60 mt-4 text-[15px] mb-5">Updates will apply to all purchases made on company.</p>
                                <img src="/src/assets/cards.png" alt="" />
                                <div>
                                    <button className="border-2 border-red-700 w-40 h-10 mt-5"></button>
                                    <button></button>
                                </div>

                            </> : ""}

                            <AlertDescription className="mb-5 px-10 ml-5">
                                {close ? <> <img className="ml-25 mb-5" src="/src/assets/msg.png" alt="" width={70} /> <p>Verify your email address by clicking the link
                                    sent in your email address and Change your password</p> </> : ""}
                            </AlertDescription>
                            {close ? <button onClick={close} className="bg-gray-400 w-20 rounded-2xl ml-38 py-1 cursor-pointer">OK</button> : ""}
                            {set ? <> <img className="ml-30 mb-5" src="/src/assets/msg.png" alt="" width={70} /> <p>Verify your email address by clicking the link
                                sent in your email address and Change your password</p> <button onClick={set} className="bg-gray-400 w-20 rounded-2xl ml-30 py-1 cursor-pointer mt-5  ">OK</button> </> : ""}

                        </Alert>
                    </div>
                </>}

            </div>


        </>
    )
}
