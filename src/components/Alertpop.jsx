import { CheckCircle2Icon } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"


export function AlertDemo({ set }) {

    return (
        <>
            <div className="relative">
                <div className="grid w-100 max-w-md items-start gap-4  absolute left-110  top-0  ">

                    <Alert className="flex flex-col pl-10 bg-white h-60 py-5 px-5" >
                        <img className="ml-40 mb-5" src="/src/assets/msg.png" alt="" width={70} />

                        <AlertDescription className="mb-5 px-10 ml-5">
                            Verify your email address by clicking the link
                            sent in your email address and copy
                        </AlertDescription>
                        <button onClick={set} className="bg-gray-400 w-20 rounded-2xl ml-38 py-1 cursor-pointer">OK</button>
                    </Alert>

                </div>
            </div>


        </>
    )
}
