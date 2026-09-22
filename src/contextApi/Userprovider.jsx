import { Createuser } from './usercontext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateLoaders } from '@/contextApi/context'
import { useContext } from 'react'
import { Signup } from '@/api/auth/signup'
export default function Userprovider({ children }) {
    const {  loading } = useContext(CreateLoaders);
    const [formData, setFormdata] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const signupData = async () => {
        try {
           
            const role = "user"
            const signData = await Signup(formData.fullname, formData.username, formData.email, formData.password, role)

            console.log(signData, "sign")

            if (signData) {
                navigate("/login")
            }

        } catch (error) {
            console.log(error)
        } finally {
       
        }
    }



    return (
        <div>
            <Createuser.Provider value={{ formData, setFormdata, signupData, loading }}>
                {children}
            </Createuser.Provider>
        </div>
    )
}
