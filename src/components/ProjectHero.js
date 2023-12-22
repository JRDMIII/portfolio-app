'use client'
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import bgVideo from '../assets/ProgrammingGIF.gif'

export default function ProjectHero() {
    return (
        <div className="flex items-center relative overflow-hidden justify-center h-[400px]">
            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 1 }}
            className="font-semibold tracking-widest uppercase text-6xl hover:tracking-[10px] transition-all duration-500">
                Projects
            </motion.h1>
            <Image className="absolute opacity-40 -z-10" src={bgVideo} width={2000} />
        </div>
    )
}

