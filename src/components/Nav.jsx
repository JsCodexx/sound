import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Nav() {

    const navigate = useNavigate()
    function handleLogin() {
        navigate("/home")
    }
    return (
        <>

            <div>
                <div className='relative'>
                    <img src="/src/assets/Rectangle 9638.png" alt="" />
                    <h1 onClick={handleLogin} className='absolute top-5 cursor-pointer left-20 text-white text-2xl font-bold'>LOGO</h1>
                </div>

            </div>

        </>
    )
}

export default Nav


