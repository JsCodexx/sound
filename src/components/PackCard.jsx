import React from 'react'

export default function PackCard({ src, id, description, img, num, title, ChangeRow, showArrow, variant, ChangeColoum }) {
    return (
        <div>
            {variant === "label" ? (
                <div
                    className={`bg-[#E9E9E9] w-full h-auto flex justify-between ${ChangeRow ? "bg-[#FFFFFF]" : ""
                        }`}
                >
                    <div className="flex gap-20">
                        <img src={src} alt="" />

                        <div className="flex gap-8">
                            <h1 className="mt-5">{id}</h1>
                            <h1 className="text-[#000000] font-semibold mt-5">{title}</h1>
                        </div>

                        <div className="flex mt-3">
                            <div className="flex gap-3">
                                {description.map((tag) => (
                                    <button
                                        key={tag}
                                        className="w-[79px] h-[32px] rounded-2xl text-sm text-[#4F4F4F] bg-[#FFFFFF]"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 pr-10 pt-4">
                        <img src={img} alt="" className="h-3 w-3 mt-3" />
                        <p className="text-[#4F4F4F] pt-2 text-sm">{num}</p>

                        {showArrow && (
                            <img src={showArrow} alt="" className="h-3 w-3 mt-3" />
                        )}
                    </div>
                </div>
            ) : variant === "chart" ? (
                <div
                    className={`bg-[#E9E9E9] w-full h-auto flex justify-between ${ChangeRow ? "bg-[#FFFFFF]" : ""
                        }`}
                >
                    <div className="flex gap-20">
                        <img src={src} alt="" />

                        <h1 className="mt-5">{id}</h1>

                        <div className="flex flex-col mt-3">
                            <h1 className="text-[#5D5D5E] font-bold">{title}</h1>
                            <p className="text-[#868E96] text-sm">{description}</p>
                        </div>
                    </div>

                    <div className="flex gap-4 pr-10 pt-4">
                        <img src={img} alt="" className="h-10 w-8" />

                        <p className="text-[#4F4F4F] pt-2 text-sm">{num}</p>

                        {showArrow && (
                            <img src={showArrow} alt="" className="h-3 w-3 mt-3" />
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


                    </div> : ""
            }

        </div>
    )
}
