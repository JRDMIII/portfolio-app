'use client'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { motion } from 'framer-motion'

import { useAnimate, stagger } from 'framer-motion'

export default function Project({ title, description, link }) {
    const [scope, animate] = useAnimate()
    const MotionArrow = motion(GoArrowRight)
    
    const constAnimation = async () => {
        animate("h1", { opacity: 1, x: 0 }, { duration: 1, delay: stagger(0.3), ease: "easeOut" })
    }

    const arrowLeave = async () => {
        animate("#arrow", { opacity: 0, x: 50 }, { duration: 0.5, ease: "easeOut" })
    }

    return (
        <div className='flex flex-col h-screen'>
            <div className=''>
                <motion.div ref={scope} animate={constAnimation} className='flex-1 font-light m-20 w-[30%]'>
                    <motion.h1 initial={{ opacity: 0, x: -10 }} className='text-4xl font-semibold pb-5'>
                        {title}
                    </motion.h1>
                    <motion.h1 initial={{ opacity: 0, x: -10 }} className='text-2xl text-left font-light'>
                        {description}
                    </motion.h1>
                    <motion.h1 initial={{ opacity: 0, x: -10 }} className='group/item text-2xl py-4'>
                        <motion.a onClick={() => arrowLeave()} className='font-semibold' href={link}>
                                View Project&nbsp;
                                <motion.h1 className='group/item inline text-orange-500 group-hover/item:ml-2 group-hover/item:text-orange-300 transition-all duration-300 ease-out'>
                                    <MotionArrow id='arrow' className='text-[24px] inline' />
                                </motion.h1>
                        </motion.a>
                    </motion.h1>
                </motion.div>
            </div>
            {/* <Image src={} /> */}
        </div>
    )
}
