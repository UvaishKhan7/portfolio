'use client';

import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
        <main className="w-full h-96 flex flex-col justify-center items-center scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-green-400/80">
            <h1 className="text-9xl font-extrabold text-white tracking-widest -z-20">404</h1>
            <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute -z-10">
                Page Not Found
            </div>
            <button className='p-5 mt-5 rounded-lg border border-gray-200 px-5 py-4 transition-colors hover:border-black hover:bg-white hover:dark:border-gray-700 hover:dark:bg-white hover:dark:text-black backdrop-blur-sm'>
                <Link href="/">
                    Go to Home Page
                </Link>
            </button>
        </main>
    )
}