import React from 'react'

export default function Skill({ symbol, name, desc }) {
  return (
    <div className='group/item cursor-auto border-2 w-[80px] h-[80px] relative flex rounded-md justify-center items-center'>
      <h1 className='p-1 text-center font-semibold text-xl group-hover/item: transition-all duration-200 ease-out'>{symbol}</h1>

      <span className='tooltipText pt-2 pb-3 group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 top-[80%] w-[225px] bg-gray-900 overflow-hidden'>
        <h1 className='text-left font-semibold'>{ name }</h1>
        <p className='text-left ml-2 font-light text-sm'>
          {desc}
        </p>
      </span>
    </div>
  )
}
