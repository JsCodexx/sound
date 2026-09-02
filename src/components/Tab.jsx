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
                <div className="ml-35">
                    <img src="/src/assets/v1.png" alt="" className="mt-50 ml-80 mb-3" />
                    <h1 className="text-[#707070] text-2xl  ml-35 mb-3">
                        Add sounds to your library with credits
                    </h1>
                    <p className="text-[#565656] text-center w-100 ml-35">Subscribe to Company to get monthly credits.
                        use credits to download samples, presets, and MIDI.</p>
                    <button className="w-[103px] h-[40px] text-[13px] rounded-4xl bg-[#404040] mt-5 ml-75 text-white font-Poppins">TRY FREE</button>
                </div>
            </TabsContent>
            <TabsContent value="analytics">
                <NavigationMenuDemo variant="present" />
                <div className="ml-35">
                    <img src="/src/assets/v1.png" alt="" className="mt-50 ml-80 mb-3" />
                    <h1 className="text-[#707070] text-2xl  ml-35 mb-3">
                        Add sounds to your library with credits
                    </h1>
                    <p className="text-[#565656] text-center w-100 ml-35">Subscribe to Company to get monthly credits.
                        use credits to download samples, presets, and MIDI.</p>
                    <button className="w-[103px] h-[40px] text-[13px] rounded-4xl bg-[#404040] mt-5 ml-75 text-white font-Poppins">TRY FREE</button>
                </div>
            </TabsContent>
            <TabsContent value="reports">
                <NavigationMenuDemo variant="present" />
                <div className="ml-35">
                    <img src="/src/assets/v1.png" alt="" className="mt-50 ml-80 mb-3" />
                    <h1 className="text-[#707070] text-2xl  ml-35 mb-3">
                        Add sounds to your library with credits
                    </h1>
                    <p className="text-[#565656] text-center w-100 ml-35">Subscribe to Company to get monthly credits.
                        use credits to download samples, presets, and MIDI.</p>
                    <button className="w-[103px] h-[40px] text-[13px] rounded-4xl bg-[#404040] mt-5 ml-75 text-white font-Poppins">TRY FREE</button>
                </div>
            </TabsContent>

        </Tabs>
    )
}
