import { Heart } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
    return (
        <Toggle aria-label="Toggle bookmark"  variant="none">
            <div className="border-transparent rounded-none hover:bg-transparent">
                <Heart className="group-aria-pressed/toggle:fill-red-500   " />
            </div>



        </Toggle>
    )
}
