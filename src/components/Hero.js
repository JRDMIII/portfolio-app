'use client'
import React from 'react'
import Image from 'next/image'
import { motion, stagger, useAnimate } from 'framer-motion'

import damiPianoImage from '../assets/DamiPianoImage.JPG'
import AboutMe from './AboutmE'

export default function Hero() {
  const [scope, animate] = useAnimate();

  const titleTextAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 100, y: 0 }
  }
  
  const linkList = ["About Me", "Projects", "Skills"]

  const buttonInitial = { opacity: 0, y: 20 }

  const buttonStaggeredAnimation = async () => {
    await animate("li", { opacity: 1, y: 0 }, { duration: 1, delay: stagger(0.3, { startDelay: 2.5 }), ease: "easeOut" })
  };

  return (
    <header className='flex flex-col h-screen items-center py-10 justify-center overflow-hidden'>
      <div className='justify-center'>
          <motion.span
          variants={titleTextAnim}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className='inline-block font-normal text-9xl'>
            <h1 className='hover:tracking-[1.5px] transition-all duration-200'>Hey,&nbsp;</h1>
          </motion.span>
          
          <motion.span
          variants={titleTextAnim}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 1 }}
          className='inline-block font-normal text-9xl'>
            <h1 className='hover:tracking-[1.5px] transition-all duration-200'>I'm&nbsp;</h1>
          </motion.span>

          <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className='inline-block font-semibold text-9xl'>
            <h1 className='inline-block hover:tracking-[1.5px] transition-all duration-200'>Dami&nbsp;</h1>
            <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ delay: 1.5, duration: 1, }}
            className='inline-block hover:px-1 transition-all duration-200 ease-out'>
              <Image className='inline rounded-full' width={200} src={damiPianoImage} />
            </motion.span> 
          </motion.span>
      </div>
      <motion.div
      ref={scope}
      animate={buttonStaggeredAnimation}
      className='flex flex-row gap-x-40'>
        <ul className='flex flex-row gap-x-[100px] font-semibold'>
          {
            linkList.map((linkTitle) => (
              <motion.li 
              initial={buttonInitial} 
                className='uppercase'>
                  <a className="tracking-[0.5px] transition-all duration-100 hover:border-l-[3px] pl-1 hover:border-separate ease-in-out">
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