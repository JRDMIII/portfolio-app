'use client'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { motion } from 'framer-motion'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../sanity/lib/client'
import { useAnimate, stagger } from 'framer-motion'

const builder = imageUrlBuilder(client)

export default function Project({ title, description, link, projectgif }) {
    const [scope, animate] = useAnimate()
    const MotionArrow = motion(GoArrowRight)
    
    const constAnimation = async () => {
        animate("h1", { opacity: 1 }, { duration: 1, delay: stagger(0.3), ease: "easeOut" })
    }

    const arrowLeave = async () => {
        animate("#arrow", { opacity: 0, x: 50 }, { duration: 0.5, ease: "easeOut" })
    }

    return (
        <div className='bg-black'>
            <div className='flex flex-col sm:h-screen w-screen relative overflow-hidden'>
                <div className=''>
                    <motion.div ref={scope} whileInView={constAnimation} className='flex-1 font-light m-10 sm:m-20 w-[80%] sm:w-[30%]'>
                        <motion.h1 initial={{ opacity: 0 }} className='text-2xl sm:text-4xl min font-semibold relative z-20 pb-2 sm:pb-5 transition-all duration-300'>
                            {title}
                        </motion.h1>
                        <motion.h1 initial={{ opacity: 0 }} className='text-[15px] sm:text-2xl text-left relative z-20 font-light transition-all duration-300'>
                            {description}
                        </motion.h1>
                        <motion.h1 initial={{ opacity: 0 }} className='group/item text-[18px] relative z-20 sm:text-2xl py-4'>
                            <motion.a onClick={() => arrowLeave()} className='font-semibold' href={link}>
                                    View Project&nbsp;
                                    <motion.h1 className='group/item inline text-orange-500 group-hover/item:ml-1 group-hover/item:text-orange-300 transition-all duration-300 ease-out'>
                                        <MotionArrow id='arrow' className='text-[20px] sm:text-[24px] inline' />
                                    </motion.h1>
                            </motion.a>
                        </motion.h1>
                    </motion.div>
                </div>
                <img className='absolute w-screen invisible sm:visible opacity-20 z-10' src={urlFor(projectgif).url()} />
            </div>
        </div>
    )
}

function urlFor(source) {
    return builder.image(source)
}