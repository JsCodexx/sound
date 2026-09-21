// import {
//     AlertDialog,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// export function MyAlertDialog({ close, deleteAcount, open, set }) {
//     return (
//         <div className="relative">
//             <AlertDialog>
//                 {open ? (
//                     <div>
//                         <AlertDialogTrigger asChild>
//                             <button
//                                 type="button"
//                                 className="absolute -top-27 left-206.5 text-red-800 font-semibold"
//                             >
//                                 Change Password
//                             </button>
//                         </AlertDialogTrigger>

//                         <AlertDialogContent>
//                             <AlertDialogHeader>
//                                 <AlertDialogTitle></AlertDialogTitle>

//                                 <p className="mb-5 text-red-800 font-semibold">
//                                     Change password
//                                 </p>

//                                 <label>Enter new password</label>
//                                 <div className="flex gap-5">
//                                     <input
//                                         type="text"
//                                         className="w-50 border-2 mb-5"
//                                     />
//                                     <p className="text-gray-400">
//                                         Case sensitive
//                                     </p>
//                                 </div>

//                                 <label>Confirm new password</label>
//                                 <div className="flex gap-5">
//                                     <input
//                                         type="text"
//                                         className="w-50 border-2 mb-4"
//                                     />
//                                     <p className="text-red-800">
//                                         Opp! password don't match
//                                     </p>
//                                 </div>

//                                 <button
//                                     onClick={open}
//                                     className="bg-black text-white w-20 rounded-2xl ml-0 py-1 cursor-pointer"
//                                 >
//                                     Done
//                                 </button>
//                             </AlertDialogHeader>
//                         </AlertDialogContent>
//                     </div>
//                 ) : close ? (
//                     <>
//                         <AlertDialogTrigger asChild>
//                             <button type="button">
//                                 <img
//                                     src="/src/assets/Frame7(1).png"
//                                     alt="Open dialog"
//                                     className="mt-0 ml-14 cursor-pointer absolute top-82"
//                                     width={280}
//                                 />
//                             </button>
//                         </AlertDialogTrigger>

//                         <AlertDialogContent>
//                             <AlertDialogHeader>
//                                 <AlertDialogTitle>
//                                     <img
//                                         src="/src/assets/alert.png"
//                                         alt="Alert"
//                                         onClick={close}
//                                     />
//                                 </AlertDialogTitle>

//                                 <AlertDialogDescription>
//                                     {/* Your description */}
//                                 </AlertDialogDescription>
//                             </AlertDialogHeader>
//                         </AlertDialogContent>
//                     </>
//                 ) :
//                     ""
//                 }

//                 {deleteAcount ? (
//                     <div>
//                         <AlertDialogTrigger asChild>
//                             <button
//                                 type="button"
//                                 className="absolute -top-11 left-209.5 text-red-800 font-semibold"
//                             >
//                                 Delete Account
//                             </button>
//                         </AlertDialogTrigger>
//                         <AlertDialogContent>
//                             <img
//                                 src="/src/assets/del.png"
//                                 width={70}
//                                 className="ml-38 mb-5"
//                                 alt="Delete account"
//                             />

//                             <p className="mb-5 px-10 ml-5">
//                                 Are you sure you want to delete your account?
//                             </p>

//                             <div className="flex ml-25 gap-8">
//                                 <button
//                                     className="bg-[#E7E7E7] w-20 h-10 rounded-3xl"
//                                     onClick={deleteAcount}
//                                 >
//                                     Yes
//                                 </button>

//                                 <button
//                                     className="bg-[#CD4848] text-white w-20 h-10 rounded-3xl"
//                                     onClick={deleteAcount}
//                                 >
//                                     No
//                                 </button>
//                             </div>
//                         </AlertDialogContent>
//                     </div>
//                 ) :

//                     ""

//                 }
//                 {/* {set ? <> <img className="ml-30 mb-5" src="/src/assets/msg.png" alt="" width={70} /> <p>Verify your email address by clicking the link
//                     sent in your email address and Change your password</p> <button onClick={set} className="bg-gray-400 w-20 rounded-2xl ml-30 py-1 cursor-pointer mt-5  ">OK</button> </> : ""} */}
//             </AlertDialog>

//         </div>
//     );
// }
