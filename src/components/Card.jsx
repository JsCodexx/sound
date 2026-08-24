
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
                <div className="flex flex-col md:flex-row">
                    <div div className="flex flex-col">
                        <Card size="sm" className=" p-0 rounded-none ml-10 h-65  w-40">
                            <CardHeader className=" bg-[#F5F5F5] h-10 p-3 border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left ml-5 text-[20px]">{gene}</CardTitle>

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
                        <Card size="sm" className=" p-0 rounded-none ml-4   w-40">
                            <CardHeader className=" bg-[#F5F5F5] h-10 p-3 border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left ml-5 text-[20px]">{Pop}</CardTitle>

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

                        <Card size="sm" className=" p-0 rounded-none ml-4 h-65  w-40">
                            <CardHeader className=" bg-[#F5F5F5] h-10 p-3 border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left ml-5 text-[20px]">{gene}</CardTitle>

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

                        <Card size="sm" className=" p-0 rounded-none ml-4   w-40">
                            <CardHeader className=" bg-[#F5F5F5] h-10 p-3 border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left ml-5 text-[20px]">{Pop}</CardTitle>

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
                    <div className=" ml-6 flex flex-col md:flex-row ">
                        <Card size="sm" className=" p-0 rounded-none ml-4 h-65 mt-[-15px]  w-40">
                            <CardHeader className=" bg-[#F5F5F5] h-10 p-3 border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left ml-5 text-[20px]">{gene}</CardTitle>

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

                        <Card size="sm" className=" p-0 rounded-none ml-4 mt-3   w-40">
                            <CardHeader className=" bg-[#F5F5F5] h-10 p-3 border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left ml-5 text-[20px]">{Pop}</CardTitle>

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

                        <Card size="sm" className=" p-0 rounded-none ml-4 h-65 mt-[-15px]  w-40">
                            <CardHeader className=" bg-[#F5F5F5] h-10 p-3 border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left ml-5 text-[20px]">{gene}</CardTitle>

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

                        <Card size="sm" className=" p-0 rounded-none ml-4 mt-3   w-40">
                            <CardHeader className=" bg-[#F5F5F5] h-10 p-3 border-[#EBEBEB] rounded-none">
                                <CardTitle className="font-Poppins font-bold text-left ml-5 text-[20px]">{Pop}</CardTitle>

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
                <Card size="sm" className=" p-0 rounded-none ml-10  w-sm">
                    <CardHeader className="flex justify-between bg-[#F5F5F5] h-10 text-left p-3 border-[#EBEBEB] rounded-none">
                        <CardTitle className="font-extrabold text-2xl">{featureName}</CardTitle>
                        <CardDescription className="text-[10px] text-red-700">
                            View All
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="h-40 flex gap-30 mt-0">
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
                                <li >Shares</li>
                                <li>Claps</li>
                                <li>Cymbols</li>
                                <li>Fills</li>
                                <li>909</li>
                            </ul>
                        </div>
                    </CardContent>

                </Card>
            }

        </div>
    )
}
