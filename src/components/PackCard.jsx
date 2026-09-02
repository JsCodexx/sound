import React from 'react'

export default function PackCard({ src, id, description, img, num,num1, title, ChangeRow, showArrow, variant, ChangeColoum, icon, time, keys, three, BPM }) {
    return (
        <div>
            {variant === "label" ? (
                <div
                    className={`bg-[#E9E9E9] w-full min-h-[64px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 px-4 py-3 ${ChangeRow ? "bg-[#FFFFFF]" : ""
                        }`}
                >

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 lg:gap-10 min-w-0">
                        <img
                            src={src}
                            alt=""
                            className="w-10 h-10 sm:w-12 sm:h-12  shrink-0"
                        />


                        <div className="flex items-center gap-3 min-w-0">
                            <h1 className="text-sm  shrink-0">{id}</h1>

                            <h1 className="text-[#000000] font-semibold text-sm sm:text-base truncate">
                                {title}
                            </h1>
                        </div>


                        <div className="flex flex-wrap gap-2">
                            {description.map((tag) => (
                                <button
                                    key={tag}
                                    className="min-w-[79px] h-[32px] px-3 rounded-2xl text-xs sm:text-sm text-[#4F4F4F] bg-white whitespace-nowrap"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center  gap-2 lg:pr-6 shrink-0">
                        <img
                            src={img}
                            alt=""
                            className="h-3 w-3 object-contain"
                        />

                        <p className="text-[#4F4F4F] text-xs sm:text-sm">
                            {num}
                        </p>

                        {showArrow && (
                            <img
                                src={showArrow}
                                alt=""
                                className="h-3 w-3"
                            />
                        )}
                    </div>
                </div>

            ) : variant === "chart" ? (
                <div
                    className={`bg-[#E9E9E9] w-full min-h-[70px] flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 p-3 md:px-5 ${ChangeRow ? "bg-white" : ""
                        }`}
                >

                    <div className="flex items-center gap-3 sm:gap-5 md:gap-10 lg:gap-20 min-w-0">
                        <img
                            src={src}
                            alt=""
                            className="w-10 h-10 sm:w-12 sm:h-12  shrink-0"
                        />

                        <h1 className="text-sm sm:text-base md:text-lg shrink-0">
                            {id}
                        </h1>

                        <div className="flex flex-col min-w-0">
                            <h1 className="text-[#5D5D5E] font-bold text-sm sm:text-base ">
                                {title}
                            </h1>

                            <p className="text-[#868E96] text-xs sm:text-sm line-clamp-2">
                                {description}
                            </p>
                        </div>
                    </div>


                    <div className="flex items-center  gap-3 sm:gap-4 md:pr-5  ">
                        <img
                            src={img}
                            alt=""
                            className="h-8 w-7 sm:h-10 sm:w-8 object-contain"
                        />

                        <p className="text-[#4F4F4F] text-xs sm:text-sm">
                            {num}
                        </p>

                        {showArrow && (
                            <>
                                <img
                                    src={showArrow}
                                    alt=""
                                    className="h-3 w-3 object-contain "
                                />
                                <p className={` text-xs sm:text-sm ${ChangeRow?"text-[#4F4F4F]":"text-[#E9E9E9]"}`}>
                                    {num1}
                                </p>
                            </>
                        )}
                    </div>
                </div>

            ) : ""}

            {
                variant === "small" ?
                    <div className={` bg-[#E9E9E9] w-full h-auto flex justify-between ${ChangeColoum ? '' : 'bg-[#FFFFFF]'}`}>

                        <div className='flex gap-8'>
                            <div className='flex gap-0'>
                                <img src={src} alt="" className='px-3 py-3' />
                                <h1 className='mt-5 font-semibold text-sm'>{id}</h1>
                            </div>

                            <div className='flex flex-col gap-1  mt-3'>
                                <h1 className='text-[#5D5D5E] font-bold'>{title}</h1>
                                <img src={img} alt="" className='h-5 w-14' />
                            </div>
                        </div>


                    </div> : variant === "buy" ? (
                        <div className={` bg-[#F5F5F5] md:scroll-auto w-full  flex justify-between ${ChangeColoum ? 'bg-[#FFFFFF]' : ''}`}>

                            <div className='flex gap-9'>
                                <div className='flex gap-0'>
                                    <img src={src} alt="" className='px-3 py-3 ' />
                                    <img src={icon} alt="" className='px-3 py-3' />
                                </div>

                                <div className='flex  gap-15  mt-2'>
                                    <h1 className='text-[#5D5D5E] font-bold mt-4'>{title}</h1>
                                    <img src={img} alt="" className='h-12 w-30 ' />
                                </div>
                                <div className='flex gap-15 mt-5 ml-10'>
                                    <p className='font-medium text-[#5E5E5E] '>{time}</p>
                                    <p>{keys}</p>
                                    <p>{BPM}</p>
                                </div>
                                <div className='ml-50 mt-5'>
                                    <img src={three} alt="" className='' />
                                </div>
                            </div>


                        </div>
                    ) : ""

            }

        </div>
    )
}
