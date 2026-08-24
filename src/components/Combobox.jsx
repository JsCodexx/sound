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
        <div className="w-75 md:w-full">
            <Combobox items={frameworks} >
                <div className="rounded-none">
                    <ComboboxInput placeholder="All Levels" />
                </div>

                <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                        {(item) => (
                            <ComboboxItem key={item} value={item}>
                                {item}
                            </ComboboxItem>
                        )}
                    </ComboboxList>
                </ComboboxContent>

            </Combobox>
        </div>


    )
}
