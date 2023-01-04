import React from 'react';
import './footer.css';
import { GrInstagram, GrGithub } from 'react-icons/gr';
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'> &lt;UVAISH KHAN /&gt;</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="http://www.facebook.com/AshuEltero" target="_blank" rel='noopener noreferrer'><AiOutlineFacebook className='footer_social-icons'/></a>
        <a href="http://www.instagram.com/uvaish.khan" target="_blank" rel='noopener noreferrer'><GrInstagram className='footer_social-icons'/></a>
        <a href="https://in.linkedin.com/in/uvaishkhan7" target="_blank" rel='noopener noreferrer'><AiOutlineLinkedin className='footer_social-icons'/></a>
        <a href="https://www.github.com/UvaishKhan7" target="_blank" rel='noopener noreferrer'><GrGithub className='footer_social-icons'/></a>
      </div>

      <div className="footer_copyright">
        <p>&copy; 2022. Created by Uvaish Khan. All rights reserved.</p>
      </div>

    </footer>
  )
}
