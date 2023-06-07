"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function Skill({ image, num, directionLeft }) {

  return (
    <div className="group relative flex items-center justify-center w-full h-full cursor-pointer lg:scale-75">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        animate={{ opacity: 1, x: 0 }}
        src={image}
        alt="skill"
        className="border border-gray-500 object-contain rounded-full bg-green-100/40 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 filter group-hover:grayscale transition duration-300 ease-in-out animate-pulse"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-green-100 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{num}</p>
        </div>
      </div>
    </div>
  )
}