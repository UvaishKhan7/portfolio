"use client"

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./components/BackgroundCircles";
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Home() {

  const [text, count] = useTypewriter({
    words: [
      "Hi! The Name's Uvaish Khan.",
      "GuyWhoLovesCoffee.jsx",
      "<AndAlsoLovesToCode />",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <motion.div
      initial={{
        y: 400,
        opacity: 0,
        scale: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{ duration: 1 }}
      className="md:h-[80%] h-[100%] md:mt-16 flex flex-col space-y-8 items-center justify-center text-center -z-10"
    >
      <BackgroundCircles />
      <Image
        className='relative rounded-full h-36 w-36 mx-auto object-cover -z-10'
        src="/1.jpeg" alt="that's me"
        width={1600} height={1200}
        priority={true}
      />
      <div className='-z-10'>
        <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[0.5rem]'>MERN Stack Developer</h2>
        <h1 className='max-md:text-2xl text-3xl lg:text-4xl font-semibold px-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
      <div className='pt-5 flex gap-5 flex-wrap justify-evenly'>
        <Link href="/about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="/skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="/projects">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="/contact">
          <button className="heroButton">Contact</button>
        </Link>
      </div>
    </motion.div>
  )
}
