import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h3>Hello! I'm</h3>
        <h1> &lt; Uvaish Khan /&gt; </h1>
        <h3 className="text-light">FrontEnd Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">  
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}
