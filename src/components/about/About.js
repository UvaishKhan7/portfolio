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
              <small>5 Completed</small>
            </article>
            <article className="about_card">
              <BsCodeSlash className='about_icon' />
              <h5>Technologies</h5>
              <small>HTML, CSS, JS, ReactJs, Bootstrap, React-Native</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolore autem nemo nesciunt quod veritatis suscipit veniam culpa voluptas, esse quia, provident odit unde quidem impedit repudiandae officiis soluta neque. Magni obcaecati illum laborum similique eveniet.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
