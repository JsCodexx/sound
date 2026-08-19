import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export function TabsLine() {
    const navigate = useNavigate()
    function sound() {
        navigate("/sound")
    }
    return (
        <Tabs defaultValue="overview">
            <TabsList variant="line">
                <button onClick={sound}><TabsTrigger value="overview" >Overview</TabsTrigger></button>
                <Link to="/instrument"><TabsTrigger value="analytics">Instrument</TabsTrigger></Link>
                <Link to="/cinematics"> <TabsTrigger value="cn">Cinematic FX</TabsTrigger></Link>
                <Link to="/genres"> <TabsTrigger value="genes">Genres</TabsTrigger></Link>
                <Link to="/label"><TabsTrigger value="label">Labels</TabsTrigger></Link>
                <TabsTrigger value="present">Presets</TabsTrigger>
                <TabsTrigger value="midi">MIDI</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}
