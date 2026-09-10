
import {
    Card,
    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function CardSmall({ variant, description }) {
    const featureName = "Drums"
    const gene = "Hip Hop"
    const Pop = "Pop / EDM"


    return (
        <div >

            {variant === "genres" ?
                <div className="flex flex-col justify-center items-start lg:gap-0 gap-5">
                    <div className="flex flex-wrap justify-center items-center lg:gap-0 gap-5">
                        <Card className=" p-0 rounded-none border-[#EBEBEB] border-1 ml-0 h-65  md:w-40">
                            <CardHeader className=" bg-[#F5F5F5]   border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold  text-start py-4  text-[20px]">{gene}</CardTitle>

                            </CardHeader>
                            <CardContent className="h-60 flex gap-30 mt-0">
                                <div className="flex flex-col">
                                    <ul className="flex flex-col gap-5 text-center text-[#5C5C5C]">
                                        <li className="ml-2">Kicks</li>
                                        <li className="ml-2">Hats</li>
                                        <li className="ml-2">Breaks</li>
                                        <li className="ml-2">Accoustic</li>
                                        <li className="ml-2">Breaks</li>

                                    </ul>

                                </div>

                            </CardContent>

                        </Card>
                        <Card  className=" p-0 rounded-none md:ml-4 border-[#EBEBEB] border-1  md:w-40">
                            <CardHeader className=" bg-[#F5F5F5] h  border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left py-4 text-[20px]">{Pop}</CardTitle>

                            </CardHeader>
                            <CardContent className="h-60 flex gap-30 mt-0">
                                <div className="">
                                    <ul className="text-center flex flex-col gap-5 text-[#5C5C5C]">
                                        {description.map((user) => (
                                            <li className="">{user}</li>
                                        )

                                        )}

                                    </ul>


                                </div>

                            </CardContent>


                        </Card>

                        <Card  className=" p-0 rounded-none md:ml-4 border-[#EBEBEB] border-1 h-65  md:w-40">
                            <CardHeader className=" bg-[#F5F5F5]  py-4 border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left text-[20px]">{gene}</CardTitle>

                            </CardHeader>
                            <CardContent className="h-60 flex  gap-30 mt-0">
                                <div className="flex flex-col">
                                    <ul className="flex flex-col gap-5 text-center text-[#5C5C5C]">
                                        <li className="ml-2">Kicks</li>
                                        <li className="ml-2">Hats</li>
                                        <li className="ml-2">Breaks</li>
                                        <li className="ml-2">Accoustic</li>
                                        <li className="ml-2">Breaks</li>


                                    </ul>

                                </div>

                            </CardContent>


                        </Card>

                        <Card  className=" p-0 rounded-none md:ml-4 border-[#EBEBEB] border-1  md:w-40">
                            <CardHeader className=" bg-[#F5F5F5]   border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left py-4 text-[20px]">{Pop}</CardTitle>

                            </CardHeader>
                            <CardContent className="h-60 flex gap-30 mt-0">
                                <div className="">
                                    <ul className="text-center flex flex-col gap-5 text-[#5C5C5C]">
                                        {description.map((user) => (
                                            <li className="">{user}</li>
                                        )

                                        )}

                                    </ul>


                                </div>

                            </CardContent>


                        </Card>

                    </div>
                    <div className=" ml-0 flex  flex-wrap justify-center items-center lg:gap-0 gap-5">
                        <Card className=" p-0 rounded-none mb-22 ml-0 border-[#EBEBEB] border-1 h-60 mt-[-15px]  md:w-40">
                            <CardHeader className=" bg-[#F5F5F5]   border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left py-4 text-[20px]">{gene}</CardTitle>

                            </CardHeader>
                            <CardContent className="h-65 flex gap-30 mt-0">
                                <div className="flex flex-col">
                                    <ul className="flex flex-col gap-5 text-center text-[#5C5C5C]">
                                        <li className="ml-2">Kicks</li>
                                        <li className="ml-2">Hats</li>
                                        <li className="ml-2">Breaks</li>
                                        <li className="ml-2">Accoustic</li>
                                        <li className="ml-2">Breaks</li>


                                    </ul>

                                </div>

                            </CardContent>


                        </Card>

                        <Card  className=" p-0 rounded-none md:ml-4 mt-3 border-[#EBEBEB] border-1   md:w-40">
                            <CardHeader className=" bg-[#F5F5F5]   border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left py-4 text-[20px]">{Pop}</CardTitle>

                            </CardHeader>
                            <CardContent className="h-60 flex gap-30 mt-0">
                                <div className="">
                                    <ul className="text-center flex flex-col gap-5 text-[#5C5C5C]">
                                        {description.map((user) => (
                                            <li className="">{user}</li>
                                        )

                                        )}

                                    </ul>


                                </div>

                            </CardContent>


                        </Card>

                        <Card  className=" p-0 rounded-none md:ml-4 mb-13 border-[#EBEBEB] border-1 h-65 mt-[-15px]  md:w-40">
                            <CardHeader className=" bg-[#F5F5F5]  border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left py-4 text-[20px]">{gene}</CardTitle>

                            </CardHeader>
                            <CardContent className="h-60 flex gap-30 mt-0">
                                <div className="flex flex-col">
                                    <ul className="flex flex-col gap-5 text-center text-[#5C5C5C]">
                                        <li className="ml-2">Kicks</li>
                                        <li className="ml-2">Hats</li>
                                        <li className="ml-2">Breaks</li>
                                        <li className="ml-2">Accoustic</li>
                                        <li className="ml-2">Breaks</li>


                                    </ul>

                                </div>

                            </CardContent>


                        </Card>

                        <Card  className=" p-0 rounded-none md:ml-4 mt-3 border-[#EBEBEB] border  md:w-40">
                            <CardHeader className=" bg-[#F5F5F5]   border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left py-4 px-1 text-[20px]">{Pop}</CardTitle>

                            </CardHeader>
                            <CardContent className="h-60 flex gap-30 mt-0">
                                <div className="">
                                    <ul className="text-center flex flex-col gap-5 text-[#5C5C5C]">
                                        {description.map((user) => (
                                            <li className="">{user}</li>
                                        )

                                        )}

                                    </ul>


                                </div>

                            </CardContent>


                        </Card>

                    </div>
                </div>
                :
                <Card className="p-0 ml-0 border-1 h-60 border-[#EBEBEB] lg:w-112.5 rounded-none overflow-hidden">
                    <CardHeader className="flex justify-between bg-[#F5F5F5] px-8 h-10 text-left py-1 rounded-none border-b border-[#EBEBEB]">
                        <CardTitle className="font-bold text-xl">{featureName}</CardTitle>
                        <CardDescription className="text-[10px] pt-2 text-red-600 font-semibold"> View All </CardDescription>
                    </CardHeader>
                    <CardContent className="h-40 flex gap-30 mt-0 pt-4">
                        <div>
                            <ul className="flex flex-col gap-5 text-[#5C5C5C]">
                                <li className="ml-2">Kicks</li>
                                <li className="ml-2">Hats</li>
                                <li className="bg-black font-bold rounded-2xl text-white text-center px-1 py-1 mr-2">Toms</li>
                                <li className="ml-2">Breaks</li>
                                <li className="ml-2">Accoustic</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-5 text-[#5C5C5C]">
                                <li>Shares</li>
                                <li>Claps</li>
                                <li className="mb-2">Cymbols</li>
                                <li>Fills</li>

                            </ul>
                        </div>
                    </CardContent>
                </Card>

            }

        </div>
    )
}
