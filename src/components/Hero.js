'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimate, useInView } from 'framer-motion'
import { useScroll } from 'framer-motion'

import damiPianoImage from '../assets/DamiPianoImage.JPG'
import Reveal from './Reveal'

export default function Hero() {

  const [scope, animate] = useAnimate();

  const buttonStaggeredAnimation = async () => {
    animate("button", {})
  };

  return (
    <header className='flex flex-col h-screen items-center py-10 justify-center overflow-hidden'>
      <div className='justify-center'>
          <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 1 }}
          className='inline-block font-normal text-9xl'>
            <h1 className='hover:tracking-[1.5px] transition-all duration-200'>Hey,&nbsp;</h1>
          </motion.span>
          
          <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 100, y: 0 }}
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
            className='inline-block'>
              <Image className='inline rounded-full hover:w-[210px] hover:border-[5px] duration-100 ease-linear' width={200} src={damiPianoImage} />
            </motion.span> 
          </motion.span>
      </div>
      <motion.div
      ref={scope}
      className='flex flex-row gap-x-40'>
        <Reveal>
          <button>
            <h1 className='uppercase'>About</h1>
          </button>
        </Reveal>
        <Reveal>
          <button>
            <h1 className='uppercase'>Projects</h1>
          </button>
        </Reveal>
        <Reveal> 
          <button>
            <h1 className='uppercase'>Skills</h1>
          </button>
        </Reveal>
      </motion.div>
    </header>
  )
}