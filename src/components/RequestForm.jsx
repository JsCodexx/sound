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
import { AlertDialog } from '@/components/ui/alert-dialog'
import { AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { AlertDialogContent } from '@/components/ui/alert-dialog'
import { AlertDialogCancel } from '@/components/ui/alert-dialog'

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
        <div className="w-full max-w-lg  mt-5 mb-10 border-2 px-4 py-4 rounded-sm">
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-name-43j " className="text-[#404041]">
                                    Your email address*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-name-43j"
                                    className="rounded-none"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1" className="text-[#404041]">
                                    Username*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-number-uw1"
                                    className="rounded-none"
                                    required
                                />

                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1" className="text-[#404041]">
                                    How can we help?*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-number-uw1"
                                    className="rounded-none"
                                    required
                                />

                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1" className="text-[#404041]">
                                    Subject*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-number-uw1"
                                    className="rounded-none"
                                    required
                                />

                            </Field>

                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />

                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-optional-comments" className=" text-[#404041]">
                                    Description*
                                </FieldLabel>
                                <Textarea
                                    id="checkout-7j9-optional-comments"

                                    className="resize-none rounded-none h-25"
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <p className="text-[#404041]" >Attachment (optional)</p>
                    <div className="flex gap-6">
                        <Button className=" bg-gray-500 w-30 px-5 text-sm py-5 rounded-4xl">Browse</Button>
                        <p className="mt-3 text-red-600">Supported formats). jpeg,.pdf,.png)</p>
                    </div>

                    <AlertDialog >
                        <AlertDialogTrigger asChild>
                            <Button className=" bg-red-400 px-5 text-sm py-5 rounded-4xl">SUBMIT</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="flex flex-col justify-center items-center">
                            <img className=" mb-5" src="/src/assets/msg.png" alt="" width={70} />
                            <p className='w-65 '>Your Request Submit Sucessfully!</p>
                            <AlertDialogCancel className="w-35 hover:bg-none bg-red-400">
                                <button className="text-white ">Search a music</button>
                            </AlertDialogCancel>
                        </AlertDialogContent>
                    </AlertDialog>

                </FieldGroup>
            </form>
        </div>
    )
}
