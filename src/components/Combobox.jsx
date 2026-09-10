"use client"

import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"

import { useState } from "react";
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
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full xl:w-260 relative">

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm" />
            )}

            <Combobox
                items={frameworks}
                className="rounded-none relative z-50"
            >
                <div className="border-none">
                    <ComboboxInput
                        placeholder="All Levels"
                        className="rounded-none px-0 py-5"
                        onFocus={() => setIsOpen(true)}
                        onBlur={() => setIsOpen(false)}
                    />
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
