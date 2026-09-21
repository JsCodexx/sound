import React from 'react'

import { useState } from 'react'
import { CreateLoaders } from './context'
export default function Loaderprovider({ children }) {
    const [loading, setLoading] = useState(false)

    const showloading = () => {
        setLoading(true)
    }
    const hideloading = () => {
        setLoading(false)
    }
    return (
        <div>
            <CreateLoaders.Provider value={{ loading, showloading, hideloading }}>
                {children}
            </CreateLoaders.Provider>
        </div>
    )
}
