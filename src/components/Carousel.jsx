import * as React from "react"
import { CardDemo } from "./Card-2"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize({ variant }) {
    const cardData = [
        {
            src: "/src/assets/x1.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x3.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x1.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x3.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x3.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x3.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/x3.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
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
            src: "/src/assets/x5.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },

    ]

    const LandimgData = [
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
            src: "/src/assets/l1.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },
        {
            src: "/src/assets/l1.png",
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
            src: "/src/assets/x5.png",
            title: "House: Start Here",
            packs: "Here a healthy hel...",
            tags: "Company Stars"
        },

    ]
    return (
        <>
            {variant === "crouse" ? (
                <>
                    <Carousel
                        opts={{
                            align: "start",

                        }}
                        className="w-full  sm:max-w-xs md:max-w-2xl"
                    >
                        <CarouselContent>
                            {imgData.map((data, index) => (
                                <CarouselItem key={index} className="basis-1/1  md:basis-1/4">
                                    <div className="p-0 ml-6">
                                        <Card>
                                            <CardContent className="flex   pl-0">
                                                <CardDemo
                                                    key={index}
                                                    src={data.src}
                                                    title={data.title}
                                                    packs={data.packs}
                                                    tags={data.tags}
                                                    variant="Midi"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className=" ">
                            <CarouselPrevious className="mt-75" />
                            <CarouselNext className="mt-75" />
                        </div>

                    </Carousel>
                </>
            ) : variant === 'land' ? (
                <>
                    <Carousel
                        opts={{
                            align: "start",

                        }}
                        className="w-full  sm:max-w-xs md:max-w-4xl"
                    >
                        <CarouselContent>
                            {LandimgData.map((data, index) => (
                                <CarouselItem key={index} className="basis-1/2 lg:basis-1/7">
                                    <div className="p-0">
                                        <Card>
                                            <CardContent className="flex  p-0">
                                                <CardDemo
                                                    key={index}
                                                    src={data.src}
                                                    title={data.title}
                                                    packs={data.packs}
                                                    tags={data.tags}
                                                    variant="Midi"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className=" ">
                            <CarouselPrevious className="md:ml-35 mt-80" />
                            <CarouselNext className="md:ml-30 mt-80" />
                        </div>

                    </Carousel>
                </>

            )
                : <>
                    <Carousel
                        opts={{
                            align: "start",

                        }}
                        className="w-full"
                    >
                        <CarouselContent className="">
                            {cardData.map((data, index) => (
                                <CarouselItem key={index} className="basis-1/1  md:basis-1/4">
                                    <div className=" ">
                                        <Card>
                                            <CardContent className="flex   gap-0 p-0">
                                                <CardDemo
                                                    key={index}
                                                    src={data.src}
                                                    title={data.title}
                                                    packs={data.packs}
                                                    tags={data.tags}
                                                    variant="Midi"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className=" ">
                            <CarouselPrevious className="mt-75" />
                            <CarouselNext className="mt-75" />
                        </div>
                    </Carousel>
                </>
            }
        </>
    )

}
