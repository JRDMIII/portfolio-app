import React from 'react'
import Image from 'next/image'
import pythonImage from '../components/Logos/Python.png'

export default function Skill() {
  return (
    <div className='group relative flex cursor-pointer'>
        <Image src={pythonImage} className='w-[60px] rounded-full border-2 p-1'/>

        <div className='flex justify-center items-center absolute opacity-0 group-hover:opacity-80 transition-all duration-300 w-[60px] h-[60px] rounded-full group-hover:bg-white z-0'>
            <div className='h-[50%]'>
                <p>100%</p>
            </div>
        </div>
    </div>
  )
}
