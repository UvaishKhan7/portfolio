"use client"

import React from 'react';
import dynamic from 'next/dynamic';
const Skill = dynamic(() => import('../components/Skill'))

export default function Skills() {

    const skillsData = [
        {
            index: 1,
            image: "/htmlicon.png",
            num: "80%",
        },
        {
            index: 2,
            image: "/css3.png",
            num: "80%",
        },
        {
            index: 3,
            image: "/javascript.svg",
            num: "65%",
        },
        {
            index: 4,
            image: "/react.svg",
            num: "80%",
        },
        {
            index: 5,
            image: "/nextjs.svg",
            num: "70%",
        },
        {
            index: 6,
            image: "/git.png",
            num: "70%",
        },
        {
            index: 7,
            image: "/nodejs.svg",
            num: "65%",
        },
        {
            index: 8,
            image: "/expressjs.svg",
            num: "65%",
        },
        {
            index: 9,
            image: "/mongodb.svg",
            num: "70%",
        },
        {
            index: 10,
            image: "/github.svg",
            num: "75%",
        },
        {
            index: 11,
            image: "/tailwindcss.svg",
            num: "75%",
        },
        {
            index: 12,
            image: "/vercel.svg",
            num: "75%",
        },
        {
            index: 13,
            image: "/firebase.svg",
            num: "75%",
        },
        {
            index: 14,
            image: "/vscode.svg",
            num: "75%",
        },
        {
            index: 15,
            image: "/expo.svg",
            num: "75%",
        }
    ]

    return (
        <div
            className='flex flex-col h-[80%] text-center md:text-left max-w-[1300px] xl:px-10 justify-center space-y-5 mx-auto items-center' >
            <h3 className="uppercase tracking-[1rem] text-gray-400 text-2xl mt-4">Skills</h3>
            <h3 className='uppercase tracking-[3px] text-green-200/90 text-sm'>Hover over a skill or currency proficiency</h3>

            <div className="flex flex-wrap justify-evenly max-md:w-[98%] max-w-5xl gap-4 max-md:p-4 p-5 backdrop-blur-sm rounded-2xl border border-green-300/70">
                {
                    skillsData.map((item) => (
                        <div key={item.index}>
                            <Skill directionLeft={(item.index % 2 === 0) ? false : true} image={item?.image} num={item?.num} />
                        </div>
                    ))
                }
            </div>
        </div >
    )
}