import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const months = [
    { label: "MM", value: null },
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" },
    { label: "07", value: "07" },
    { label: "08", value: "08" },
    { label: "09", value: "09" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
]

const years = [
    { label: "YYYY", value: null },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
    { label: "2028", value: "2028" },
    { label: "2029", value: "2029" },
]

export function FieldDemo() {
    return (
        <div className="w-full max-w-md ml-90 mt-5 mb-10 border-2 px-4 py-4 rounded-xl">
            <form>
                <FieldGroup>
                    <FieldSet>

                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                    Your email address*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-name-43j"

                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                    Username*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-number-uw1"

                                    required
                                />

                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                    How can we help?*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-number-uw1"

                                    required
                                />

                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                    Subject*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-number-uw1"

                                    required
                                />

                            </Field>

                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />

                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                    Description*
                                </FieldLabel>
                                <Textarea
                                    id="checkout-7j9-optional-comments"

                                    className="resize-none"
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <Field orientation="horizontal">
                        <Button type="submit" className="ml-40 bg-red-600 px-5 py-5 rounded-2xl">Submit</Button>

                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}
