"use client";
import { useRouter } from 'next/navigation'
import React, {useState} from 'react'
import { RiArrowLeftLine, RiHeart2Line, RiShare2Fill, RiHeart2Fill } from 'react-icons/ri'

const EachHostelReturn = () => {
  const [bookmark, setBookmark] = useState(false)
    const router = useRouter()

    const handleBookmarkHostel = () => {
      setBookmark((prev) => !prev);
    };

  return (
    <div className='fixed px-xPadding py-5 flex justify-between top-0 left-0 bg-white border-b border-b-gray-400 w-full text-[24px] items-center'>
        <div>
            <RiArrowLeftLine onClick={()=> router.back()} />
        </div>

        <div className='flex gap-10'>
        {bookmark ? (
              <RiHeart2Fill onClick={handleBookmarkHostel} />
            ) : (
              <RiHeart2Line onClick={handleBookmarkHostel} />
            )}
            <RiShare2Fill />
        </div>
    </div>
  )
}

export default EachHostelReturn