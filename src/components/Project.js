import React from 'react'
import { IconContext } from 'react-icons'
import { GoArrowRight } from 'react-icons/go'

export default function Project() {
  return (
    <div className='flex flex-col h-screen'>
        <div className='flex flex-row items-center'>
            <div className='flex-1 font-light mx-[200px] mt-[50px]'>
                <h1 className='text-2xl text-left'>
                    A home voice assistant and home automation system with accompanying application.
                </h1>
            </div>

            <div className='flex-1 mx-[200px] mt-[50px]'>
                <a href=''>
                    <h1 className='inline text-2xl'>
                        View Project
                    </h1>
                    <GoArrowRight style={{ color: 'orange', fontSize: '20px',  }} />
                </a>
            </div>
        </div>
        <div>
            {/* Project Image */}
            <img src="" />
        </div>
    </div>
  )
}
