import React from 'react';

import s from './About.styl';

export const About = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>About</h1>
        </div>
        <div className={s.content}>
          <p>Before web development, I used to work in the nonprofit sector as a Health Educator 
            teaching health workshops to underprivileged teens across the San Francisco Unified School District.
          </p>
        </div>
      </div>

    );
  },
});

