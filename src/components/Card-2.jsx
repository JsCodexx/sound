import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardDemo() {
    return (
        <Card className="w-[320px] h-25 max-w-sm bg-[#F6F6F6] rounded-none ">
            <div className="flex gap-5">
                <div>
                    <img src="/src/assets/c1.png" alt="" width={55} className="mt-1 ml-2" />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex gap-5 mt-2">
                        <h1 className="text-black font-semibold">Art House</h1>
                        <p className="text-red-500">956 Packs</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="w-[62.99px] h-[30.31px] rounded-2xl bg-[#EBEBEB]">Edm</button>
                        <button className="w-[62.99px] h-[30.31px] rounded-2xl bg-[#EBEBEB]">Vocals</button>
                        <button className="w-[80.99px] text-[12px]  h-[30.31px] rounded-2xl bg-[#EBEBEB]">Future </button>
                    </div>
                </div>
            </div>

        </Card>
    )
}
