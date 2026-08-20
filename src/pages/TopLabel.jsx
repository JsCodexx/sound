import React from 'react'
import NavBar from '@/components/NavHome'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PackCard from '@/components/PackCard'
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
            <div className='flex ml-35 mt-5 gap-5 relative w-auto'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-black font-extrabold cursor-pointer '>Sounds</h1>
                    <div>
                        <NavLink to="/sound">
                            {({ isActive }) => (
                                <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                    Browse
                                </h1>
                            )}
                        </NavLink>

                        <NavLink to="/top labels">
                            {({ isActive }) => (
                                <h1 className={`text-black cursor-pointer ${isActive ? 'font-bold' : ''}`}>
                                    Charts
                                </h1>
                            )}
                        </NavLink>
                    </div>
                    <div>
                        <h1 className='text-black '>Your Library</h1>
                        <h1 className='text-black cursor-pointer'>Sounds</h1>
                    </div>
                </div>
                <img src="src/assets/line.png" alt="" className='h-420' />
                <div className='flex flex-col gap-4'>
                    <h1 className=' text-red-400  font-bold ml-60'>You are currently viewing company sounds</h1>
                    <hr className='w-240 mr-0' />
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
                    <div>
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
        </div>)
}
