'use client'
import React from 'react'
import Image from 'next/image'
import { motion, stagger, useAnimate } from 'framer-motion'

import damiPianoImage from '../assets/DamiPianoImage.JPG'

export default function AboutMe() {

  const titleTextAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 100, y: 0 }
  }

  return (
    <header id="about-me" className='flex flex-col h-screen items-center py-10 justify-center overflow-hidden'>
      <div className='justify-center'>
          <motion.span
          variants={titleTextAnim}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className='inline-block font-normal text-9xl'>
            <h1 className='hover:tracking-[1.5px] transition-all duration-200'>About&nbsp;</h1>
          </motion.span>
          
          <motion.span
          variants={titleTextAnim}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 1 }}
          className='inline-block font-normal text-9xl'>
            <h1 className='hover:tracking-[1.5px] transition-all duration-200 font-bold'>Me</h1>
          </motion.span>
      </div>
      <motion.div
      className='flex flex-row gap-x-40'>
      </motion.div>
    </header>
  )
}