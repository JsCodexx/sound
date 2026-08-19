import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function MyAlertDialog({ close }) {
    return (
        <AlertDialog className="relative ">
            <AlertDialogTrigger asChild>
                <button   >
                    <img src="src/assets/Frame7(1).png" alt="" className='mt-0 ml-14 cursor-pointer absolute top-82' width={280} />
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle><img src="/src/assets/alert.png" alt="" onClick={close} /></AlertDialogTitle>
                    <AlertDialogDescription>

                    </AlertDialogDescription>
                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>
    )
}
