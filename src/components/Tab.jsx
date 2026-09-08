import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { NavigationMenuDemo } from '@/components/Arrowtabs'

export function TabsDemo() {
    return (
        <Tabs defaultValue="overview" className="w-full ">
            <TabsList className="bg-transparent">
                <TabsTrigger value="overview" className="text-[18px] font-bold">Sample</TabsTrigger>
                <TabsTrigger value="analytics" className="text-[18px] font-bold">Presents</TabsTrigger>
                <TabsTrigger value="reports" className="text-[18px] font-bold">Packs</TabsTrigger>

            </TabsList>
            <TabsContent value="overview">

                <NavigationMenuDemo />
                <div className="flex  flex-col justify-center items-center w-full h-150 gap-5">
                    <img src="/src/assets/v1.png" alt="" className="w-20" />
                    <h1 className="text-[#707070] text-2xl  ">
                        Add sounds to your library with credits
                    </h1>
                    <p className="text-[#565656] text-center w-100 ">Subscribe to Company to get monthly credits.
                        use credits to download samples, presets, and MIDI.</p>
                    <button className="w-[103px] h-[40px] text-[13px] rounded-4xl bg-[#404040]  text-white font-Poppins">TRY FREE</button>
                </div>
            </TabsContent>
            <TabsContent value="analytics">
                <NavigationMenuDemo variant="present" />
                <div className="flex flex-col h-150 justify-center items-center gap-5">
                    <img src="/src/assets/v1.png" alt="" className="w-20" />
                    <h1 className="text-[#707070] text-2xl  ">
                        Add sounds to your library with credits
                    </h1>
                    <p className="text-[#565656] text-center w-100">Subscribe to Company to get monthly credits.
                        use credits to download samples, presets, and MIDI.</p>
                    <button className="w-[103px] h-[40px] text-[13px] rounded-4xl bg-[#404040]  text-white font-Poppins">TRY FREE</button>
                </div>
            </TabsContent>
            <TabsContent value="reports">
                <NavigationMenuDemo variant="present" />
                <div className="flex flex-col justify-center items-center gap-5 h-150">
                    <img src="/src/assets/v1.png" alt="" className="w-20" />
                    <h1 className="text-[#707070] text-2xl  ">
                        Add sounds to your library with credits
                    </h1>
                    <p className="text-[#565656] text-center w-100 ">Subscribe to Company to get monthly credits.
                        use credits to download samples, presets, and MIDI.</p>
                    <button className="w-[103px] h-[40px] text-[13px] rounded-4xl bg-[#404040]  text-white font-Poppins">TRY FREE</button>
                </div>
            </TabsContent>

        </Tabs>
    )
}
