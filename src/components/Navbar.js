import React from 'react'
import { easeOut, motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className='w-full text-center py-2'>
        <motion.h1 
        initial={{
            y: 10,
            opacity: 0
        }}
        animate={{
            y: 0,
            opacity: 1
        }}
        transition={{
            duration: 1,
            ease: easeOut
        }}
        className='font-semibold text-normal'>
            <a href="/">
                Dami Olatunji
            </a>
        </motion.h1>
    </div>
  )
}
