import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function CheckboxInvalid() {
    return (
        <FieldGroup className="mt-7 w-56">
            <Field orientation="horizontal" data-invalid>
                <Checkbox
                    id="terms-checkbox-invalid"
                    name="terms-checkbox-invalid"
                    aria-invalid
                    className="bg-white hover:bg-red-800"
                    
                />
                
            </Field>
        </FieldGroup>
    )
}
