import { useNavigate, Link } from 'react-router-dom'
import { InputButtonGroup } from './InputLabel'
import { DropdownMenuShortcuts } from './Dropdown'
import { useState } from 'react'
import { SliderVertical } from './Slider'

function NavBar({ variant }) {
    const [volume, setVolume] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    const navigate = useNavigate()

    function handleLogin() {
        navigate('/home')
    }

    function openVolume() {
        setVolume(!volume)
    }

    function landing() {
        navigate('/login')
    }

    function toggleMobileMenu() {
        setMobileMenu(!mobileMenu)
    }

    return (
        <nav className="w-full bg-black text-white relative z-50">


            <div className="hidden md:flex min-h-[68px] w-full items-center justify-between px-4 lg:px-8 xl:px-14">


                <div className="flex items-center gap-4 lg:gap-6">

                    <button onClick={handleLogin}>
                        <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
                            LOGO
                        </h1>
                    </button>

                    <Link
                        to="/sound"
                        className="text-sm hover:text-gray-300 transition"
                    >
                        Sounds
                    </Link>

                    <Link
                        to="/price"
                        className="text-sm hover:text-gray-300 transition"
                    >
                        Pricing
                    </Link>

                    <Link
                        to="/faqs"
                        className="text-sm hover:text-gray-300 transition"
                    >
                        FAQs
                    </Link>
                </div>


                {variant === 'landing' ? (
                    <div className="relative">
                        <input
                            className="w-full h-10 rounded-full bg-white text-black px-5 pr-12 text-sm outline-none"
                            placeholder="Search Sound"
                        />

                        <img
                            src="/src/assets/search.png"
                            alt="Search"
                            className="absolute right-4 top-2.5 w-5 h-5"
                        />
                    </div>
                ) : (

                    <div className="relative hidden lg:block">
                        <input
                            className="w-64 xl:w-80 h-10 rounded-full bg-white text-black mt-1 px-5 pr-12 text-sm outline-none"
                            placeholder="Search Sound"
                        />

                        <img
                            src="/src/assets/search.png"
                            alt="Search"
                            className="absolute right-4 top-3 w-5 h-5 cursor-pointer"
                        />
                    </div>
                )}


                <div className="flex items-center gap-3 lg:gap-5">

                    {variant === 'landing' ? (
                        <>
                            <button onClick={landing}>
                                <p className="cursor-pointer font-semibold text-sm lg:text-base">
                                    Login
                                </p>
                            </button>

                            <button className="bg-red-700 text-white-700 text-xs lg:text-sm font-medium rounded-full px-4 py-2 hover:bg-gray-200 transition">
                                Try Free
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/help"
                                className="text-sm hover:text-gray-300 transition"
                            >
                                Help
                            </Link>

                            <button className="bg-white text-red-700 text-xs lg:text-sm font-medium rounded-full px-4 py-2 hover:bg-gray-200 transition">
                                Try Free
                            </button>


                            <div className="relative">
                                <img
                                    src="/src/assets/voice.png"
                                    alt="Volume"
                                    className="w-9 h-9 cursor-pointer"
                                    onClick={openVolume}
                                />

                                {volume && (
                                    <div className="absolute right-0 top-11">
                                        <SliderVertical />
                                    </div>
                                )}
                            </div>


                            <DropdownMenuShortcuts />
                        </>
                    )}
                </div>
            </div>


            <div className="md:hidden min-h-[64px] flex items-center justify-between px-4">


                <button onClick={handleLogin}>
                    <h1 className="text-xl font-bold cursor-pointer">
                        LOGO
                    </h1>
                </button>


                <div className="flex items-center gap-3">

                    {variant !== 'landing' && (
                        <>

                            <div className="relative">
                                <img
                                    src="/src/assets/voice.png"
                                    alt="Volume"
                                    className="w-9 h-9 cursor-pointer"
                                    onClick={openVolume}
                                />

                                {volume && (
                                    <div className="absolute right-0 top-11">
                                        <SliderVertical />
                                    </div>
                                )}
                            </div>

                            <DropdownMenuShortcuts />
                        </>
                    )}


                    <button
                        onClick={toggleMobileMenu}
                        className="w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                    </button>
                </div>
            </div>


            {mobileMenu && (
                <div className="md:hidden border-t border-gray-800 px-4 py-5 space-y-4">


                    {variant !== 'landing' && (
                        <div className="relative">
                            <input
                                className="w-full h-10 rounded-full bg-white text-black px-5 pr-12 text-sm outline-none"
                                placeholder="Search Sound"
                            />

                            <img
                                src="/src/assets/search.png"
                                alt="Search"
                                className="absolute right-4 top-2.5 w-5 h-5"
                            />
                        </div>
                    )}


                    <div className="flex flex-col gap-4">

                        <Link
                            to="/sound"
                            onClick={() => setMobileMenu(false)}
                            className="text-sm py-1"
                        >
                            Sounds
                        </Link>

                        <Link
                            to="/price"
                            onClick={() => setMobileMenu(false)}
                            className="text-sm py-1"
                        >
                            Pricing
                        </Link>

                        <Link
                            to="/faqs"
                            onClick={() => setMobileMenu(false)}
                            className="text-sm py-1"
                        >
                            FAQs
                        </Link>

                        {variant !== 'landing' && (
                            <Link
                                to="/help"
                                onClick={() => setMobileMenu(false)}
                                className="text-sm py-1"
                            >
                                Help
                            </Link>
                        )}
                    </div>


                    {variant === 'landing' && (
                        <div className="flex items-center gap-3 pt-2">

                            <button
                                onClick={landing}
                                className="text-sm font-semibold"
                            >
                                Login
                            </button>

                            <button className="bg-white text-red-700 text-sm rounded-full px-5 py-2">
                                Try Free
                            </button>
                        </div>
                    )}


                    {variant !== 'landing' && (
                        <button className="bg-white text-red-700 text-sm rounded-full px-5 py-2">
                            Try Free
                        </button>
                    )}
                </div>
            )}
        </nav>
    )
}

export default NavBar
