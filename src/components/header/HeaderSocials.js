import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import './header.css'

export default function HeaderSocials() {
    return (
        <div className='header_socials'>
            <a href="https://in.linkedin.com/in/uvaishkhan7" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/UvaishKhan7" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.facebook.com/AshuEltero" target="_blank" rel="noreferrer"><BsFacebook /></a>
        </div>
    )
}
