import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputButtonGroup() {
    return (
        <Field className="w-80 mt-4 ">
      
            <ButtonGroup >
                <Input className="bg-white"  placeholder="Type to search..." />
                <Button className="bg-black cursor-pointer text-white" variant="outline">Search</Button>
            </ButtonGroup>
        </Field>
    )
}
