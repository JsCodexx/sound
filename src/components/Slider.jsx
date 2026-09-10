import { Slider } from "@/components/ui/slider"

export function SliderVertical() {
    return (
        <div className="mx-auto flex w-5 rounded-b-2xl max-w-xs pb-3 items-center bg-black  justify-center gap-6">
            <Slider
                defaultValue={[100]}
                max={100}
                step={1}
                orientation="vertical"
                className="h-40 "
            />

        </div>
    )
}
