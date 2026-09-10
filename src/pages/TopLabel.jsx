import React from 'react'
import NavBar from '@/components/NavHome'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PackCard from '@/components/PackCard'
import SideBar from '@/components/SideBar'
import { ComboboxBasic } from '@/components/Combobox'
export default function TopLabel() {
    const cardData = [
        {
            src: "/src/assets/p1.png",
            id: "1",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p2.png",
            id: "2",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
            ,
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "3",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p2.png",
            id: "4",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p1.png",
            id: "5",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p3.png",
            id: "6",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p1.png",
            id: "7",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p2.png",
            id: "8",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "9",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p1.png",
            id: "10",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "11",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p2.png",
            id: "12",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "13",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p2.png",
            id: "14",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "15",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p2.png",
            id: "16",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "17",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p2.png",
            id: "18",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "19",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs"
        },
        {
            src: "/src/assets/p2.png",
            id: "20",
            title: "Sample Magics",
            description: ["All Genres", "Techno", "House"],
            img: "/src/assets/red.png",
            num: "85 Packs",
            showArrow: "/src/assets/arror.png"
        },
    ]
    return (
        <div>
            <NavBar />
            <div className='mt-5  xl:hidden block'>
                <SideBar variant="mobileSide" className="" />
            </div>
            <main className="mx-auto w-full max-w-[1440px] ">
                <div className='flex mt-5 gap-3 md:gap-0 relative w-auto'>

                    <div className='mt-10 lg:block  hidden'>
                        <SideBar variant="desktop" className="" />
                    </div>
                    <div className='flex flex-col gap-4 ml-5'>
                        <h1 className=' text-red-400  font-bold text-center text-sm mb-10'>You are currently viewing company sounds</h1>
                        <hr className='md:w-1050 w-0 absolute  right-0 top-10 ' />
                        <div className='flex gap-10 ml-3'>
                            <NavLink to="/Charts">
                                {({ isActive }) => (
                                    <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                        Weekly top packs
                                    </h1>
                                )}
                            </NavLink>

                            <NavLink to="/top labels">
                                {({ isActive }) => (
                                    <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                        Weekly top labels
                                    </h1>
                                )}
                            </NavLink>
                        </div>
                        <ComboboxBasic />
                        <div className='text-sm flex  md:ml-40 justify-between '>
                            <p className='text-[#838383] '>LABEL</p>
                            <p className='text-[#838383] md:pr-50'>GENERES</p>
                            <p className='text-[#838383] pr-10'>TOTAL PACK</p>
                        </div>
                        <div className='w-full'>
                            {cardData.map((data, index) => (
                                <PackCard
                                    key={index}
                                    id={data.id}
                                    src={data.src}
                                    title={data.title}
                                    description={data.description}
                                    img={data.img}
                                    num={data.num}
                                    ChangeRow={index % 2 === 1}
                                    variant="label"

                                />
                            ))}

                        </div>
                    </div>
                </div>
            </main>
        </div>)
}
