'use client'
import React from 'react'
import Image from 'next/image';
import { motion, useAnimate, stagger } from 'framer-motion'
import Skill from './Skill';
import getSkillList from './MySkillsList';

import image1 from '../assets/stryvznz_ufo.gif'
import image2 from '../assets/Togekiss.jpg'
import image3 from '../assets/JulieBackground.jpg'
import image4 from '../assets/stryvznz_cars.gif'
import image5 from '../assets/Duck.jpg'

export default function AboutSection() {

  const MotionSkill = motion(Skill);
  const [scope, animate] = useAnimate();
  const skills = getSkillList();

  const enterAnimation = {
    hidden: { opacity: 0, x: 25 },
    visible: { opacity: 100, x: 0 },
  }

  const interestListInit = { opacity: 0, x: 20 }

  const artImages = [ image1, image2, image3, image4, image5 ]

  const staggeredListAnimation = async () => {
    await animate("h1", { opacity: 1, x: 0 }, { duration: 1, delay: stagger(0.3, { startDelay: 1 }), ease: "easeOut" })
    await animate("li", { opacity: 1, x: 0 }, { duration: 1, delay: stagger(0.2), ease: "easeOut" })
    await animate("#skill", { opacity: 1, x: 0 }, { duration: 1, delay: stagger(0.2), ease: "easeOut" })
  };

  return (
    <div id='about-section' className='flex flex-row h-screen justify-center items-center'>
        <div id='left-column' className='flex-1 items-center mx-40'>
          <motion.h1 
          variants={enterAnimation} 
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 1 }}
          id='about-title' className='text-4xl text-left font-bold m-5'>
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
            Hey, I'm <b>Dami</b>, a Computer Scientist in my first year at the University of Warwick.
            I'm based in London and have a passion for sleek design and clean interfaces.
            I'm in the early stages of learning to utilise the <a href='https://nextjs.org' className='font-semibold text-gray-400 hover:text-gray-200 transition-all duration-700'>Nextjs</a> framework to create portfolio's and personal websites.
            It's a <b>life-long dream</b> of mine to make my <b>passion a profession</b> and I hope to bring that dream to life in the future.
          </motion.p>
        </div>

        <motion.div 
        ref={scope} 
        animate={staggeredListAnimation}
        className='flex-1 mx-40'>
          <motion.h1 initial={interestListInit} className='text-2xl pb-6 font-semibold'>My Interests</motion.h1>
          <ul id='interests' className='pb-10 space-y-6'>
            <motion.li initial={interestListInit} className='text-xl'>
              <div className='group/item cursor-default w-fit relative flex rounded-md'>
                <h1 className='text-left text-xl highlightLink cursor-pointer pl-5'>Digital Art 🎨</h1>

                <span className='tooltipText bg-slate-950 grid py-4 group-hover/item:opacity-100 group-hover/item:visible transition-all duration-700 left-[110%] w-[300px] h-[300px] overflow-y-scroll gap-y-4'>
                  <h1 className='text-sm text-center font-light'>Art Examples</h1>
                  {
                    artImages.map((image) => (
                      <Image src={image} />
                    ))
                  }
                </span>
              </div>
            </motion.li>
            <motion.li initial={interestListInit} className='text-xl pl-5'>Playing Piano 🎹</motion.li>
            <motion.li initial={interestListInit} className='text-xl pl-5'>Video Editing 🎬</motion.li>
            <motion.li initial={interestListInit} className='text-xl pl-5'>Gym 🏋️‍♀️</motion.li>
            <motion.li initial={interestListInit} className='text-xl pl-5'>Gaming 🎮</motion.li>
          </ul>

          <motion.h1 initial={interestListInit} className='text-2xl pb-6 font-semibold'>Skills</motion.h1>
          <ul id='skills' className='grid grid-cols-[80px_80px_80px_80px_80px] gap-x-3 gap-y-3 justify-center items-left'>
            { 
              skills.map(({ symbol, name, desc }) => (
                <motion.li initial={interestListInit} id='skill'><MotionSkill symbol={symbol} name={name} desc={desc} /></motion.li>
              ))
            }
          </ul>
        </motion.div>
      </div>
  )
}