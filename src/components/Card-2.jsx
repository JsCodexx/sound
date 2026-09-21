
import {
    Card,
} from "@/components/ui/card"


export function CardDemo({ src, title, packs, tags, variant, free }) {

    console.log(src, title, packs, tags, "data")
    return (
        <>
            {variant === "Midi" ?
                <Card Card className=" h-65 w-full lg:w-40    mb-8 mt-2   p-0 " >
                    <div className="flex gap-0 justify-center items-center ">
                        <div className="  ">
                            <div className="relative w-full " >
                                <img src={src} alt={title} className=" rounded-sm lg:w-full w-110 h-47" />
                                <img src={free} width={55} className="absolute top-0 right-0" />
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-0  mt-2 px-2">
                                    <h1 className="text-black text-[13px] font-bold">{title}</h1>
                                    <p className="text-[#A9A9A9] text-[10px]">{packs}</p>
                                </div>
                                <div className="flex gap-3 text-[#A9A9A9] px-2">
                                    {tags}
                                </div>
                            </div>
                        </div>
                    </div>

                </Card> :
                <Card Card className=" h-30 max-w-sm bg-[#F6F6F6] rounded-none " >
                    <div className="flex justify-center items-center gap-5 ">
                        <div>
                            <img src={src} alt={title} width={55} className="mt-1 ml-2" />

                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex gap-5 mt-2 ml-4">
                                <h1 className="text-black font-semibold">{title}</h1>
                                <p className="text-red-500">{packs}</p>
                            </div>
                            <div className="flex gap-3 px-2 ">
                                {tags.map((tag) => (
                                    <button className="px-4 py-3 rounded-2xl bg-[#EBEBEB]">
                                        {tag}
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>

                </Card>
            }

        </>
    )
}
