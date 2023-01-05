import React from 'react';
import './about.css';
import ME from '../../assets/photo2.jpeg';
import { VscFolderLibrary } from 'react-icons/vsc';
import { BsCodeSlash } from 'react-icons/bs';
import { MdOutlineWorkOutline } from 'react-icons/md';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about_img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdOutlineWorkOutline className='about_icon' />
              <h5>Experience</h5>
              <p>Hands on working experience of frontend Technologies like HTML, CSS, JavaScript, ReactJS, Bootstrap, etc.</p>
            </article>
            <article className="about_card">
              <BsCodeSlash className='about_icon' />
              <h5>Technologies</h5>
              <p>HTML, CSS, JavaScript, ReactJS, Bootstrap, Tailwind CSS, NodeJS, ExpressJS, React-Native</p>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <p>E-commerce, IMDb Clone, Slack Clone, React Portfolio, Age Calculator, Pair Game, Fit-Clan</p>
            </article>
          </div>
          <p>I'm a mechanical engineer turned into frontend developer for the betterment of my future & growth. Keen to learn about new things & keep myself updated with the new technologies. I like to work on UI/UX projects by using my skills like HTML, CSS, JavaScript, ReactJS, Bootstrap, Tailwind CSS, NodeJS, GitHub etc. Currently learnig NextJS to upgrade my skills to the next level.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
