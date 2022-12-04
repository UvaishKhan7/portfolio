import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineCode } from 'react-icons/ai';
import { TbAward } from 'react-icons/tb';
import { BsChatDots } from 'react-icons/bs';


export default function Navbar() {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbAward /></a>
      <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineCode /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsChatDots /></a>
    </nav>
  )
};