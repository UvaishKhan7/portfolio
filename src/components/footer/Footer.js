import React from 'react';
import './footer.css';
import { GrInstagram, GrGithub } from 'react-icons/gr';
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo' target="_blank" rel="noopener noreferrer">UVAISH KHAN</a>

      <ul className='permalinks'>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Home</a></li>
        <li><a href="about" target="_blank" rel="noopener noreferrer">About</a></li>
        <li><a href="#experience" target="_blank" rel="noopener noreferrer">Experience</a></li>
        <li><a href="#portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
        <li><a href="#contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="http://www.facebook.com/AshuEltero" target="_blank" rel='noopener noreferrer'><AiOutlineFacebook className='footer_social-icons'/></a>
        <a href="http://www.instagram.com/uvaish.khan" target="_blank" rel='noopener noreferrer'><GrInstagram className='footer_social-icons'/></a>
        <a href="https://in.linkedin.com/in/uvaishkhan7" target="_blank" rel='noopener noreferrer'><AiOutlineLinkedin className='footer_social-icons'/></a>
        <a href="https://www.github.com/UvaishKhan7" target="_blank" rel='noopener noreferrer'><GrGithub className='footer_social-icons'/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2022. Created by Uvaish Khan. All rights reserved.</small>
      </div>

    </footer>
  )
}
