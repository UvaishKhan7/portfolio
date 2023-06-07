"use client"

import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

export default function Contact() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    subject: user.subject,
                    message: user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                await Toast.fire({
                    icon: 'success',
                    title: 'Message Sent.'
                })
                setUser({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                })
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                await Toast.fire({
                    icon: 'error',
                    title: "Oops!, there's some error"
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <motion.div
            initial={{
                x: 400,
                y: 400,
                opacity: 0,
                scale: 0
            }}
            animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{ duration: 1 }}
            className="flex flex-col text-center max-w-7xl px-10 justify-evenly mx-auto items-center py-6">
            <h3 className="uppercase tracking-[1rem] text-gray-400 text-2xl">
                Contact Me
            </h3>
            <div className="flex flex-col max-md:scale-75 max-md:mt-0 mt-4 space-y-5">
                <h4 className="text-2xl text-center">
                    I have got just what you need,&nbsp;
                    <span className="decoration-green-400/50 underline">Let&apos;s talk.</span>
                </h4>
                <div className="space-y-5 flex flex-col justify-center items-center">
                    <div className="flex items-center space-x-5">
                        <PhoneIcon className='text-green-400 h-7 w-7 animate-pulse  -z-10' />
                        <a href='tel:+918737916531' className='text-2xl'>+91-8737916531</a>
                    </div>
                    <a href='mailto:uvaish@live.in' className="flex items-center space-x-5">
                        <EnvelopeIcon className='text-green-400 h-7 w-7 animate-pulse  -z-10' />
                        <p className='text-2xl'>uvaish@live.in</p>
                    </a>
                    <div className="flex items-center space-x-5">
                        <MapPinIcon className='text-green-400 h-7 w-7 animate-pulse -z-10' />
                        <p className='text-2xl'>Delhi, India</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-3 max-md:space-y-5 w-fit mx-auto"
                >
                    <div className="flex space-x-2">
                        <input
                            placeholder='Name'
                            value={user.name}
                            onChange={handleChange}
                            required
                            name="name"
                            type="text"
                            className="contactInput"
                        />
                        <input
                            placeholder='Email' className="contactInput"
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <input
                        placeholder='Subject'
                        className="contactInput"
                        type="text"
                        name="subject"
                        value={user.subject}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                    <textarea
                        placeholder='Message'
                        name="message"
                        className="contactInput"
                        value={user.message}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                    <button type="submit" className="bg-green-400 py-4 px-10 rounded-md text-black font-bold text-lg uppercase">Submit</button>
                </form>

            </div>

        </motion.div>
    )
}