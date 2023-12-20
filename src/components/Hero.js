'use client'
import React from 'react'
import Image from 'next/image'
import { motion, stagger, useAnimate } from 'framer-motion'

import damiPianoImage from '../assets/DamiPianoImage.JPG'

export default function Hero() {
  const [scope, animate] = useAnimate();

  const titleTextAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 100, y: 0 }
  }
  
  const linkList = ["About", "Projects"]

  const buttonInitial = { opacity: 0, y: 20 }

  const buttonStaggeredAnimation = async () => {
    await animate("li", { opacity: 1, y: 0 }, { duration: 1, delay: stagger(0.3, { startDelay: 2.5 }), ease: "easeOut" })
  };

  return (
    <header className='flex h-screen flex-col items-center py-10 justify-center overflow-hidden'>
      <div className='justify-center'>
          <motion.span
          variants={titleTextAnim}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className='inline-block font-normal max-sm:text-4xl sm:text-5xl md:text-7xl lg:text-8xl'>
            <h1 className='hover:tracking-[1.5px] transition-all duration-200'>Hey!&nbsp;</h1>
          </motion.span>
          
          <motion.span
          variants={titleTextAnim}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 1 }}
          className='inline-block font-normal max-sm:text-4xl sm:text-5xl md:text-7xl lg:text-8xl'>
            <h1 className='hover:tracking-[1.5px] transition-all duration-200'>I'm&nbsp;</h1>
          </motion.span>

          <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className='inline-block font-semibold max-sm:text-4xl sm:text-5xl md:text-7xl lg:text-8xl'>
            <h1 className='inline-block hover:tracking-[1.5px] transition-all duration-200'>Dami&nbsp;</h1>
            <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ delay: 1.5, duration: 1, }}
            className='inline-block transition-all duration-200 ease-out max-sm:w-[50px] sm:w-[50px] md:w-[100px] lg:w-[150px]'>
              <Image className='inline rounded-full' src={damiPianoImage} />
            </motion.span> 
          </motion.span>
      </div>
      <motion.div
      ref={scope}
      animate={buttonStaggeredAnimation}
      className='flex flex-row'>
        <ul className='flex transition-all duration-200 flex-row gap-x-[40px] font-semibold'>
          {
            linkList.map((linkTitle) => (
              <motion.li 
              key={linkTitle}
              initial={buttonInitial} 
                className='uppercase'>
                  <a href={linkTitle} className="tracking-[0.5px] transition-all duration-100 max-sm:text-sm md:text-sm lg:text-md hover:border-l-[3px] pl-1 hover:border-separate ease-in-out">
                    {linkTitle}
                  </a>
              </motion.li>
            ))
          }
        </ul>
      </motion.div>
    </header>
  )
}