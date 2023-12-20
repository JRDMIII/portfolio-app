'use client'
import React from 'react'
import { motion, useAnimate, stagger } from 'framer-motion'

export default function AboutSection() {

  const [scope, animate] = useAnimate();

  const enterAnimation = {
    hidden: { opacity: 0, x: 25 },
    visible: { opacity: 100, x: 0 }
  }

  const interestListInit = { opacity: 0, x: 20 }

  const staggeredListAnimation = async () => {
    await animate("h1", { opacity: 1, x: 0 }, { duration: 1, delay: stagger(0.3, { startDelay: 0.7 }), ease: "easeOut" })
    await animate("li", { opacity: 1, x: 0 }, { duration: 1, delay: stagger(0.2), ease: "easeOut" })
  };

  return (
    <div id='about-section' className='flex flex-row h-screen justify-center items-center'>
        <div id='left-column' className='flex-1 items-center mx-40'>
          <motion.h1 
          variants={enterAnimation} 
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 1 }}
          id='about-title' className='text-4xl text-left font-bold m-5 line'>
            I'm Dami, an aspiring&nbsp; 
            <b>software engineer</b> studying at the&nbsp;
            <a href='https://warwick.ac.uk' className='text-gray-400 hover:text-gray-200 transition-all duration-700'><b>University of Warwick</b></a>.
          </motion.h1>

          <motion.p 
          variants={enterAnimation}
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 1, delay: 0.35 }}
          className='m-5 text-2xl font-light'>
            Hey, I'm Dami, a Computer Scientist in my first year at the University of Warwick.
            I'm based in London and have a passion for sleek design and clean interfaces.
            I'm in the early stages of learning to utilise the <a href='https://nextjs.org' className='font-semibold text-gray-400 hover:text-gray-200 transition-all duration-700'>Nextjs</a> framework to create portfolio's and personal websites.
            It's a <b>life-long dream</b> of mine to make my <b>passion a profession</b> and I hope to bring that dream to life in the future.
          </motion.p>
        </div>

        <motion.div 
        ref={scope} 
        animate={staggeredListAnimation}
        className='flex-1 mx-40'>
          <motion.h1 initial={interestListInit} className='text-2xl pb-4 font-semibold'>My Interests</motion.h1>
          <ul id='interests' className='pb-10 space-y-4'>
            <motion.li initial={interestListInit} className='text-xl'>&nbsp;&nbsp;&nbsp;&nbsp;Playing Piano</motion.li>
            <motion.li initial={interestListInit} className='text-xl'>&nbsp;&nbsp;&nbsp;&nbsp;Digital Art</motion.li>
            <motion.li initial={interestListInit} className='text-xl'>&nbsp;&nbsp;&nbsp;&nbsp;Video Editing</motion.li>
          </ul>

          <motion.h1 initial={interestListInit} className='text-2xl pb-4 font-semibold'>Skills</motion.h1>
          <ul id='skills' className='pb-5 space-y-4'>
            {/* Gonna create a skills thingy */}
          </ul>
        </motion.div>
      </div>
  )
}