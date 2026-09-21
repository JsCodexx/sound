import { SearchIcon } from "lucide-react"

import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupInlineStart() {
    return (

        <div className="" >
            <Field className="w-115">

                <InputGroup className="mt-5  rounded-none md:ml-87  ">
                    <InputGroupInput id="inline-start-input" placeholder="How can we help?" />
                    <InputGroupAddon align="inline-start">
                        <SearchIcon className="text-muted-foreground" />
                    </InputGroupAddon>
                </InputGroup>

            </Field >
        </div>
    )
}
