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
          Before web development, I used to work in the nonprofit sector as a Health Educator 
          teaching health workshops to underprivileged teens across the San Francisco Unified School District.

          Although I found my work fulfilling, I decided to I needed a change.  I attended a Ruby on Rails workshop where I built my very first app. I got extremely hooked and saw myself being developing web applications in the long term!  
          Thus my journey began with General Assembly's 12 week Web Development Immersive (WDI).  In 2015 from June to September I've learned, applied, and built 3 working <a href="#portfolio">projects</a> with up-to-date industry tools in Javascript and Ruby.  

          After WDI, I quickly put my skills to further use through co-founding two startups as a web developer.  I've built <a href="https://winestar.herokuapp.com/">Winestar</a>, using Rails and PostgresSQL in an agile environment setting with UX designers, 
          Product Managers and fellow web developers to build an app from concept to deploy with 3 weeks.  
          Another app I built was "Zoi Health" found in the Apple app store for <a href="http://www.telemohealth.com/">Telemo Health</a> 
          where I was tasked to build the dashboard for health coaches to keep track of their patients health.  Both of these startups are currently in operation and business is growing since their recent launch.

          I am now continuously teaching myself new web development frameworks and methodologies that will allow me to create more engaging and interactive 
          web applications for my own project and others — a process that I plan to continue throughout my career.
        </div>
        <div className={s.siteContentRight} >
          <img className= {s.portrait} src='./portrait.jpg' />
        </div>
      </div>
    );
  },
});

