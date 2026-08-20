import { Button } from "@/components/ui/button"
import {
    Card,

} from "@/components/ui/card"

export function Cards() {
    return (
        <Card size="sm" className="p-0 rounded-none h-60 w-[440px] max-w-lg">
            <div className=" bg-[#F5F5F5] h-13 p-3 border-[#EBEBEB] rounded-none flex gap-60">
                <h1 className="font-bold text-2xl">Astra</h1>
                <p className="text-[12px] mt-2 text-red-700">View All</p>
            </div>
            <div className="h-60 flex gap-30 mt-0">
                <div className="flex gap-30">
                    <ul className="flex flex-col gap-4 text-left px-2 text-[#5C5C5C]">
                        <li className="ml-2">Kicks</li>
                        <li className="ml-2">Hats</li>
                        <li className="ml-2">Breaks</li>
                        <li className="ml-2">Accoustic</li>
                        <li className="ml-2">Breaks</li>

                    </ul>

                    <ul className="flex flex-col gap-4 text-left px-2 text-[#5C5C5C]">
                        <li className="ml-2">Snares</li>
                        <li className="ml-2">fares</li>
                        <li className="ml-2">cars</li>
                        <li className="ml-2">Accoustic</li>
                        <li className="ml-2">Breaks</li>

                    </ul>

                </div>

            </div>

        </Card>
    )
}

