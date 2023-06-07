"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {

    return (
        <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col gap-5 mt-8 text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className="uppercase tracking-[1rem] ml-2 text-gray-400 text-2xl">About Me</h3>
            <div className='flex flex-row gap-10'>

                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                        scale: 0
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    src='/3.JPG' alt='myPic'
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64,   md:h-80 xl:w-[300px] xl:h-[400px]"
                />
                <motion.div
                initial={{
                    x: 200,
                    opacity: 0,
                    scale: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                className="space-y-5 py-5 px-0 md:px-10 backdrop-blur-[3px] rounded-lg">
                    <h4 className="text-3xl font-semibold">Here&apos;s a {" "} <span className="underline decoration-green-400/70 underline-offset-4">little</span>{" "} background </h4>
                    <p className='text-base text-justify'>
                        I am Uvaish, a mechanical engineer who made a career switch to become a frontend developer, driven by my aspirations for personal growth and a brighter future. I have a genuine passion for learning and staying up-to-date with the latest advancements in technology. My main focus lies in frontend development and MERN stack projects.
                        <br />
                        I possess a range of skills including HTML, CSS, and JavaScript, which I have cultivated to a high level of proficiency. I enjoy utilizing these skills to create captivating user interfaces and engaging web experiences. In particular, I have expertise in ReactJS, allowing me to build dynamic and interactive UIs.
                        <br />
                        When it comes to design, I am adept at leveraging CSS frameworks such as Bootstrap and Tailwind CSS. These tools enable me to craft visually appealing designs and responsive layouts, ensuring an optimal user experience across devices.
                        <br />
                        With my versatile skill set and eagerness to learn, I am well-equipped to take on frontend development challenges and contribute to cutting-edge projects. I am excited to continue growing as a frontend developer and to make a positive impact in the ever-evolving world of web technologies.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}