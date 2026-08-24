import React from 'react'
import NavBar from '@/components/NavHome'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PackCard from '@/components/PackCard'
import SideBar from '@/components/SideBar'
import { ComboboxBasic } from '@/components/Combobox'
export default function Charts() {
    const cardData = [
        {
            src: "/src/assets/p1.png",
            id: "1",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "2",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
            ,
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "3",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "4",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p1.png",
            id: "5",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p3.png",
            id: "6",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p1.png",
            id: "7",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "8",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "9",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p1.png",
            id: "10",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "11",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "12",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "13",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "14",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "15",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "16",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "17",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "18",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "19",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "20",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "21",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "22",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "23",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "24",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "25",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "26",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "27",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "28",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "29",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "30",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "31",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "32",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
        {
            src: "/src/assets/p3.png",
            id: "33",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585"
        },
        {
            src: "/src/assets/p2.png",
            id: "34",
            title: "Tape & Vinyl Drums",
            description: "by sample Magic",
            img: "/src/assets/z2.png",
            num: "585",
            showArrow: "/src/assets/arror.png"
        },
    ]
    return (
        <div>
            <NavBar />
            <main className="mx-auto w-full max-w-[1440px] px-4 md:px-8 relative">
                <div className='flex md:ml-25 mt-5 md:gap-5 gap-3 relative w-auto'>
                    <SideBar />
                    <img src="src/assets/line.png" alt="" className='h-700' />
                    <div className='flex flex-col gap-4'>
                        <h1 className=' text-red-400  font-bold text-sm md:ml-60'>You are currently viewing company sounds</h1>
                        <hr className='md:w-240 mr-0' />
                        <div className='flex gap-10'>
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
                        <div className='w-75 md:w-full'>
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
                                    showArrow={data.showArrow}
                                    variant="chart"

                                />
                            ))}

                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
