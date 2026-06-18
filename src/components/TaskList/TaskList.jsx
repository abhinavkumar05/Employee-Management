import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 '>
        <div className='flex-shrink-0 h-full w-[300px] bg-orange-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam dolore porro nulla a illo?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-emerald-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam dolore porro nulla a illo?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam dolore porro nulla a illo?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-beige-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam dolore porro nulla a illo?</p>
        </div>
    </div>
  )
}

export default TaskList