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

    ]
    return (
        <>
            {variant === "crouse" ?
                <>
                    <Carousel
                        opts={{
                            align: "start",

                        }}
                        className="w-full  sm:max-w-xs md:max-w-2xl"
                    >
                        <CarouselContent>
                            {imgData.map((data, index) => (
                                <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
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
                        <div className="mt-100">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>

                    </Carousel>
                </> : <>
                    <Carousel
                        opts={{
                            align: "start",

                        }}
                        className="w-full  sm:max-w-xs md:max-w-2xl"
                    >
                        <CarouselContent>
                            {cardData.map((data, index) => (
                                <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
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
                        <div className="mt-100">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>

                    </Carousel>
                </>
            }
        </>
    )

}
