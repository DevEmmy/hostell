import React from 'react'

const FilterCard = () => {
  return (
    <div>
        <div className='p-5 shadow-lg m-3'>
            <h3 className='capitalize font-semibold text-lg'>filter by</h3>
            <div>
              <p className='font-medium text-lg italic capitalize'>price</p>  
              <div>
                <div className='flex items-center gap-2'>
                <input className='m-1' type="checkbox" name="lower price" id="lower price" />
                <label htmlFor="lower price">less than ₦ 100,000</label>
                </div>
                <div className='flex items-center gap-2'>
                <input className='m-1' type="checkbox" name="lower price" id="lower price" />
                <label htmlFor="lower price">₦ 150,000 - ₦ 200,000</label>
                </div>
                <div className='flex items-center gap-2'>
                <input className='m-1' type="checkbox" name="lower price" id="lower price" />
                <label htmlFor="lower price">₦ 200,000 - ₦ 250,000</label>
                </div>
                <div className='flex items-center gap-2'>
                <input className='m-1' type="checkbox" name="lower price" id="lower price" />
                <label htmlFor="lower price">₦ 250,000 - ₦ 300,000</label>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FilterCard