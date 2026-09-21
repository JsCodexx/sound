import React from 'react'

function Content({ variant }) {
    return (
        <div>
            {variant === 'trio' ?
                <div className='flex justify-evenly '>
                    <div className='w-63 mt-0' >
                        <img src="/src/assets/trio1.png" alt="" className='pb-5 ml-7' />
                        <h3 className='pb-5 text-white'>100% royalty-free</h3>
                        <p className='pb-4 text-white'>Use  samples to create anything. They’re cleared for commercial use in new works.</p>
                    </div>
                    <div className='w-63 mt-0' >
                        <img src="/src/assets/trio2.png" alt="" className='pb-4 ml-7' />
                        <h3 className='pb-4 text-white'>100% royalty-free</h3>
                        <p className='pb-4 text-white'>Use  samples to create anything. They’re cleared for commercial use in new works.</p>
                    </div>
                    <div className='w-63 mt-0' >
                        <img src="/src/assets/trio3.png" alt="" className='mt-[-27px]' />
                        <h3 className='pb-4 text-white'>100% royalty-free</h3>
                        <p className='pb-4 text-white'>Use  samples to create anything. They’re cleared for commercial use in new works.</p>
                    </div>
                </div> :
                <div className='flex justify-evenly '>
                    <div className='w-63 mt-15' >
                        <img src="/src/assets/cup.png" alt="" className='pb-4' />
                        <h3 className='pb-4 text-black'>100% royalty-free</h3>
                        <p className='pb-4 text-black'>Use  samples to create anything. They’re cleared for commercial use in new works.</p>
                    </div>
                    <div className='w-63 mt-15' >
                        <img src="/src/assets/cross.png" alt="" className='pb-4' />
                        <h3 className='pb-4 text-black'>100% royalty-free</h3>
                        <p className='pb-4 text-black'>Use  samples to create anything. They’re cleared for commercial use in new works.</p>
                    </div>
                    <div className='w-63 mt-8.5' >
                        <img src="/src/assets/download.png" alt="" className='pb-4' />
                        <h3 className='pb-4 text-black'>100% royalty-free</h3>
                        <p className='pb-4 text-black'>Use  samples to create anything. They’re cleared for commercial use in new works.</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default Content
