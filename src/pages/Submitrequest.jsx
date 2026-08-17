import React from 'react'
import Nav from '@/components/Nav'
import { InputGroupInlineStart } from '@/components/Text'
import { FieldDemo } from '@/components/RequestForm'
import { Footer2 } from '@/components/footer2'
function Submitrequest() {
    return (
        <div>
            <Nav />
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <InputGroupInlineStart />
                <hr className='mt-5' />
                <p className='ml-90 mt-5 text-sm'>Help center</p>
                <p className='ml-90 mt-5 text-xl font-bold'>Submit a request</p>
                <FieldDemo />
            </div>
            <Footer2 />
        </div>
    )
}

export default Submitrequest
