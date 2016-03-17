import React from 'react';

import s from './About.styl';

export const About = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>About</h1>
        </div>
        <div className={s.siteContentLeft}>
          <div className={s.aboutSummary}>
            I am a junior full stack web developer looking for opportunities to refine my skills and make great things. 
            Through self-teaching and General Assembly's 12 week Web Development Immersive I am knowledgable in full stack in 
            JavaScript and Ruby. I am also skilled in command line, using Git/GitHub, prototyping, and user design.

            I am now continuously teaching myself new web development frameworks and methodologies that will allow me to create more engaging and interactive 
            web applications for my own project and others — a process that I plan to continue throughout my career.
          </div>
        </div>
        <div className={s.siteContentRight} >
          <img className={s.aboutTechnologies} src="https://farm2.staticflickr.com/1499/25753208531_857a328a0b_m.jpg"/>
        </div>
      </div>
    );
  },
});

