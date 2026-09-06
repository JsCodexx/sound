import React from 'react'
import NavBar from '@/components/NavHome'
import PackCard from '@/components/PackCard'
import { NavLink } from 'react-router-dom'
import { CardDemo } from '@/components/Card-2'
import { Link } from 'react-router-dom'
import SideBar from '@/components/SideBar'
export default function Sound2() {
    const cardData = [
        {
            src: "/src/assets/small1.png",
            id: "1",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small2.png",
            id: "2",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",



        },
        {
            src: "/src/assets/small1.png",
            id: "3",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small2.png",
            id: "4",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",


        },
        {
            src: "/src/assets/small1.png",
            id: "5",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small2.png",
            id: "6",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small1.png",
            id: "7",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small2.png",
            id: "8",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small1.png",
            id: "9",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small2.png",
            id: "10",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small2.png",
            id: "11",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small1.png",
            id: "12",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small2.png",
            id: "13",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small1.png",
            id: "14",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small2.png",
            id: "15",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small1.png",
            id: "16",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small2.png",
            id: "17",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
        {
            src: "/src/assets/small1.png",
            id: "18",
            title: "os_Do_Kick_in",

            img: "/src/assets/duo.png",

        },
    ]

    const imgData = [
        {
            src: "/src/assets/x4.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x5.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x4.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x5.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x5.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x4.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x4.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x5.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x4.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x5.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x5.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x4.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },

    ]
    return (
        <>


            <main className="mx-auto w-full max-w-360  ">
                <NavBar />
                <div className='flex  mt-5  w-auto  '>
                    <div className='mt-13'>
                        <SideBar variant="mobileSide" className="md:hidden block" />
                    </div>
                    <div className='mt-10'>
                        <SideBar variant="desktop" className="md:block  hidden" />
                    </div>


                    <div className='flex flex-col relative '>
                        <h1 className=' text-red-600 mb-5 font-bold text-center'>You are currently viewing company sounds</h1>
                        <hr className='md:w-1050 w-0 absolute  right-0  top-10' />
                        <div className='mt-10 relative md:block hidden '>
                            <img src="/src/assets/m1.png" alt="" className=' md:w-230 ml-6 w-auto ' />
                            <div className='absolute top-7 md:left-70 left-30'>
                                <h1 className='font-semibold text-xl text-white mb-3 '>Subscribe to download sounds from 620 Packs</h1>
                                <Link to="/subsound"> <button className='text-white font-bold text-xl ml-30 text-center bg-black  w-50 h-10 rounded-4xl'>GET STARTED</button> </Link>
                            </div>

                        </div>
                        <div className='  flex md:flex-row flex-col gap-3 mr-5'>
                            <div
                                className=' mt-5 ml-5 w-85 h-60 bg-black rounded-2xl'>

                                <img src="/src/assets/insideblacky.png" alt="" className='pb-3 ml-25 mt-4' />
                                <h1 className='text-white font-bold text-2xl ml-25 pb-2'>Power <span className='text-gray-600 font-medium'>Tone</span></h1>
                                <div className='flex ml-14 gap-2'>
                                    <span className='text-gray-50'>All Genres | </span ><span className='text-gray-50' > Live Sounds  |</span> <span className='text-gray-50' >Rock  </span>
                                </div>

                            </div>
                            <div className='mt-5 relative'>
                                <img src="/src/assets/b1.png" alt="" className='w-145 h-60' />
                                <img src="/src/assets/grayshade.png" alt="" className='absolute top-0 h-60' />
                                <div className='absolute top-12 left-5'>
                                    <img src="/src/assets/Power.png" alt="" className='pb-5' />
                                    <p className='text-white text-sm pr-3'>It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at its layout. The point of using
                                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English. Many desktop publishing
                                    </p>
                                </div>

                            </div>


                        </div>
                        <div className='bg-[#F1F1F1] md:w-233 w-auto h-10 text-center mt-7 md:ml-6 pt-2 text-[#484747] font-medium'>
                            <Link to="/buy"><h1 className='cursor-pointer'>Featured Release</h1></Link>
                        </div>

                        <p className='text-[#222222] font-medium font-Poppins ml-13 mt-5'>Trending This Week</p>
                        <div className=' md:ml-13 mt-5 flex gap-3  flex-wrap'>
                            {cardData.map((data, index) => (
                                <div className='w-74 text-[10px] '>
                                    <PackCard
                                        key={index}
                                        src={data.src}
                                        title={data.title}
                                        img={data.img}
                                        id={data.id}
                                        ChangeColoum={Math.floor(index / 3) % 2 == 0}
                                        variant="small"
                                    />
                                </div>

                            ))}
                        </div>
                        <div className='bg-[#F1F1F1] md:w-233 w-auto h-10 text-center mt-7 md:ml-8 pt-2 text-[#484747] font-medium'>
                            <h1>Recent Release</h1>
                        </div>
                        <div className='flex flex-wrap gap-4 mt-5 md:ml-10'>
                            {imgData.map((data, index) => (
                                <CardDemo
                                    key={index}
                                    src={data.src}
                                    title={data.title}
                                    packs={data.packs}
                                    tags={data.tags}
                                    variant="Midi"
                                />


                            ))}
                        </div>


                    </div>

                </div>
            </main>

        </>
    )
}
