'use client'
import React from 'react'
import { motion, useAnimate, stagger } from 'framer-motion'
import Skill from './Skill';
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../sanity/lib/client'

const builder = imageUrlBuilder(client)

export default function AboutSection({ skills, images, interestArray }) {

  const MotionSkill = motion(Skill);
  const [scope, animate] = useAnimate();

  const enterAnimation = {
    hidden: { opacity: 0, x: 25 },
    visible: { opacity: 100, x: 0 },
  }

  const interestListInit = { opacity: 0 }

  const staggeredListAnimation = async () => {
    await animate("h1", { opacity: 1, x: 0 }, { duration: 1, delay: stagger(0.3, { startDelay: 1 }), ease: "easeOut" })
    await animate("li", { opacity: 1, x: 0 }, { duration: 1, delay: stagger(0.2), ease: "easeOut" })
    await animate("#skill", { opacity: 1 }, { duration: 1, delay: stagger(0.2), ease: "easeOut" })
  };

  return (
    <div id='about-section' className='flex sm:flex-row flex-col sm:h-screen h-fit justify-center items-center w-screen'>
        <div id='left-column' className='flex-1 items-center mx-5 mt-5 sm:mx-40 sm:mt-0'>
          <motion.h1 
          variants={enterAnimation} 
          initial="hidden"
          animate="visible" 
          transition={{ duration: 1 }}
          id='about-title' className='sm:text-4xl text-2xl text-left font-bold m-5'>
            I'm Dami, an aspiring&nbsp; 
            <b>software engineer</b> studying at the&nbsp;
            <a href='https://warwick.ac.uk' className='text-gray-400 hover:text-gray-200 transition-all duration-700'><b>University of Warwick</b></a>.
          </motion.h1>

          <motion.p 
          variants={enterAnimation}
          initial="hidden" 
          animate="visible" 
          transition={{ duration: 1, delay: 0.35 }}
          className='text-[16px] sm:text-3xl text-left font-light m-5'>
            Hey, I'm <b>Dami</b>, a Computer Scientist in my first year at the University of Warwick.
            I'm based in London and have a passion for sleek design and clean interfaces.
            I'm in the early stages of learning to utilise the <a href='https://nextjs.org' className='font-semibold text-gray-400 hover:text-gray-200 transition-all duration-700'>Nextjs</a> framework to create portfolio's and personal websites.
            It's a <b>life-long dream</b> of mine to make my <b>passion a profession</b> and I hope to bring that dream to life in the future!
          </motion.p>
        </div>
        
        <motion.div 
        ref={scope} 
        animate={staggeredListAnimation}
        layout
        className='flex-1 w-full px-10 pt-5 sm:pt-0 sm:px-0 mx-40'>
          <motion.h1 initial={interestListInit} className='text-2xl sm:pb-6 pb-4 font-semibold text-left'>My Interests</motion.h1>
          <ul id='interests' className='pb-10 space-y-6'>
            <motion.li initial={interestListInit} className='text-xl flex justify-start'>
              <div className='flex group/item cursor-default w-fit relative rounded-md'>
                <h1 className='sm:text-left text-center text-xl highlightLink cursor-pointer pl-5'>Digital Art 🎨</h1>

                <span className='tooltipText bg-slate-950 grid py-4 group-hover/item:opacity-100 group-hover/item:visible transition-all duration-700 sm:left-[110%] sm:w-[300px] w-[250px] h-[300px] overflow-y-scroll gap-y-4'>
                  <h1 className='text-sm text-center font-light'>Art Examples</h1>
                  {
                    images[0].map((image) => (
                      <img src={urlFor(image).url()} />
                    ))
                  }
                </span>
              </div>
            </motion.li>
            {
              interestArray[0].map((text) => (
                <motion.li initial={interestListInit} className='text-xl pl-5 text-left'>{ text }</motion.li>
              ))
            }
          </ul>

          <motion.h1 initial={interestListInit} className='text-2xl pb-2 text-left sm:pb-6 font-semibold'>Skills</motion.h1>
          <ul id='skills' className='grid grid-cols-[80px_80px_80px] sm:grid-cols-[80px_80px_80px_80px] sm:gap-x-3 gap-x-6 gap-y-2 justify-center sm:pb-6 pb-4'>
            { 
              skills.map(({ symbol, name, description }) => (
                <motion.li key={name} initial={interestListInit} id='skill'><MotionSkill symbol={symbol} name={name} desc={description} /></motion.li>
              ))
            }
          </ul>
        </motion.div>
      </div>
  )
}

function urlFor(source) {
  return builder.image(source)
}