"use client"

import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"

const frameworks = [
    <b className=""> All Levels</b>,
    "acustic audio",
    "acustic audio",
    "acustic audio",
    "acustic audio",
    "acustic audio",
    "acustic audio",
    "acustic audio",
    <b>Audio emperia</b>,
    "acustic audio",
    "acustic audio",
    "acustic audio",
    "acustic audio",
    "acustic audio",
    "acustic audio",
    "acustic audio",
]

export function ComboboxBasic() {
    return (
        <div className="w-full xl:w-260">
            <Combobox items={frameworks} className="rounded-none">
                <div className="border-none">

                    <ComboboxInput placeholder="All Levels" className="rounded-none px-3 py-5" />
                </div>

                <ComboboxContent className="rounded-none">
                    <ComboboxEmpty>No items found.</ComboboxEmpty>

                    <ComboboxList className="border rounded-none">
                        {(item) => (
                            <ComboboxItem key={item} value={item} className="rounded-none">
                                {item}
                            </ComboboxItem>
                        )}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </div>


    )
}
