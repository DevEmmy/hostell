import Link from 'next/link'
import React from 'react'
import { HiChevronLeft } from 'react-icons/hi2'

const Return = () => {
  return (
    <div className='flex items-center gap-5 p-3 bg-primary2 top-0 left-0 text-white w-full right-0 px-xPadding'>
        <Link href="/profile">
            <HiChevronLeft size={25}/>
        </Link>
    </div>
  )
}

export default Return;