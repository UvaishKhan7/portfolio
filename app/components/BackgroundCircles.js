import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircles() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                scale: [1, 2, 2, 3, 1],
                borderRadius: ["20%", "20%", "50%", "80%", "20%",]
            }}
            transition={{
                duration: 2.5,
            }}
            className='max-md:scale-75 relative flex justify-center items-center -z-10'>
            <div className='absolute border border-green-200 rounded-full h-[12rem] w-[12rem] mt-52 animate-ping' />
            <div className='absolute border border-green-300 backdrop-blur-[2px] rounded-full h-[15rem] w-[15rem] mt-52 animate-pulse' />
            <div className='absolute border border-lime-600 rounded-full h-[22rem] w-[22rem] mt-52' />
            <div className='absolute border border-[#60f0fa] rounded-full h-[29rem] w-[29rem] mt-52 animate-pulse' />
            <div className='absolute border border-green-600 rounded-full h-[36rem] w-[36rem] mt-52' />
        </motion.div>
    )
}