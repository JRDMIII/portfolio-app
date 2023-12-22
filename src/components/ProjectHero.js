'use client'
import React from "react"
import Image from "next/image"
import { motion, useAnimate } from "framer-motion"
import { GoArrowRight } from "react-icons/go"

import bgVideo from '../assets/ProgrammingGIF.gif'

export default function ProjectHero() {
    const [scope, animate] = useAnimate()
    const MotionArrow = motion(GoArrowRight)

    const arrowLeave = async () => {
        animate("#arrow", { opacity: 0, x: 50 }, { duration: 0.5, ease: "easeOut" })
    }

    return (
        <div ref={scope} className="flex flex-col pl-[50px] relative overflow-hidden justify-center py-[10%] transition-all">
            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 1 }}
            className="font-semibold tracking-widest uppercase text-6xl">
                Projects
            </motion.h1>
            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="font-light tracking-widest uppercase">
                view all my projects
            </motion.h1>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='group/item text-md py-2'>
                <motion.a onClick={() => arrowLeave()} className='font-light' href="/">
                    Home&nbsp;
                    <motion.h1 className='group/item inline text-orange-500 group-hover/item:ml-2 group-hover/item:text-orange-300 transition-all duration-300 ease-out'>
                        <MotionArrow id='arrow' className='text-[16px] inline' />
                    </motion.h1>
                </motion.a>
            </motion.h1>
            <Image className="absolute opacity-10 -z-10" src={bgVideo} fill={true}/>
        </div>
    )
}

