import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export function TabsLine({ variant }) {
    const navigate = useNavigate()
    function sound() {
        navigate("/sound")
    }
    return (
        <>
            {variant === "setting" ?
                <Tabs >
                    <TabsList variant="line">
                        <Link to="/settings"><TabsTrigger className='cursor-pointer' value="midi">Account</TabsTrigger></Link>
                        <Link to="/billings"><TabsTrigger className='cursor-pointer' value="biiling">Billing</TabsTrigger></Link>
                        <Link to="/plans">  <TabsTrigger className='cursor-pointer' value="plans">Plans</TabsTrigger></Link>
                        <Link to="/notifications"><TabsTrigger className='cursor-pointer' value="notification">Notifications</TabsTrigger></Link>
                    </TabsList>
                </Tabs>
                :
                <Tabs >
                    <TabsList >
                        <button onClick={sound}><TabsTrigger value="overview" >Overview</TabsTrigger></button>
                        <Link to="/instrument"><TabsTrigger value="analytics">Instrument</TabsTrigger></Link>
                        <Link to="/cinematics"> <TabsTrigger value="cn">Cinematic FX</TabsTrigger></Link>
                        <Link to="/genres"> <TabsTrigger value="genes">Genres</TabsTrigger></Link>
                        <Link to="/label"><TabsTrigger value="label">Labels</TabsTrigger></Link>
                        <Link to="/present"> <TabsTrigger value="present">Presets</TabsTrigger></Link>
                        <Link to="/Midi"> <TabsTrigger value="midi">MIDI</TabsTrigger></Link>
                    </TabsList>
                </Tabs>
            }

        </>
    )
}
