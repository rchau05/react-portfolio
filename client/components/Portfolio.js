import React from 'react';

import s from './Portfolio.styl';

export const Portfolio = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>Portfolio</h1>
        </div>
        <div className={s.siteContentLeft}>
          hi
        </div>
      </div>
    );
  },
});

