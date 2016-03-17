import React from 'react';

import s from './Portfolio.styl';

export const Portfolio = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>Portfolio</h1>
        </div>

        <a href="http://www.telemohealth.com">
            <img className= {s.projectScreenshots} src="https://farm2.staticflickr.com/1572/25241454672_644ef53659_m.jpg"/>
        </a>

        <a href="http://paperfortuneteller.bitballoon.com">
          <img className= {s.projectScreenshots} src="https://farm6.staticflickr.com/5634/21860352959_62eb7a1800_k.jpg"/>
        </a>

        <a href="https://projectallison.herokuapp.com">
          <img className= {s.projectScreenshots} src="https://farm1.staticflickr.com/714/21318739765_30e75ee82b.jpg"/>
        </a>

        <a href="http://weatherly-rc.bitballoon.com/">
            <img className= {s.projectScreenshots} src="https://farm6.staticflickr.com/5801/21860347209_94ae6b4e1e_k.jpg"/>
        </a>

          <a href="http://rchau05.github.io/asteroid-game/">
            <img className= {s.projectScreenshots} src="https://farm1.staticflickr.com/612/22452497376_47f326a885_k.jpg"/>
          </a>
      
          <a href="https://vote4u.herokuapp.com/">
            <img className= {s.projectScreenshots} src="https://farm1.staticflickr.com/595/21318753655_4c2ce2e06c.jpg"/>
          </a>  

      </div>
    );
  },
});

