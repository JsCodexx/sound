import React from 'react'
import NavBar from '@/components/NavHome'
import { Footer2 } from '@/components/footer2'
import Content from '@/components/Content'
import { useNavigate } from 'react-router-dom'
import { CardDemo } from '@/components/Card-2'

function Home() {
    const navigate = useNavigate()

    function handlePricePage() {
        navigate("/price")
    }
    const cardData = [
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l2.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l3.png",
            title: "Astral lounge  ",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l2.png",
            title: "Bradd web",
            packs: "RnB",
            tags: "Soul surplus"
        },
        {
            src: "/src/assets/l3.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus"
        },
    ]
    const cardData_2 = [
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus",
            free: "/src/assets/free.png"
        },
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus",
            free: "/src/assets/free2.png"
        },
        {
            src: "/src/assets/l2.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus",
            free: "/src/assets/free2.png"
        },
        {
            src: "/src/assets/l3.png",
            title: "Astral lounge  ",
            packs: "RnB",
            tags: "Soul surplus",
            free: "/src/assets/free2.png"
        },
        {
            src: "/src/assets/l1.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus",
            free: "/src/assets/free2.png"
        },
        {
            src: "/src/assets/l2.png",
            title: "Bradd web",
            packs: "RnB",
            tags: "Soul surplus",
            free: "/src/assets/free2.png"
        },
        {
            src: "/src/assets/l3.png",
            title: "The Front Porch",
            packs: "RnB",
            tags: "Soul surplus",
            free: "/src/assets/free2.png"
        },
    ]
    return (
        <>
            <div
className='overflow-x-hidden'
            >

                <NavBar />

                <div className='bg-[#CD4848] w-full h-15'>
                    <p className='text-white text-sm text-center pt-5'>For a limited time, subscribe to here and get Live music lite for free.<span className='text-yellow-500 cursor-pointer'>Get started</span> </p>
                </div>
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 ">
                    <div className='text-center mt-5'>
                        <h1 className='font-bold text-3xl'>Explore</h1>
                        <p>Dive into the Splice subscription.</p>
                    </div>
                    <div className='mt-10 md:ml-80'>
                        <img src="/src/assets/two.png" alt="" />
                    </div>
                    <div className='flex '>
                        <div className=' mt-20 md:ml-25'>
                            <h1 className='md:text-2xl font-bold mb-3'>How company name </h1>
                            <p className='mb-4'>See what Splice is all about in this short video.</p>
                            <div className='relative'>
                                <img className='absolute top-0' src="/src/assets/black.png" alt="" width={500} />
                                <img src="/src/assets/pic.png" alt="" width={500} />
                                <img className='absolute top-25 left-50 md:block hidden' src="/src/assets/play.png" alt="" width={80} />
                            </div>
                        </div>
                        <div className=' mt-20 ml-20'>
                            <h1 className='md:text-2xl font-bold mb-3'>Find Your Plan</h1>
                            <p className='mb-4'>See what Splice is all about in this short video.</p>
                            <div className='relative '>
                                <img className='absolute top-0' src="/src/assets/black.png" alt="" width={500} />
                                <img src="/src/assets/square.png" alt="" width={500} />
                                <img className='absolute top-25 left-50 md:block hidden' src="/src/assets/play.png" alt="" width={80} />
                            </div>
                        </div>
                    </div>

                    <div className='md:text-center mt-15'>
                        <h1 className='font-bold text-2xl text-center'>Sounds</h1>
                        <p className='md:w-300  text-gray-600 text-sm '>What's new
                            Splice comes with access to millions of the freshest samples, one-shots, loops, MIDI and presets. Here’s the latest.</p>
                    </div>

                    <div className='flex flex-wrap gap-2 md:gap-6 md:ml-17  '>
                        {cardData.map((data, index) => (
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

                    <div className='flex gap-2 md:ml-0 ml-45 md:absolute md:top-310 md:left-150 '>
                        <img src="/src/assets/left.png" alt="" />
                        <img src="/src/assets/right.png" alt="" />
                    </div>

                    <div className='text-center mt-25'>
                        <h1 className='font-bold text-2xl'>What's Free</h1>
                        <p className='md:w-300 text-gray-600'>What's new
                            Splice comes with access to millions of the freshest samples, one-shots, loops, MIDI and presets. Here’s the latest.</p>
                    </div>

                    <div className='flex flex-wrap gap-2 md:gap-6 md:ml-17  '>
                        {cardData_2.map((data, index) => (
                            <CardDemo
                                key={index}
                                src={data.src}
                                title={data.title}
                                packs={data.packs}
                                tags={data.tags}
                                free={data.free}
                                variant="Midi"
                            />
                        ))}
                    </div>
                    <div className='flex md:ml-0 ml-45 gap-2 md:absolute md:top-420 md:left-153 '>
                        <img src="/src/assets/left.png" alt="" />
                        <img src="/src/assets/right.png" alt="" />
                    </div>
                    <div className='relative  mt-25 w-full'>
                        <img src="/src/assets/song.png" alt="" />
                        <div className='absolute top-15  left-110'>
                            <h1 className='text-white text-3xl font-bold pb-3 '>Start Your Free Trial Today</h1>

                            <p className='text-white text-sm ml-4 pb-5 '>Get full access to Splice tools, skills, and free sounds.</p>
                            <button onClick={handlePricePage} className=' md:block hidden text-white bg-[#CD4848] px-10 py-2 rounded-4xl ml-15'>Start Your Free Trial</button>
                            <p className='text-white text-sm ml-25 mt-3'>Try risk-free for 14 days.</p>
                        </div>

                    </div>
                </div>
                <Content />


            </div>
            <Footer2 />
        </>
    )
}

export default Home
