import React from 'react'
import Nav from '@/components/Nav'
import { InputGroupInlineStart } from '@/components/Text'
import { FieldDemo } from '@/components/RequestForm'
import { Footer2 } from '@/components/footer2'
function Submitrequest() {
    return (
        <>
            <Nav />
            <div className=''>

                <div className="flex  flex-col justify-center items-center container mx-auto max-w-7xl  ">
                    <InputGroupInlineStart />
                    <hr className='mt-5' />
                    <p className='w-100 mt-5 text-sm'>Help center</p>
                    <p className=' w-100 mt-5 text-xl font-bold'>Submit a request</p>
                    <FieldDemo />
                </div>

            </div>
            <Footer2 />
        </>
    )
}

export default Submitrequest
