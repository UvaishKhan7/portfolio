"use client"

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div
            className="max-w-[1240px] max-md:px-2 h-16 mx-auto px-4 flex justify-between items-center backdrop-blur-sm rounded-lg z-[9999]">
            <Link href="/" className="invert-[.25]">
                <Image src={Logo} alt="my logo image" width={200} height={100} />
            </Link>
            <ul className="hidden md:flex">
                <Link href="/about">
                    <li className="px-4 uppercase text-green-400 font-bold hover:underline hover:underline-offset-8 hover:text-[#41bb46] transition-all ease-in-out delay-150">About</li>
                </Link>
                <Link href="/skills">
                    <li className="px-4 uppercase text-green-400 font-bold hover:underline hover:underline-offset-8 hover:text-[#41bb46] transition-all ease-in-out delay-150">Skills</li>
                </Link>
                <Link href="/projects">
                    <li className="px-4 uppercase text-green-400 font-bold hover:underline hover:underline-offset-8 hover:text-[#41bb46] transition-all ease-in-out delay-150">Projects</li>
                </Link>
                <Link href="/contact">
                    <li className="px-4 uppercase text-green-400 font-bold hover:underline hover:underline-offset-8 hover:text-[#41bb46] transition-all ease-in-out delay-150">Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {
                    !nav ? <XCircleIcon className='text-green-400 h-8 w-8 animate-pulse cursor-pointer' /> :
                        <Bars3Icon className='text-green-400 h-8 w-8 animate-pulse cursor-pointer' />
                }
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-screen border-r border-r-green-400/70 bg-[#011209] flex flex-col items-center pt-5 ease-in-out duration-500 z-[99999] md:hidden" : "fixed left-[-100%] top-0 w-[60%] h-screen border-r border-r-green-400/70 bg-[#011209] flex flex-col items-center pt-6 ease-in-out duration-500 z-[99999]"}>
                <Link href="/" className="invert-[.25] onClick={handleNav} ">
                    <Image src={Logo} alt="my logo image" width={200} height={100} />
                </Link>
                <ul className="w-full flex flex-col p-4 uppercase">
                    <li className="p-4 border-b border-green-600/70 text-green-400 font-bold hover:underline hover:underline-offset-8 hover:text-[#41bb46] transition-all ease-in-out delay-150" onClick={handleNav} >
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li className="p-4 border-b border-green-600/70 text-green-400 font-bold hover:underline hover:underline-offset-8 hover:text-[#41bb46] transition-all ease-in-out delay-150" onClick={handleNav} >
                        <Link href="/skills">
                            Skills
                        </Link>
                    </li>
                    <li className="p-4 border-b border-green-600/70 text-green-400 font-bold hover:underline hover:underline-offset-8 hover:text-[#41bb46] transition-all ease-in-out delay-150" onClick={handleNav} >
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="p-4 border-b border-green-600/70 text-green-400 font-bold hover:underline hover:underline-offset-8 hover:text-[#41bb46] transition-all ease-in-out delay-150" onClick={handleNav} >
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;