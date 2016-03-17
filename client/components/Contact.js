import React from 'react';

import s from './Contact.styl';

export const Contact = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>Contact</h1>
        </div>
        <img className={s.contactPhoto} src='http://2.bp.blogspot.com/-nQc-Dj517_o/UTns6klEtTI/AAAAAAAAAEw/F9nK5uSVUBQ/s1600/people_talking_on_phone.jpg' />
        <h3>
        	Lets get in touch! 
        </h3>
        <h3>
       	 Feel free to contact me through the following:
        </h3>
         <div className={s.socialNetwork}>
              <a href="https://www.linkedin.com/in/rockychau"><img className={s.socialPopout} src="http://bradsknutson.com/wp-content/themes/bradsknutson/images/linkedin-48circle.png" /></a>

              <a href="https://twitter.com/GreenInSF"><img className={s.socialPopout} src="http://bradsknutson.com/wp-content/themes/bradsknutson/images/twitter-48circle.png" /></a>

              <a href="https://www.github.com/rchau05"><img className={s.socialPopout} src="https://farm1.staticflickr.com/639/21326958281_65f6af9f0a.jpg" /></a>

              <a href="mailto:rnchau@mail.sfsu.edu"><img className={s.socialPopout} src="https://cdn1.iconfinder.com/data/icons/simple-icons/4096/email-4096-black.png" /></a>
          </div>
        <footer className={s.footer}>
          <small>
          	Built with ReactJS
          </small>
          <small>
          	&copy; Rocky Productions
          </small>
        </footer>
      </div>
    );
  },
});