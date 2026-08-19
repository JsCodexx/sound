
import {
    Card,
} from "@/components/ui/card"


export function CardDemo({ src, title, packs, tags, variant }) {
    console.log("waleed")
    console.log(src, title, packs, tags, "data")
    return (
        <>
            {variant === "Midi" ?
                <Card Card className=" h-65 w-[140px] mb-8 mt-2  rounded-none p-0" >
                    <div className="flex gap-5 ">
                        <div className="flex flex-col ">
                            <div>
                                <img src={src} alt={title} width={55} className="   w-35" />
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-3 mt-2 px-2">
                                    <h1 className="text-black font-semibold">{title}</h1>
                                    <p className="text-[#A9A9A9]">{packs}</p>
                                </div>
                                <div className="flex gap-3 text-[#A9A9A9] px-2">
                                    {tags}
                                </div>
                            </div>
                        </div>
                    </div>

                </Card> :
                <Card Card className="w-[320px] h-25 max-w-sm bg-[#F6F6F6] rounded-none " >
                    <div className="flex gap-5">
                        <div>
                            <img src={src} alt={title} width={55} className="mt-1 ml-2" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex gap-5 mt-2">
                                <h1 className="text-black font-semibold">{title}</h1>
                                <p className="text-red-500">{packs}</p>
                            </div>
                            <div className="flex gap-3">
                                {tags.map((tag) => {
                                    <button className="w-[62.99px] h-[30.31px] rounded-2xl bg-[#EBEBEB]">
                                        {tag}
                                    </button>
                                })}
                            </div>
                        </div>
                    </div>

                </Card>
            }

        </>
    )
}
