import React from 'react'
import Nav from '@/components/Nav'
import { InputGroupInlineStart } from '@/components/Text'
import { FieldDemo } from '@/components/RequestForm'
import { Footer2 } from '@/components/footer2'
function Submitrequest() {
    return (
        <div>
            <Nav />
            <InputGroupInlineStart />
            <hr className='mt-5' />
            <p className='ml-90 mt-5 text-sm'>Help center</p>
            <p className='ml-90 mt-5 text-xl font-bold'>Submit a request</p>
            <FieldDemo />
            <Footer2/>
        </div>
    )
}

export default Submitrequest
