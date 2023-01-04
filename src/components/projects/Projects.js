import React from 'react';
import './projects.css';
import IMG1 from '../../assets/FitClan.png';
import IMG2 from '../../assets/Slack.png';
import IMG3 from '../../assets/IMDb.png';
import IMG4 from '../../assets/Portfolio.png';
import IMG5 from '../../assets/Shopaholic.png';
import IMG6 from '../../assets/PairGame.png';
import IMG7 from '../../assets/AgeCalculator.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Fit-Clan',
    desc: '(ReactJS, Firebase, MaterialUI, React-Bootstrap etc.)',
    github: 'https://github.com/UvaishKhan7/fitClan',
    demo: 'https://fit-clan-lovat.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Slack Clone',
    desc: '(ReactJS, Firebase, React-Bootstrap)',
    github: 'https://github.com/UvaishKhan7/slack-clone',
    demo: 'https://slack-clone-uvaishkhan7.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'IMDb Clone',
    desc: '(ReactJS, TMDb API, MaterialUI, React-Bootstrap etc.)',
    github: 'https://github.com/UvaishKhan7/IMDb_Clone',
    demo: 'https://imdb-clone-mu.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'My Portfolio',
    desc: '(ReactJS, EmailJS, React-Icons)',
    github: 'https://github.com/UvaishKhan7/portfolio',
    demo: 'https://uvaish.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Shopaholic',
    desc: '(ReactJS, React-Bootstrap)',
    github: 'https://github.com/UvaishKhan7/shopaholic',
    demo: 'https://shopaholic-psi.vercel.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Pair Game',
    desc: '(HTML, Javascript, CSS)',
    github: 'https://github.com/UvaishKhan7/Pairs-Game',
    demo: 'https://pairs-game-gamma.vercel.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Age Calculator',
    desc: 'HTML, Javascript, CSS',
    github: 'https://github.com/UvaishKhan7/Age_Calculator',
    demo: 'https://age-calculator-iota.vercel.app/'
  }
];

export default function Projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects_container">
        {
          data.map(({ id, desc, image, title, github, demo }) => {
            return (
              <article key={id} className="projects_item">
                <div className="projects_item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="projects_item-cta">
                  <p>{desc}</p>
                  <div className="buttons">
                    <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
                    <a href={demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};
