import React from 'react';
import './projects.css';
import IMG1 from '../../assets/portfolio2.jpg';
import IMG2 from '../../assets/portfolio6.jpg';
import IMG3 from '../../assets/portfolio5.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'IMDb Clone',
    github: 'https://github.com/UvaishKhan7/IMDb_Clone',
    demo: 'https://imdb-clone-mu.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My Portfolio',
    github: 'https://github.com/UvaishKhan7/portfolio',
    demo: 'https://uvaish.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Shopaholic',
    github: 'https://github.com/UvaishKhan7/shopaholic',
    demo: 'http://shopaholic-psi.vercel.app'
  }
];

export default function Projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="projects_item">
                <div className="projects_item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="projects_item-cta">
                  <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
                  <a href={demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};
