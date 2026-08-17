
import { useNavigate } from 'react-router-dom'
import { InputButtonGroup } from './InputLabel'
import { Link } from 'react-router-dom'
import { DropdownMenuShortcuts } from './Dropdown'

function NavBar({ variant }) {

    const navigate = useNavigate()
    function handleLogin() {
        navigate("/home")
    }
    function landing() {
        navigate("/login")
    }
    return (
        <>
            {variant === "landing" ? <div>
                <div className='bg-black w-full h-17 flex justify-evenly'>
                    <div className='flex'>
                        <button onClick={handleLogin}><h1 className='text-white pt-0 pl-15 text-2xl font-bold cursor-pointer'>LOGO</h1></button>

                        <Link to="/sound"><p className='text-white text-sm pl-5 pt-6 cursor-pointer'>Sounds</p></Link>
                        <Link to="/price"><p className='text-white text-sm pl-5 pt-6 cursor-pointer'>Pricing</p></Link>
                        <Link to="/faqs"><p className='text-white text-sm pl-5 pt-6 cursor-pointer'>FAQs</p></Link>
                    </div>
                    <div><InputButtonGroup /></div>

                    <div className='flex '>
                        <button onClick={landing}><p className='text-white pt-0 pr-15 cursor-pointer font-semibold'>Login</p></button>
                        <button className=' cursor-pointer pt-2 bg-white px-0 py-6.5 text-sm h-7 w-19 mt-4 rounded-2xl text-red-700 ml-1 '>Try Free</button>


                    </div>

                </div>

            </div> : <div>
                <div className='bg-black w-full h-17 flex justify-evenly'>
                    <div className='flex'>
                        <button onClick={handleLogin}><h1 className='text-white pt-0 pl-15 text-2xl font-bold cursor-pointer'>LOGO</h1></button>

                        <Link to="/sound"><p className='text-white text-sm pl-5 pt-6 cursor-pointer'>Sounds</p></Link>
                        <Link to="/price"><p className='text-white text-sm pl-5 pt-6 cursor-pointer'>Pricing</p></Link>
                        <Link to="/faqs"><p className='text-white text-sm pl-5 pt-6 cursor-pointer'>FAQs</p></Link>
                    </div>
                    <div><InputButtonGroup /></div>

                    <div className='flex '>
                        <Link to="/help"><p className='text-white pt-6 pr-15 cursor-pointer'>Help</p></Link>
                        <button className=' cursor-pointer pt-2 bg-white px-0 py-6.5 text-sm h-7 w-19 mt-4 rounded-2xl text-red-700 ml-1 '>Try Free</button>
                        <img src="/src/assets/voice.png" alt="" className='w-10 ml-6 h-10 mt-4' />
                        {/* <img src="/src/assets/Ellipse 10.png" alt="" className='ml-6 h-10 mt-3' /> */}
                        <div className='mt-3 ml-5'>  <DropdownMenuShortcuts /></div>

                    </div>

                </div>

            </div>}


        </>
    )
}

export default NavBar


