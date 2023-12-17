import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, easeOut } from 'framer-motion'

// This will eb sued to create the box reveal effect
export default function Reveal({ children }) {
    const ref  = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className='relative w-fit overflow-hidden'>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className='overflow-hidden'>
                {children}
            </motion.div>
            
            <motion.div
            variants={{
                hidden: { left: 0 },
                visible: { left: 1 }
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 1, ease: easeOut }}
            className='absolute top-4 bottom-4 left-0 right-0 bg-white' />
        </div>
    )
}
